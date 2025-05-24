import {PencilIcon, PlusIcon, TrashIcon, UserIcon} from "lucide-react";
import { stockData } from "../data/StockData";
import Dialog from "../components/Dialog";
import {StockForm} from "../forms/StockForm.tsx";
import {useReducer, useState} from "react";
import type {StockType} from "../Types/StockType.ts";
import StockReducer from "../reducer/StockReducer.ts";

const StockPage = () =>{
     const [isDialogOpen , setIsDialogOpen] = useState <boolean>( false );
/*
     const [stocks , setStocks] = useState<StockType[]>(stockData);
*/
     const [stockToEdit, setStockToEdit] = useState<StockType | null>(null);
     const [srockState, dispatch] = useReducer(StockReducer, stockData);

     const onEdit = (stock: StockType) => () => {
         setStockToEdit(stock);
         setIsDialogOpen(true);
     }

     const onSubmit = (stock: StockType) => {
         if (stockToEdit !== null) {
            /* setStocks(prevState =>
                 prevState.map((originalStock) =>
                     originalStock.id === stock.id ? stock : originalStock)
             );*/
             dispatch({type: "UPDATE", payload: stock});
         }else {
/*
             setStocks([...stocks, stock]);
*/
             dispatch({type: "ADD", payload: stock});
         }
         setIsDialogOpen(false);
     }

     const oncancel = () => {
         setIsDialogOpen(false);
     }

     const saveBtnClicked = () => {
         setStockToEdit(null);
         setIsDialogOpen(true);
     }

     const onDelete = (id: number) => () => {
/*
         setStocks(stocks.filter((stock) => stock.id !== id));
*/
         dispatch({type: "DELETE", payload: id});
     }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <UserIcon size={24} className="mr-2 text-blue-600" />
                    Stock Management
                </h3>
                <button
                    onClick={saveBtnClicked}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm flex items-center transition-colors duration-200"
                >
                    <PlusIcon size={18} className="mr-1" />
                    Add Stock
                </button>
            </div>

            {srockState.length === 0 ? (
                <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
                    <p className="text-gray-500">No Stocks found. Add your first Stock!</p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                unit price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                measurement unit
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {srockState.map((stock, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors duration-150"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">{stock.name}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-500 truncate max-w-xs">
                                        {stock.price}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-500">{stock.qty}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-500">{stock.m_unit}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2 flex">
                                    <button
                                        className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50 transition-colors duration-150"
                                        title="Edit customer"
                                        onClick={onEdit(stock)}
                                    >
                                        <PencilIcon size={18} />
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors duration-150"
                                        title="Delete customer"
                                        onClick={onDelete(stock.id)}
                                    >
                                        <TrashIcon size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Dialog
                isDialogOpen={isDialogOpen}
                title={"Add Stock"}
            >
                <StockForm
                    onsubmit = {onSubmit}
                    oncancel={oncancel}
                    initialValues={stockToEdit !== null ? stockToEdit : undefined}

                />
            </Dialog>
        </div>

    );
};

export default StockPage;

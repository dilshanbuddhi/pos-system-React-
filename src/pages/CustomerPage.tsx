import {useReducer, useState} from "react";
import { customerData } from "../data/CustomerData";
import type { Customer } from "../Types/Customer";
import CustomerForm from "../forms/CustomerForm";
import Dialog from "../components/Dialog";
import { PencilIcon, TrashIcon, PlusIcon, UserIcon } from "lucide-react";
import CustomerReducer from "../reducer/CustomerReducer.ts";

const CustomerPage = () => {
/*
    const [customers, setCustomers] = useState<Customer[]>(customerData);
*/
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
    const [customerState, dispatch] = useReducer(CustomerReducer, customerData);

    const onSubmit = (customer: Customer) => {
        if (editingCustomer !== null) {
            // updating
          /*  setCustomers((prevState) =>
                prevState.map((originalCustomer) =>
                    originalCustomer.id === customer.id
                        ? { ...originalCustomer, ...customer }
                        : originalCustomer
                )
            );*/

            dispatch(
                {
                    type: "UPDATE",
                    payload: customer
                }
            )

        } else {
            // add
/*
            setCustomers([...customers, customer]);
*/
            dispatch(
                {
                    type: "ADD",
                    payload: customer
                }
            )
        }

        setIsDialogOpen(false);
    };

    const onAddCustomerClicked = () => {
        setEditingCustomer(null);
        setIsDialogOpen(true);
    };

    const onCancel = () => {
        setIsDialogOpen(false);
    };

    const onDelete = (id: number) => {
        /*setCustomers((prevState) =>
            prevState.filter((customer) => customer.id !== id)
        );*/

        dispatch(
            {
                type: "DELETE",
                payload: id
            }
        )
    };

    const onEdit = (customer: Customer) => {
        setEditingCustomer(customer);
        setIsDialogOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <UserIcon size={24} className="mr-2 text-blue-600" />
                    Customer Management
                </h3>
                <button
                    onClick={onAddCustomerClicked}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm flex items-center transition-colors duration-200"
                >
                    <PlusIcon size={18} className="mr-1" />
                    Add Customer
                </button>
            </div>

            {customerState.length === 0 ? (
                <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
                    <p className="text-gray-500">No customers found. Add your first customer!</p>
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
                                Address
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                DOB
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {customerState.map((customer, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors duration-150"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">{customer.name}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-500 truncate max-w-xs">
                                        {customer.address}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-500">{customer.dateOfBirth}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2 flex">
                                    <button
                                        onClick={() => onEdit(customer)}
                                        className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50 transition-colors duration-150"
                                        title="Edit customer"
                                    >
                                        <PencilIcon size={18} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(customer.id)}
                                        className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors duration-150"
                                        title="Delete customer"
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
                title={editingCustomer !== null ? "Edit Customer" : "Add Customer"}
                isDialogOpen={isDialogOpen}
            >
                <CustomerForm
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    initialValues={editingCustomer !== null ? editingCustomer : undefined}
                />
            </Dialog>
        </div>
    );
};

export default CustomerPage;
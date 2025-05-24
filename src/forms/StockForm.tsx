import type {StockType} from "../Types/StockType.ts";
import {useState} from "react";

interface StockFormProps {
    onsubmit: (stock : StockType) => void
    oncancel: () => void
    initialValues?: StockType
}

export interface StockFormData {
    name: string;
    price: number;
    qty: number;
    m_unit: string;
}

const initialForm : StockFormData = {
    name: "",
    price: 0,
    qty: 0,
    m_unit: "",
}


export const StockForm = ({oncancel , onsubmit , initialValues} : StockFormProps) => {
    const initialFormData: StockFormData = initialValues
        ? {
            name: initialValues.name,
            price: initialValues.price,
            qty: initialValues.qty,
            m_unit: initialValues.m_unit
        }
        : initialForm;

    const [form , setForm] = useState<StockFormData>(initialFormData);

    const onSubmit = () => {
        console.log(form);

        onsubmit(
            {
                id: Date.now(),
                name: form.name,
                price: form.price,
                qty: form.qty,
                m_unit: form.m_unit,
            }
        );
        setForm(initialForm);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className="w-full max-w-lg">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={changeHandler}
                            placeholder="Enter Stock name"
                        />

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            price <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="price"
                            type="number"
                            value={form.price}
                            onChange={changeHandler}
                            placeholder="Enter price"
                        />

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            QTY <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="qty"
                            type="number"
                            value={form.qty}
                            onChange={changeHandler}
                            placeholder="Enter qty"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Measurement Unit <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="m_unit"
                            value={form.m_unit}
                            onChange={changeHandler}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Select unit --</option>
                            <option value="KG">KG</option>
                            <option value="G">G</option>
                            <option value="L">L</option>
                            <option value="ML">ML</option>
                            <option value="PCS">PCS</option>
                        </select>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end space-x-3">
                    <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={oncancel}
                    >

                        Cancel
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={onSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>

    );
};

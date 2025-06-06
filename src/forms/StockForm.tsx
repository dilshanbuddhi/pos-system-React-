import { useState } from "react";

// Mock StockType interface for demonstration
interface StockType {
    id: number;
    name: string;
    price: number;
    qty: number;
    m_unit: string;
}

interface StockFormProps {
    onsubmit: (stock: StockType) => void;
    oncancel: () => void;
    initialValues?: StockType;
}

export interface StockFormData {
    name: string;
    price: number;
    qty: number;
    m_unit: string;
}

const initialForm: StockFormData = {
    name: "",
    price: 0,
    qty: 0,
    m_unit: "",
};

export const StockForm = ({ oncancel, onsubmit, initialValues }: StockFormProps) => {
    const initialFormData: StockFormData = initialValues
        ? {
            name: initialValues.name,
            price: initialValues.price,
            qty: initialValues.qty,
            m_unit: initialValues.m_unit
        }
        : initialForm;

    const [form, setForm] = useState<StockFormData>(initialFormData);
    const [focusedField, setFocusedField] = useState<string>("");

    const onSubmit = () => {
        console.log(form);
        onsubmit({
            id: initialValues ? initialValues.id : Date.now(),
            name: form.name,
            price: form.price,
            qty: form.qty,
            m_unit: form.m_unit,
        });
        setForm(initialForm);
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    };

    const InputField = ({
                            label,
                            name,
                            type = "text",
                            placeholder,
                            value,
                            icon
                        }: {
        label: string;
        name: string;
        type?: string;
        placeholder: string;
        value: string | number;
        icon: string;
    }) => (
        <div className="relative group">
            <label className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-200 group-hover:text-indigo-600">
                {label} <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-slate-400 text-lg transition-colors duration-200 group-hover:text-indigo-500">
            {icon}
          </span>
                </div>
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={changeHandler}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField("")}
                    placeholder={placeholder}
                    className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl shadow-sm transition-all duration-300 ease-out
            ${focusedField === name
                        ? 'border-indigo-500 shadow-lg shadow-indigo-100 scale-[1.02] bg-gradient-to-r from-white to-indigo-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }
            focus:outline-none focus:ring-0 text-slate-700 placeholder-slate-400
            backdrop-blur-sm font-medium`}
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 -z-10 transition-opacity duration-300
          ${focusedField === name ? 'opacity-5' : ''}`} />
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-xl">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-white/20 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-10 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-rose-400 to-orange-400 rounded-full opacity-10 blur-2xl" />

                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-4">
                                <span className="text-white text-2xl">📦</span>
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                {initialValues ? 'Edit Stock' : 'Add New Stock'}
                            </h2>
                            <p className="text-slate-500 mt-2">Manage your inventory with style</p>
                        </div>

                        <div className="space-y-6">
                            <InputField
                                label="Product Name"
                                name="name"
                                placeholder="Enter product name"
                                value={form.name}
                                icon="🏷️"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField
                                    label="Price"
                                    name="price"
                                    type="number"
                                    placeholder="0.00"
                                    value={form.price}
                                    icon="💰"
                                />

                                <InputField
                                    label="Quantity"
                                    name="qty"
                                    type="number"
                                    placeholder="0"
                                    value={form.qty}
                                    icon="📊"
                                />
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-200 group-hover:text-indigo-600">
                                    Measurement Unit <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 text-lg transition-colors duration-200 group-hover:text-indigo-500">
                      📏
                    </span>
                                    </div>
                                    <select
                                        name="m_unit"
                                        value={form.m_unit}
                                        onChange={changeHandler}
                                        onFocus={() => setFocusedField("m_unit")}
                                        onBlur={() => setFocusedField("")}
                                        className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl shadow-sm transition-all duration-300 ease-out
                      ${focusedField === "m_unit"
                                            ? 'border-indigo-500 shadow-lg shadow-indigo-100 scale-[1.02] bg-gradient-to-r from-white to-indigo-50'
                                            : 'border-slate-200 hover:border-slate-300'
                                        }
                      focus:outline-none focus:ring-0 text-slate-700 font-medium appearance-none cursor-pointer`}
                                    >
                                        <option value="" className="text-slate-400">-- Select unit --</option>
                                        <option value="KG">Kilograms (KG)</option>
                                        <option value="G">Grams (G)</option>
                                        <option value="L">Liters (L)</option>
                                        <option value="ML">Milliliters (ML)</option>
                                        <option value="PCS">Pieces (PCS)</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-end space-x-4">
                            <button
                                type="button"
                                onClick={oncancel}
                                className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200
                         transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300/50
                         border border-slate-200 backdrop-blur-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={onSubmit}
                                className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600
                         hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25
                         focus:outline-none focus:ring-4 focus:ring-indigo-300/50 relative overflow-hidden group"
                            >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Save Stock</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Demo component to show the form in action
export default function App() {
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = (stock: StockType) => {
        console.log('Stock submitted:', stock);
        alert(`Stock "${stock.name}" saved successfully!`);
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    if (!showForm) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-6 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-lg mb-6">
                        <span className="text-white text-3xl">✅</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Form Completed!</h2>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                    >
                        Show Form Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <StockForm
            onsubmit={handleSubmit}
            oncancel={handleCancel}
        />
    );
}
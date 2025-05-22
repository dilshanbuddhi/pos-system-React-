import { type ChangeEvent, useState } from "react";
import type { Customer } from "../Types/Customer";

export interface CustomerFormData {
    name: string;
    address: string;
    dateOfBirth: string;
}

const initialForm: CustomerFormData = {
    name: "",
    address: "",
    dateOfBirth: "",
};

interface CustomerFormProps {
    onSubmit: (customer: Customer) => void;
    onCancel: () => void;
    initialValues?: Customer;
}

const CustomerForm = ({ onSubmit, onCancel, initialValues }: CustomerFormProps) => {
    const initialFormData: CustomerFormData = initialValues
        ? {
            name: initialValues.name,
            dateOfBirth: initialValues.dateOfBirth,
            address: initialValues.address,
        }
        : initialForm;

    const [form, setForm] = useState<CustomerFormData>(initialFormData);
    const [errors, setErrors] = useState<Partial<Record<keyof CustomerFormData, string>>>({});

    // Basic validation
    const validate = (): Partial<Record<keyof CustomerFormData, string>> => {
        const newErrors: Partial<Record<keyof CustomerFormData, string>> = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.address.trim()) newErrors.address = "Address is required";
        if (!form.dateOfBirth.trim()) {
            newErrors.dateOfBirth = "Date of birth is required";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.dateOfBirth)) {
            newErrors.dateOfBirth = "Use format YYYY-MM-DD";
        }
        return newErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit({
                name: form.name,
                dateOfBirth: form.dateOfBirth,
                address: form.address,
                id: initialValues ? initialValues.id : Date.now(),
            });
            setForm(initialForm);
            setErrors({});
        }
    };

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
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                errors.name
                                    ? "border-red-300 focus:ring-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Enter customer name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="address"
                            type="text"
                            value={form.address}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                errors.address
                                    ? "border-red-300 focus:ring-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Enter address"
                        />
                        {errors.address && (
                            <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="dateOfBirth"
                            type="date"
                            value={form.dateOfBirth}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                errors.dateOfBirth
                                    ? "border-red-300 focus:ring-red-500"
                                    : "border-gray-300"
                            }`}
                        />
                        {errors.dateOfBirth && (
                            <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end space-x-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {initialValues ? "Save Changes" : "Add Customer"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;
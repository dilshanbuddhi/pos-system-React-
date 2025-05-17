import { FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import type { CustomerType } from "../Types/CustomerType.tsx";

interface CustomerFormProps {
    editCustomer: CustomerType | null;
    onCancel: () => void;
    onSave: (customer: { name: string; email: string; phone: string }) => void;
}

const CustomerForm = ({ onSave, onCancel, editCustomer }: CustomerFormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (editCustomer) {
            setName(editCustomer.name);
            setEmail(editCustomer.email);
            setPhone(editCustomer.phone);
        } else {
            setName("");
            setEmail("");
            setPhone("");
        }
    }, [editCustomer]);

    const saveOnAction = (event: React.FormEvent) => {
        event.preventDefault();
        if (!name || !email || !phone) return;

        onSave({ name, email, phone });

        // Clear form
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                <FaUsers className="text-blue-600 mr-2" />
                {editCustomer ? "Edit Customer" : "Add New Customer"}
            </h2>

            <form className="space-y-5" onSubmit={saveOnAction}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    {editCustomer ? "Update" : "Submit"}
                </button>

                <button
                    onClick={onCancel}
                    type="button"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default CustomerForm;

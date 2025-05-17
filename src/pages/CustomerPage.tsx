import { FaUsers } from "react-icons/fa";
import NavBar from "../components/NavBar.tsx";
import CustomerForm from "../forms/CustomerForm.tsx";
import { useState } from "react";
import Dialog from "../components/Dialog.tsx";
import type { CustomerType } from "../Types/CustomerType.tsx";

const CustomerPage = () => {
    const [open, setOpen] = useState(false);
    const [editCustomer, setEditCustomer] = useState<CustomerType | null>(null);
    const [customers, setCustomers] = useState<CustomerType[]>([
        { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
        { id: 3, name: "Michael Lee", email: "michael@example.com", phone: "456-789-1234" },
    ]);

    const addCustomer = (customer: { name: string; email: string; phone: string }) => {
        if (editCustomer) {
            // Update existing
            const updated = customers.map((c) =>
                c.id === editCustomer.id ? { ...c, ...customer } : c
            );
            setCustomers(updated);
        } else {
            // Add new
            const newCustomer = {
                ...customer,
                id: customers.length > 0 ? customers[customers.length - 1].id + 1 : 1,
            };
            setCustomers([...customers, newCustomer]);
        }

        setEditCustomer(null);
        setOpen(false);
    };

    const setDialog = () => {
        setEditCustomer(null);
        setOpen(true);
    };

    const setCancel = () => {
        setEditCustomer(null);
        setOpen(false);
    };

    const onDelete = (id: number) => {
        setCustomers(customers.filter((customer) => customer.id !== id));
    };

    const onEdit = (customer: CustomerType) => {
        setEditCustomer(customer);
        setOpen(true);
    };

    return (
        <div>
            <NavBar />
            <Dialog title={editCustomer ? "Edit Customer" : "Add New Customer"} open={open}>
                <CustomerForm onSave={addCustomer} onCancel={setCancel} editCustomer={editCustomer} />
            </Dialog>

            <div style={{ paddingTop: '75px' }} className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold flex items-center mb-6 text-gray-800">
                        <FaUsers className="text-blue-600 mr-2" /> Customers
                    </h1>

                    <div className="overflow-x-auto">
                        <div className="flex justify-end">
                            <button
                                onClick={setDialog}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                            >
                                Add Customer
                            </button>
                        </div>
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                            <tr className="bg-blue-600 text-white text-left">
                                <th className="py-3 px-4">ID</th>
                                <th className="py-3 px-4">Name</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Phone</th>
                                <th className="py-3 px-4">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{customer.id}</td>
                                    <td className="py-3 px-4">{customer.name}</td>
                                    <td className="py-3 px-4">{customer.email}</td>
                                    <td className="py-3 px-4">{customer.phone}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                                            onClick={() => onEdit(customer)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
                                            onClick={() => onDelete(customer.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerPage;

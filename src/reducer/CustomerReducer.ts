import type {Customer} from "../Types/Customer.ts";

type CustomerReducer =
    | { type: "ADD", payload: Customer }
    | { type: "DELETE", payload: number }
    | { type: "UPDATE", payload: Customer };

const customerReducer = (state: Customer[], action: CustomerReducer) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter(customer => customer.id !== action.payload);
        case "UPDATE":
            return state.map(customer => customer.id === action.payload.id ? action.payload : customer);
        default:
            return state;
    }

}

export default customerReducer
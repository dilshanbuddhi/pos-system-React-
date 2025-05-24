import type {Customer} from "../Types/Customer.ts";

type CustomerReducer = {
    type: "ADD",
    payload: Customer
};
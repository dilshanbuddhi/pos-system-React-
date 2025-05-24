import type {StockType} from "../Types/StockType.ts";

type StockReducer =
    {
    type: "ADD";
    payload: StockType;
}
| {
    type: "DELETE";
    payload: StockType;
}
| {
    type: "UPDATE";
    payload: StockType;
};



const customerReducer = (state: StockType[], action: StockReducer) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter((stock) => stock.id !== action.payload.id);
            case "UPDATE":
            return state.map((stock) => stock.id === action.payload.id ? action.payload : stock);
        default:
    }
}

export default customerReducer

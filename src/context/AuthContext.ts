import {createContext} from "react";

export interface authContextType {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

 export const AuthContext = createContext<authContextType | undefined>(undefined);
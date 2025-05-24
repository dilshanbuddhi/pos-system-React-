import {useState} from "react";
import {AuthContext} from "./AuthContext";

interface authProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({children}: authProviderProps) => {
    const [isAuth, setIsAuth] = useState(false);
    
    const login = () => {
        setIsAuth(true);
    }

    const logout = () => {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
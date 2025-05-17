import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import {Toaster} from "react-hot-toast";
import NavBar from "../components/NavBar.tsx";

const Layout = () => {
    return <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        <Toaster
            position="top-center"
        />
    </>
}

export  default Layout
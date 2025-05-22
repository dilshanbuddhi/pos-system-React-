import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import CustomerPage from "./pages/CustomerPage.tsx";
import Layout from "./pages/Layout.tsx";
import StockPage from "./pages/StockPage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/about", element: <About/>},
            {path: "/contact", element: <Contact/>},
            {path: "/login", element: <Login/>},
            {path: "/dashboard", element: <Dashboard/>},
            {path: "/dashboard/customer", element: <CustomerPage/>},
            {path: "/dashboard/stock", element: <StockPage/>},

        ]
    }
])

export default router
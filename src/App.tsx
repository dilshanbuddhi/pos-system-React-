import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import CustomerPage from "./pages/CustomerPage.tsx";



function App() {

    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/dashboard/customer"} element={<CustomerPage/>}/>
            </Routes>
        </Router>
);
}

export default App;

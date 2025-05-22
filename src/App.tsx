import './App.css';
import About from "./pages/About.tsx";




function App() {

    return (
        <About/>
      /*  <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/dashboard/customer"} element={<CustomerPage/>}/>
            </Routes>
        </Router>*/
);
}

export default App;

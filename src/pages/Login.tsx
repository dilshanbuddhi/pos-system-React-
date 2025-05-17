import Footer from "../components/Footer.tsx";
import NavBar from "../components/NavBar.tsx";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        console.log('Login button clicked');
        navigate('/dashboard');
    }
            return (

            <div>
                <NavBar/>
                <div style={{paddingTop: '100px' }} className="min-h-screen flex flex-col justify-between bg-gray-400 text-white ">
                    <div className="flex flex-1 justify-center items-center px-4">
                        <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="username" className="block mb-1 font-medium">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your username"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>

                                <p className="text-sm text-center mt-4">
                                    Don't have an account?{' '}
                                    <a href="/register" className="text-blue-400 hover:underline">Register</a>
                                </p>
                            </form>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        );

}

export default Login;

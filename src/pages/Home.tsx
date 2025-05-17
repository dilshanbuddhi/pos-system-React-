import { Component } from 'react';
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

class Home extends Component {
    render() {
        return (
            <div className="min-h-screen flex flex-col">
                <NavBar />

                {/* Main Content */}
                <main className="flex-1 pt-20 px-4 sm:px-8 text-center">


                    {/* Logo */}
                    <div className="mb-6">
                        <img
                            src="/src/assets/pos-letter-logo-design-on-white-background-pos-creative-circle-letter-logo-concept-pos-letter-design-pos-letter-logo-design-on-white-background-pos-c-vector%20(1).jpg"
                            alt="Logo"
                            className="w-28 mx-auto"
                        />
                        <h1 className="text-6xl text-blue-950 font-bold mb-4">Welcome to Our Website</h1>
                        <p className="text-lg text-gray-600 mb-8">Discover our services and products.</p>
                    </div>

                    {/* Hero Image */}


                    {/* Cards Section */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-6xl mx-auto hover:ease-in-out duration-300 backdrop-blur-2xl">
                        {[1, 2, 3].map((num) => (
                            <div
                                key={num}
                                className="bg-gray-200 p-6 rounded-xl shadow-md text-left hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">Card Title {num}</h3>
                                <p className="text-gray-600">This is a simple description for card {num}. Customize this section as needed.</p>
                            </div>
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default Home;

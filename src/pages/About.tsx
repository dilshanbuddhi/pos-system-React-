import {Component} from 'react';
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";


class About extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div style={{paddingTop: '75px'}}>
                    <h1>About Page</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;
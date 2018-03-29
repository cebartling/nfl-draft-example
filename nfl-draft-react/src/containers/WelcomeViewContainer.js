import React, {Component} from 'react';
import './WelcomeViewContainer.css';
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";


class WelcomeViewContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    render() {
        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Welcome</h1>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default WelcomeViewContainer;

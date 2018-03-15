import React, {Component} from 'react';
import './WelcomeViewContainer.css';
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import PanelHeader from "../components/header/PanelHeader";
import Card from "../components/card/Card";


class WelcomeViewContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    render() {
        return (
            <div className="wrapper ">
                <Sidebar/>
                <div className="main-panel">
                    <PanelHeader/>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <Card title="Mock Drafts"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Card title="Player Bios"/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default WelcomeViewContainer;

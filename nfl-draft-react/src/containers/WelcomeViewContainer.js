import React, {Component} from 'react';
import './WelcomeViewContainer.css';
import Nav from "../components/nav/Nav";


class WelcomeViewContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    // render() {
    //     return (
    //         <div className="wrapper ">
    //             <Sidebar/>
    //             <div className="main-panel">
    //                 <PanelHeader title={'Welcome'}/>
    //                 <div className="content">
    //                     <div className="row">
    //                         <div className="col-md-12">
    //                             <Card title="Mock Drafts"/>
    //                         </div>
    //                     </div>
    //                     <div className="row">
    //                         <div className="col-md-12">
    //                             <Card title="Player Bios"/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <Footer/>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}

export default WelcomeViewContainer;

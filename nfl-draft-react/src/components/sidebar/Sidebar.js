import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Sidebar extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="sidebar" data-color="orange">
                <div className="logo">
                    <Link to="/" className="simple-text logo-normal">NFL Draft</Link>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li>
                            <a href="../examples/dashboard.html">
                                <i className="now-ui-icons design_app"/>
                                <p>Dashboard</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;

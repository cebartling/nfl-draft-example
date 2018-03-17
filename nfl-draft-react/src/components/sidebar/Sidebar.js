import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/fontawesome-free-solid';
import './Sidebar.css';

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
                            <Link to="/draft">
                                <FontAwesomeIcon icon={faCoffee}/> Draft
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;

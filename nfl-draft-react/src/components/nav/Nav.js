import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/">NFL Draft Machine</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            {/*<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>*/}
                            {/*<Link className="nav-link disabled" to="/">Home <span className="sr-only">(current)</span></Link>*/}
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/playerBio">Player Bios</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/draft">Mock Draft</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;

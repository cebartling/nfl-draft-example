import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

class Nav extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { match, location, history } = this.props;
        console.log(`You are now at ${location.pathname}`);

        let homeClassNames = classNames({
            'nav-item': true,
            'active': location.pathname === '/'
        });
        let playerBiosClassNames = classNames({
            'nav-item': true,
            'active': location.pathname === '/playerBio'
        });
        let mockDraftsClassNames = classNames({
            'nav-item': true,
            'active': location.pathname === '/draft'
        });
        let teamsClassNames = classNames({
            'nav-item': true,
            'active': location.pathname === '/teams'
        });

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
                        <li className={homeClassNames}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className={playerBiosClassNames}>
                            <Link className="nav-link" to="/playerBio">Player Bios</Link>
                        </li>

                        <li className={mockDraftsClassNames}>
                            <Link className="nav-link" to="/draft">Mock Draft</Link>
                        </li>

                        <li className={teamsClassNames}>
                            <Link className="nav-link" to="/teams">Teams</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Nav);

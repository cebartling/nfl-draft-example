import React, {Component} from 'react';
import './App.css';
import {Router, Route} from 'react-router-dom';
import history from "./lib/history";
import WelcomeViewContainer from "./containers/WelcomeViewContainer";
import DraftViewContainer from "./containers/DraftViewContainer";


class App extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <div className="main-content">
                        <Route exact path="/" component={WelcomeViewContainer}/>
                        <Route exact path="/draft" component={DraftViewContainer}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

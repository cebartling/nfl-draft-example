import React, {Component} from 'react';
import './PlayerBioViewContainer.css';
// import {compose, graphql} from 'react-apollo';
// import PlayerByIdQuery from '../graphql/players/PlayerByIdQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";


class PlayerBioViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Player Bios</h1>
                        <div className="row">
                            <form className="form-inline">
                                <label className="sr-only"
                                       htmlFor="inlineFormInputName2">Search input</label>
                                <input type="text"
                                       className="form-control mb-2 mr-sm-2 col-5-sm"
                                       id="inlineFormInputName2"
                                       placeholder="Search for player"/>
                                <button type="submit" className="btn btn-primary mb-2">
                                    <i className="fa fa-search"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}


export default PlayerBioViewContainer;

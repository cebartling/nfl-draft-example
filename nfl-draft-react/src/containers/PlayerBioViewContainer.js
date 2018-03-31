import React, {Component} from 'react';
import './PlayerBioViewContainer.css';
import {compose, graphql} from 'react-apollo';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import PlayerByNameQuery from "../graphql/players/PlayerByNameQuery";


class PlayerBioViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
        value: ''
    };

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        console.log(`Submitting search: ${this.state.value}`);
    }

    handleOnChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        // const {data: {refetch}} = this.props;

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Player Bios</h1>
                        <div className="row">
                            <form className="form-inline" onSubmit={this.handleOnSubmit}>
                                <label className="sr-only"
                                       htmlFor="searchInput">Search input</label>
                                <input type="text"
                                       value={this.state.value}
                                       onChange={this.handleOnChange}
                                       className="form-control mb-2 mr-sm-2 col-5-sm"
                                       id="searchInput"
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

const playerByNameQuery = graphql(PlayerByNameQuery, {
    options: {
        fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
        players: props.data.listNflDraftMachinePlayers && props.data.listNflDraftMachinePlayers.items,
    })
});

const PlayerBioViewContainerWithData = compose(playerByNameQuery)(PlayerBioViewContainer);

export default PlayerBioViewContainerWithData;

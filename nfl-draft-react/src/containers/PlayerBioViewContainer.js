import React, {Component} from 'react';
import './PlayerBioViewContainer.css';
import {compose, graphql} from 'react-apollo';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import AllPlayersQuery from "../graphql/players/AllPlayersQuery";
import PlayerMockDraftTableRow from "../components/player/PlayerMockDraftTableRow";
import _ from 'lodash';


class PlayerBioViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
        lastNameSearch: undefined,
        selectedPosition: undefined
    };

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnChangePosition = this.handleOnChangePosition.bind(this);
    }

    handleOnClick(e) {
        this.setState({lastNameSearch: undefined, selectedPosition: undefined});
    }

    handleOnChange(e) {
        this.setState({lastNameSearch: e.target.value});
    }

    handleOnChangePosition(e) {
        this.setState({selectedPosition: e.target.value});
    }

    renderPlayers(players) {
        let pick = 0;
        return players.map((player) => {
            pick++;
            return (<PlayerMockDraftTableRow player={player} pick={pick} key={player.PlayerId}/>);
        });
    }

    render() {
        const {players} = this.props;
        let filteredPlayers = players;
        if (this.state.lastNameSearch) {
            filteredPlayers = _.filter(filteredPlayers, (player) => {
                return player.LastName.startsWith(this.state.lastNameSearch);
            });
        }
        if (this.state.selectedPosition) {
            filteredPlayers = _.filter(filteredPlayers, (player) => {
                return player.Position === this.state.selectedPosition;
            });
        }

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Player Bios</h1>
                        <div className="row">
                            <form className="form-inline mx-auto p-2">
                                <label className="sr-only"
                                       htmlFor="searchInput">Search input</label>
                                <input type="text"
                                       value={this.state.lastNameSearch}
                                       onChange={this.handleOnChange}
                                       className="form-control mr-sm-2 mb-2 mt-2"
                                       id="searchInput"
                                       placeholder="Search by last name"/>
                                <select id="positionDropdown"
                                        className="form-control mr-sm-2 mb-2 mt-2"
                                        onChange={this.handleOnChangePosition}
                                        value={this.state.selectedPosition}>
                                    <option value="">Select a position...</option>
                                    <option value="S">Safety</option>
                                    <option value="CB">Cornerback</option>
                                    <option value="ILB">Inside Linebacker</option>
                                    <option value="OLB">Outside Linebacker</option>
                                    <option value="EDGE">Edge Rusher</option>
                                    <option value="DL1T">Defensive Line (1 technique)</option>
                                    <option value="DL3T">Defensive Line (3 technique)</option>
                                    <option value="DL5T">Defensive Line (5 technique)</option>
                                    <option value="OC">Offensive Line: Center</option>
                                    <option value="OG">Offensive Line: Guard</option>
                                    <option value="OT">Offensive Line: Tackle</option>
                                    <option value="QB">Quarterback</option>
                                    <option value="FB">Fullback</option>
                                    <option value="RBC">Running Back (C)</option>
                                    <option value="RBF">Running Back (F)</option>
                                    <option value="WRF">Wide Receiver (Flanker)</option>
                                    <option value="WRS">Wide Receiver (Slot)</option>
                                    <option value="TE">Tight End</option>
                                    <option value="P">Punter</option>
                                    <option value="PK">Place Kicker</option>
                                </select>
                                <button type="button"
                                        onClick={this.handleOnClick}
                                        className="btn btn-secondary mb-2 mt-2">
                                    <i className="fa fa-eraser"/>
                                </button>
                            </form>
                        </div>
                        <div className="row">
                            <table className="table table-bordered table-hover table-responsive-sm table-striped">
                                <thead>
                                <tr>
                                    <th className="text-left">Name</th>
                                    <th className="text-left">Position</th>
                                    <th className="text-left">College</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredPlayers ? this.renderPlayers(filteredPlayers) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const allPlayersQuery = graphql(AllPlayersQuery, {
    options: {
        fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
        players: props.data.listNflDraftMachinePlayers && props.data.listNflDraftMachinePlayers.items,
    })
});

const PlayerBioViewContainerWithData = compose(allPlayersQuery)(PlayerBioViewContainer);

export default PlayerBioViewContainerWithData;

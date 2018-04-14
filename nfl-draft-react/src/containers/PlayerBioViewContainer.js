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
        lastNameFilter: undefined,
        collegeFilter: undefined,
        positionFilter: undefined
    };

    constructor(props) {
        super(props);
        this.handleOnClickResetFormFields = this.handleOnClickResetFormFields.bind(this);
        this.handeOnChangeLastNameFilter = this.handeOnChangeLastNameFilter.bind(this);
        this.handeOnChangeCollegeFilter = this.handeOnChangeCollegeFilter.bind(this);
        this.handleOnChangePositionFilter = this.handleOnChangePositionFilter.bind(this);
    }

    handleOnClickResetFormFields(e) {
        this.setState({lastNameFilter: '', collegeFilter: '', positionFilter: undefined});
    }

    handeOnChangeLastNameFilter(e) {
        this.setState({lastNameFilter: e.target.value});
    }

    handeOnChangeCollegeFilter(e) {
        this.setState({collegeFilter: e.target.value});
    }

    handleOnChangePositionFilter(e) {
        this.setState({positionFilter: e.target.value});
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
        if (this.state.lastNameFilter) {
            filteredPlayers = _.filter(filteredPlayers, (player) => {
                return player.LastName.startsWith(this.state.lastNameFilter);
            });
        }
        if (this.state.collegeFilter) {
            filteredPlayers = _.filter(filteredPlayers, (player) => {
                return player.College.startsWith(this.state.collegeFilter);
            });
        }
        if (this.state.positionFilter) {
            filteredPlayers = _.filter(filteredPlayers, (player) => {
                return player.Position === this.state.positionFilter;
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
                                       htmlFor="FilterInput">Filter input</label>
                                <input type="text"
                                       value={this.state.lastNameFilter}
                                       onChange={this.handeOnChangeLastNameFilter}
                                       className="form-control mr-sm-2 mb-2 mt-2"
                                       id="FilterInput"
                                       placeholder="Filter by last name"/>
                                <select id="positionDropdown"
                                        className="form-control mr-sm-2 mb-2 mt-2"
                                        onChange={this.handleOnChangePositionFilter}
                                        value={this.state.positionFilter ? this.state.positionFilter : ''}>
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
                                <label className="sr-only"
                                       htmlFor="collegeInput">Filter input</label>
                                <input type="text"
                                       value={this.state.collegeFilter}
                                       onChange={this.handeOnChangeCollegeFilter}
                                       className="form-control mr-sm-2 mb-2 mt-2"
                                       id="collegeInput"
                                       placeholder="Filter by college"/>
                                <button type="button"
                                        onClick={this.handleOnClickResetFormFields}
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
                                    <th className="text-center">Height</th>
                                    <th className="text-center">Weight</th>
                                    <th className="text-center">Position</th>
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

import React, {Component} from 'react';
import './TeamsViewContainer.css';
import {compose, graphql} from 'react-apollo';
import AllTeamsQuery from '../graphql/teams/AllTeamsQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import TeamTableRow from "../components/team/TeamTableRow";
import _ from 'lodash';


class TeamsViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    renderTeams(teams) {
        return _.orderBy(teams, ['Name'], ['asc']).map((team) => {
            return (<TeamTableRow team={team} key={team.TeamId}/>);
        });
    }

    render() {
        const {teams} = this.props;

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Teams</h1>
                        <table className="table table-bordered table-hover table-responsive-sm table-striped">
                            <thead>
                            <tr>
                                <th className="text-left">Team Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {teams ? this.renderTeams(teams) : null}
                            </tbody>
                        </table>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const allTeamsQuery = graphql(AllTeamsQuery, {
    options: {
        fetchPolicy: 'cache-and-network'
    },
    props: ({data: {listNflDraftMachineTeams}}) => ({
        teams: listNflDraftMachineTeams && listNflDraftMachineTeams.items,
    })
});

const TeamsViewContainerWithData = compose(allTeamsQuery)(TeamsViewContainer);

export default TeamsViewContainerWithData;

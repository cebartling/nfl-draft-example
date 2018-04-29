import React, {Component} from 'react';
import {Query} from "react-apollo";
import './MockDraftViewContainer.css';
import AllDraftPicksQuery from '../graphql/draftPicks/AllDraftPicksQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import _ from "lodash";
import DraftPickTableRow from "../components/draftPick/DraftPickTableRow";


class MockDraftViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    renderQueryResults({loading, error, data}) {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        const draftPicks = data.listNflDraftMachineDraftPicks &&
            data.listNflDraftMachineDraftPicks.items;

        const renderDraftPicks = (draftPicks) => {
            return _.orderBy(draftPicks, ['OverallPick'], ['asc']).map((draftPick) => {
                return (<DraftPickTableRow draftPick={draftPick} key={draftPick.PickId}/>);
            });
        };

        return (
            <div className="">
                <h1>Mock Draft</h1>

                <table
                    className="table table-bordered table-hover table-responsive-sm table-striped">
                    <thead>
                    <tr>
                        <th className="text-right">Overall Pick</th>
                        <th className="text-right">Round</th>
                        <th className="text-right">Pick</th>
                        <th className="text-left">Team</th>
                        <th className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {draftPicks ? renderDraftPicks(draftPicks) : null}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        const {location} = this.props;
        const variables = {mockDraftId: location.state.mockDraftId};

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <Query query={AllDraftPicksQuery} variables={variables}>{this.renderQueryResults}</Query>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default MockDraftViewContainer;

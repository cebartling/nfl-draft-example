import React, {Component} from 'react';
import './MockDraftsListingViewContainer.css';
import {compose, graphql} from 'react-apollo';
import AllMockDraftsQuery from '../graphql/mockDrafts/AllMockDraftsQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import {Link} from "react-router-dom";
import MockDraftTableRow from "../components/mockDraft/MockDraftTableRow";
import _ from "lodash";


class MockDraftsListingViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    renderMockDrafts(mockDrafts) {
        return _.orderBy(mockDrafts, ['Name'], ['asc']).map((mockDraft) => {
            return (<MockDraftTableRow mockDraft={mockDraft} key={mockDraft.MockDraftId}/>);
        });
    }

    constructor(props) {
        super(props);
        this.onClickCreateNewMockDraft = this.onClickCreateNewMockDraft.bind(this);
    }

    onClickCreateNewMockDraft() {

    }

    render() {
        const {mockDrafts} = this.props;
        
        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Mock Drafts</h1>
                        <div className="text-left">
                            <Link className="btn btn-success"
                                    to="/mockDraft/new">Create new mock draft</Link>
                        </div>
                        <hr/>
                        <table className="table table-bordered table-hover table-responsive-sm table-striped">
                            <thead>
                            <tr>
                                <th className="text-right">Mock Draft</th>
                                <th className="text-right">Last Updated</th>
                            </tr>
                            </thead>
                            <tbody>
                            {mockDrafts ? this.renderMockDrafts(mockDrafts) : null}
                            </tbody>
                        </table>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const MockDraftsListingViewContainerWithData = compose(
    graphql(AllMockDraftsQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: (props) => ({
            mockDrafts: props.data.listNflDraftMachineMockDrafts && props.data.listNflDraftMachineMockDrafts.items,
        })
    }),
)(MockDraftsListingViewContainer);

export default MockDraftsListingViewContainerWithData;

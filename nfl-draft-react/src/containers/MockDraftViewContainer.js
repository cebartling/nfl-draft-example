import React, {Component} from 'react';
import './MockDraftViewContainer.css';
import {compose, graphql} from 'react-apollo';
import AllDraftPicksQuery from '../graphql/draftPicks/AllDraftPicksQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import _ from "lodash";
import DraftPickTableRow from "../components/draftPick/DraftPickTableRow";


class MockDraftViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    renderDraftPicks(draftPicks) {
        return _.orderBy(draftPicks, ['OverallPick'], ['asc']).map((draftPick) => {
            return (<DraftPickTableRow draftPick={draftPick} key={draftPick.PickId}/>);
        });
    }

    render() {
        const {draftPicks} = this.props;

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Mock Draft</h1>
                        <table className="table table-bordered table-hover table-responsive-sm table-striped">
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
                            {draftPicks ? this.renderDraftPicks(draftPicks) : null}
                            </tbody>
                        </table>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const MockDraftViewContainerWithData = compose(
    graphql(AllDraftPicksQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: (props) => ({
            draftPicks: props.data.listNflDraftMachineDraftPicks && props.data.listNflDraftMachineDraftPicks.items,
        })
    }),
    // graphql(DeletePostMutation, {
    //     props: (props) => ({
    //         onDelete: (post) => props.mutate({
    //             variables: { id: post.id, expectedVersion: post.version },
    //             optimisticResponse: () => ({ deletePost: { ...post, __typename: 'Post' } }),
    //         })
    //     }),
    //     options: {
    //         refetchQueries: [{ query: AllPostsQuery }],
    //         update: (proxy, { data: { deletePost: { id } } }) => {
    //             const query = AllPostsQuery;
    //             const data = proxy.readQuery({ query });
    //
    //             data.allPost.posts = data.allPost.posts.filter(post => post.id !== id);
    //
    //             proxy.writeQuery({ query, data });
    //         }
    //     }
    // }),
    // graphql(UpdatePostMutation, {
    //     props: (props) => ({
    //         onEdit: (post) => {
    //             props.mutate({
    //                 variables: { ...post, expectedVersion: post.version },
    //                 optimisticResponse: () => ({ updatePost: { ...post, __typename: 'Post', version: post.version + 1 } }),
    //             })
    //         }
    //     }),
    //     options: {
    //         refetchQueries: [{ query: AllPostsQuery }],
    //         update: (dataProxy, { data: { updatePost } }) => {
    //             const query = AllPostsQuery;
    //             const data = dataProxy.readQuery({ query });
    //
    //             data.allPost.posts = data.allPost.posts.map(post => post.id !== updatePost.id ? post : { ...updatePost });
    //
    //             dataProxy.writeQuery({ query, data });
    //         }
    //     }
    // })
)(MockDraftViewContainer);

export default MockDraftViewContainerWithData;

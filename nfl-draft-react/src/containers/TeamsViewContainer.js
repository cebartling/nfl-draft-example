import React, {Component} from 'react';
import './TeamsViewContainer.css';
import {compose, graphql} from 'react-apollo';
import AllTeamsQuery from '../graphql/teams/AllTeamsQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import TeamTableRow from "../components/team/TeamTableRow";


class TeamsViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    renderTeams(teams) {
        return teams.map((team) => {
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

const TeamsViewContainerWithData = compose(
    graphql(AllTeamsQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: (props) => ({
            teams: props.data.listNflDraftMachineTeams && props.data.listNflDraftMachineTeams.items,
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
)(TeamsViewContainer);

export default TeamsViewContainerWithData;

import React, {Component} from 'react';
import './DraftViewContainer.css';
import {compose, graphql} from 'react-apollo';
import AllPlayersQuery from '../graphql/players/AllPlayersQuery';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import PlayerMockDraftTableRow from '../components/player/PlayerMockDraftTableRow';


class DraftViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    renderPlayers(players) {
        let pick = 0;
        return players.map((player) => {
            pick++;

            return (<PlayerMockDraftTableRow player={player} pick={pick} key={player.PlayerId}/>);
        });
    }

    render() {
        const {players} = this.props;

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>Mock Draft</h1>
                        <table className="table table-bordered table-hover table-responsive-lg table-striped">
                            <thead>
                            <tr>
                                <th>Pick</th>
                                <th>Name</th>
                                <th>Position</th>
                            </tr>
                            </thead>
                            <tbody>
                            {players ? this.renderPlayers(players) : null}
                            </tbody>
                        </table>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const DraftViewContainerWithData = compose(
    graphql(AllPlayersQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: (props) => ({
            players: props.data.listNflDraftMachinePlayers && props.data.listNflDraftMachinePlayers.items,
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
)(DraftViewContainer);

export default DraftViewContainerWithData;

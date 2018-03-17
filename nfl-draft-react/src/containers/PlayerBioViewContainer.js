import React, {Component} from 'react';
import './PlayerBioViewContainer.css';
import {compose, graphql} from 'react-apollo';
import PlayerBioQuery from '../graphql/players/PlayerBioQuery';
import Sidebar from "../components/sidebar/Sidebar";
import PanelHeader from "../components/header/PanelHeader";
import Footer from "../components/footer/Footer";
import PlayerCard from "../components/player/PlayerCard";


class PlayerBioViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const {player} = this.props;

        return (
            <div className="wrapper ">
                <Sidebar/>
                <div className="main-panel">
                    <PanelHeader title={'PlayerBio'}/>
                    <div className="content">
                        <PlayerCard player={player}/>
                    </div>
                    <Footer/>
                </div>
            </div>

        );
    }
}

const PlayerBioViewContainerWithData = compose(
    graphql(PlayerBioQuery, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: (props) => ({
            player: props.data.getNflDraftMachinePlayers,
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
)(PlayerBioViewContainer);

export default PlayerBioViewContainerWithData;
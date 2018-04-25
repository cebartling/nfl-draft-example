import React, {Component} from 'react';
import './NewMockDraftViewContainer.css';
import {compose} from 'react-apollo';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";


class NewMockDraftViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {

        return (
            <div>
                <Nav/>
                <main role="main" className="container">
                    <div className="">
                        <h1>New Mock Draft</h1>

                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

const NewMockDraftViewContainerWithData = compose(
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
)(NewMockDraftViewContainer);

export default NewMockDraftViewContainerWithData;

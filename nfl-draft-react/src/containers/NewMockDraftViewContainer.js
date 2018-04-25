import React, {Component} from 'react';
import './NewMockDraftViewContainer.css';
import {compose} from 'react-apollo';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";


class NewMockDraftViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.onClickFormSubmit = this.onClickFormSubmit.bind(this);
        this.onClickFormCancel = this.onClickFormCancel.bind(this);
    }

    onClickFormSubmit() {
    }

    onClickFormCancel() {
    }

    render() {

        return (
            <div>
                <Nav/>

                <main role="main" className="container">
                    <h1>New Mock Draft</h1>
                    <form className="mt-md-5">
                        <div className="form-group row">
                            <label htmlFor="mockDraftNameInput"
                                   className="col-sm-3 col-form-label">Mock draft name</label>
                            <div className="col-sm-9">
                                <input type="text"
                                       className="form-control"
                                       id="mockDraftNameInput"
                                       name="mockDraftNameInput"
                                       placeholder="Mock draft name"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-group row">
                            <label htmlFor="mockDraftNameInput"
                                   className="col-sm-3 col-form-label">&nbsp;</label>
                            <div className="col-sm-9 text-left">
                                <button className="btn btn-primary"
                                        onClick={this.onClickFormSubmit}>
                                    Next...
                                </button>
                                <button className="btn btn-secondary ml-2"
                                        onClick={this.onClickFormCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
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

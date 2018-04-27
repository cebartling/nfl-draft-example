import React, {Component} from 'react';
import {Mutation} from "react-apollo";
import './NewMockDraftViewContainer.css';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import CreateMockDraftMutation from '../graphql/mockDrafts/CreateMockDraftMutation';
import AllMockDraftsQuery from '../graphql/mockDrafts/AllMockDraftsQuery';
import moment from "moment";
import uuidv4 from 'uuid/v4';


const AddMockDraft = () => {
    let nameInput;
    const fn = (node) => {
        nameInput = node;
    };
    const updateFn = (cache, {data: {createMockDraft}}) => {
        const {mockDrafts} = cache.readQuery({query: AllMockDraftsQuery});
        const newlyCreatedMockDraft = [createMockDraft];
        cache.writeQuery({
            query: AllMockDraftsQuery,
            data: {listNflDraftMachineMockDrafts: mockDrafts ? mockDrafts.concat(newlyCreatedMockDraft) : newlyCreatedMockDraft}
        });
    };

    return (
        <Mutation mutation={CreateMockDraftMutation}
                  update={updateFn}>
            {(createMockDraft, {data}) => (
                <form className="mt-md-5" onSubmit={(e) => {
                    e.preventDefault();
                    const createNflDraftMachineMockDraftsInput = {
                        MockDraftId: uuidv4(),
                        Name: nameInput.value,
                        LastUpdated: moment().toISOString()
                    };
                    createMockDraft({variables: {input: createNflDraftMachineMockDraftsInput}});
                    nameInput.value = "";
                }}>
                    <div className="form-group row">
                        <label htmlFor="mockDraftNameInput"
                               className="col-sm-3 col-form-label">Mock draft name</label>
                        <div className="col-sm-9">
                            <input type="text"
                                   className="form-control"
                                   id="mockDraftNameInput"
                                   placeholder="Mock draft name"
                                   ref={fn}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group row">
                        <label htmlFor="mockDraftNameInput"
                               className="col-sm-3 col-form-label">&nbsp;</label>
                        <div className="col-sm-9 text-left">
                            <button className="btn btn-primary"
                                    type="submit">
                                Next...
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Mutation>
    );
};

class NewMockDraftViewContainer extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {

        return (

            <div>
                <Nav/>

                <main role="main" className="container">
                    <h1>New Mock Draft</h1>
                    <AddMockDraft/>
                </main>

                <Footer/>
            </div>
        );
    }
}

// const NewMockDraftViewContainerWithData = compose(
//     // graphql(DeletePostMutation, {
//     //     props: (props) => ({
//     //         onDelete: (post) => props.mutate({
//     //             variables: { id: post.id, expectedVersion: post.version },
//     //             optimisticResponse: () => ({ deletePost: { ...post, __typename: 'Post' } }),
//     //         })
//     //     }),
//     //     options: {
//     //         refetchQueries: [{ query: AllPostsQuery }],
//     //         update: (proxy, { data: { deletePost: { id } } }) => {
//     //             const query = AllPostsQuery;
//     //             const data = proxy.readQuery({ query });
//     //
//     //             data.allPost.posts = data.allPost.posts.filter(post => post.id !== id);
//     //
//     //             proxy.writeQuery({ query, data });
//     //         }
//     //     }
//     // }),
//     // graphql(UpdatePostMutation, {
//     //     props: (props) => ({
//     //         onEdit: (post) => {
//     //             props.mutate({
//     //                 variables: { ...post, expectedVersion: post.version },
//     //                 optimisticResponse: () => ({ updatePost: { ...post, __typename: 'Post', version: post.version + 1 } }),
//     //             })
//     //         }
//     //     }),
//     //     options: {
//     //         refetchQueries: [{ query: AllPostsQuery }],
//     //         update: (dataProxy, { data: { updatePost } }) => {
//     //             const query = AllPostsQuery;
//     //             const data = dataProxy.readQuery({ query });
//     //
//     //             data.allPost.posts = data.allPost.posts.map(post => post.id !== updatePost.id ? post : { ...updatePost });
//     //
//     //             dataProxy.writeQuery({ query, data });
//     //         }
//     //     }
//     // })
// )(NewMockDraftViewContainer);

export default NewMockDraftViewContainer;

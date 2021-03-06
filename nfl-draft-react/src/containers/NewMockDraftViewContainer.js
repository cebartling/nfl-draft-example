import React, {Component} from 'react';
import {Mutation} from "react-apollo";
import './NewMockDraftViewContainer.css';
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import CreateMockDraftMutation from '../graphql/mockDrafts/CreateMockDraftMutation';


const AddMockDraft = (props) => {
    const {history} = props;
    let nameInput;
    const fn = (node) => {
        nameInput = node;
    };
    const updateFn = (cache, {data: {createMockDraft}}) => {
        const location = {pathname: '/mockDraft', state: {mockDraftId: createMockDraft.MockDraftId}};
        history.push(location);
    };

    return (
        <Mutation mutation={CreateMockDraftMutation}
                  update={updateFn}>
            {(createMockDraft, {data}) => (
                <form className="mt-md-5" onSubmit={(e) => {
                    e.preventDefault();
                    const createMockDraftInput = {
                        Name: nameInput.value,
                    };
                    createMockDraft({variables: {input: createMockDraftInput}});
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
        const {history} = this.props;

        return (

            <div>
                <Nav/>

                <main role="main" className="container">
                    <h1>New Mock Draft</h1>
                    <AddMockDraft history={history}/>
                </main>

                <Footer/>
            </div>
        );
    }
}

export default NewMockDraftViewContainer;

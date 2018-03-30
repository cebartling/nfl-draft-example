import React, {Component} from 'react';
import './App.css';
import {Route, Router} from 'react-router-dom';
import history from "./lib/history";
import WelcomeViewContainer from "./containers/WelcomeViewContainer";
import DraftViewContainer from "./containers/DraftViewContainer";
import AWSAppSyncClient from "aws-appsync";
import {Rehydrated} from 'aws-appsync-react';
import {AUTH_TYPE} from "aws-appsync/lib/link/auth-link";
import {ApolloProvider} from 'react-apollo';
import PlayerBioViewContainer from "./containers/PlayerBioViewContainer";
import TeamsViewContainer from "./containers/TeamsViewContainer";

const client = new AWSAppSyncClient({
    url: process.env.REACT_APP_APPSYNC_ENDPOINT,
    region: process.env.REACT_APP_AWS_REGION,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: process.env.REACT_APP_APPSYNC_API_KEY,

        // type: AUTH_TYPE.AWS_IAM,
        // Note - Testing purposes only
        /*credentials: new AWS.Credentials({
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        })*/

        // Amazon Cognito Federated Identities using AWS Amplify
        //credentials: () => Auth.currentCredentials(),

        // Amazon Cognito user pools using AWS Amplify
        // type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        // jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
});


class App extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <ApolloProvider client={client}>
                <Rehydrated>
                    <Router history={history}>
                        <div className="App">
                            <div className="main-content">
                                <Route exact path="/" component={WelcomeViewContainer}/>
                                <Route exact path="/draft" component={DraftViewContainer}/>
                                <Route exact path="/playerBio" component={PlayerBioViewContainer}/>
                                <Route exact path="/teams" component={TeamsViewContainer}/>
                            </div>
                        </div>
                    </Router>
                </Rehydrated>
            </ApolloProvider>
        );
    }
}

export default App;

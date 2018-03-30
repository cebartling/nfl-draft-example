import gql from 'graphql-tag';

export default gql`
query listNflDraftMachineTeams {
    listNflDraftMachineTeams {
        items {
            TeamId
            Name
        }
        nextToken
    }
}`;

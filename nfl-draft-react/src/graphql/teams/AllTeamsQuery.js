import gql from 'graphql-tag';

export default gql`
query listNflDraftMachineTeams {
    listNflDraftMachineTeams(first: 32) {
        items {
            TeamId
            Name
        }
        nextToken
    }
}`;

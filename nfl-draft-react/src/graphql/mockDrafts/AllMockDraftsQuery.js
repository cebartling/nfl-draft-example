import gql from 'graphql-tag';

export default gql`
query listNflDraftMachineMockDrafts {
    listNflDraftMachineMockDrafts(first: 500) {
        items {
            MockDraftId
            Name
            LastUpdated
        }
        nextToken
    }
}`;

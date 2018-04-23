import gql from 'graphql-tag';

export default gql`
query listNflDraftMachineDraftPicks {
    listNflDraftMachineDraftPicks(first: 500) {
        items {
            PickId
            OverallPick
            Round
            Pick
            Team
        }
        nextToken
    }
}`;

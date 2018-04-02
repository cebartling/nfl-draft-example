import gql from 'graphql-tag';

export default gql`
query getNflDraftMachinePlayers($PlayerId: String!) {
    getNflDraftMachinePlayers(PlayerId: $PlayerId) {
        PlayerId
        FirstName
        LastName
        Position
        College
        HeightInMeters
        WeightInKilograms
    }
}`;

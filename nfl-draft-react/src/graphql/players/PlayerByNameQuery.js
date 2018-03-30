import gql from 'graphql-tag';

export default gql`
query getNflDraftMachinePlayers($FirstName: String, $LastName: String) {
    getNflDraftMachinePlayers(FirstName: $FirstName, LastName: $LastName) {
        PlayerId
        FirstName
        LastName
        Position
        HeightInCentimeters
        WeightInKilograms
    }
}`;

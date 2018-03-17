import gql from 'graphql-tag';

export default gql`
query listNflDraftMachinePlayers {
    listNflDraftMachinePlayers {
        items {
            PlayerId
            FirstName
            LastName
            Position
            HeightInCentimeters
	        WeightInKilograms
        }
        nextToken
    }
}`;

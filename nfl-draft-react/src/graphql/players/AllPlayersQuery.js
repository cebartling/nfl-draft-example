import gql from 'graphql-tag';

export default gql`
query listNflDraftMachinePlayers {
    listNflDraftMachinePlayers(first: 500) {
        items {
            PlayerId
            FirstName
            LastName
            Position
            College
            HeightInMeters
	        WeightInKilograms
        }
        nextToken
    }
}`;

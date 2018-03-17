import gql from 'graphql-tag';

export default gql`
query AllPlayers {
    allPlayers {
        players {
            __typename
            id
            firstName
            lastName
            position
            draftYear
            college
            height
            weight
            version
        }
    }
}`;

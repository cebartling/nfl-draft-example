import gql from 'graphql-tag';

export default gql`
mutation createNflDraftMachineMockDrafts($input: CreateNflDraftMachineMockDraftsInput!) {
	createNflDraftMachineMockDrafts(input: $input) {
        MockDraftId
        Name
        LastUpdated
	}
}`;

import gql from 'graphql-tag';

export default gql`
mutation createMockDraft($input: CreateMockDraftInput!) {
	createMockDraft(input: $input) {
        MockDraftId
        Name
        LastUpdated
	}
}`;

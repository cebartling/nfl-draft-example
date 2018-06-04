'use strict';

const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const createMockDraft = async (event) => {
    const mockDraftId = uuidv4();
    const lastUpdated = moment().toISOString();
    const mockDraftName = event.arguments.input.Name;
    const params = {
        TableName: 'nfl-draft-machine-MockDrafts',
        Item: {
            MockDraftId: mockDraftId,
            Name: mockDraftName,
            LastUpdated: lastUpdated
        }
    };
    await dynamoDb.put(params).promise();
    return {
        MockDraftId: mockDraftId,
        Name: mockDraftName,
        LastUpdated: lastUpdated
    };
};

const createMockDraftPicks = async (mockDraftId) => {
    const params = {
        TableName: 'nfl-draft-machine-DraftPicks',
        Select: 'ALL_ATTRIBUTES'
    };
    const draftPicks = await dynamoDb.scan(params).promise();
    console.log('Draft picks', draftPicks);
};

module.exports.createMockDraft = async (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const result = createMockDraft(event);
    await createMockDraftPicks(result.MockDraftId);
    callback(null, result);
};
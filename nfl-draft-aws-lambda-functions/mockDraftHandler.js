'use strict';

const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.createMockDraft = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const mockDraftId = uuidv4();
    const params = {
        TableName: 'nfl-draft-machine-MockDrafts',
        Item: {
            MockDraftId: mockDraftId,
            Name: event.mockDraftName,
            LastUpdated: moment().toISOString()
        }
    };

    const promise1 = await dynamoDb.put(params).promise(); // returns dynamo result

    return promise1;
};
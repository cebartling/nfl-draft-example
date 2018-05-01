'use strict';

const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.createMockDraft = async (event, context, callback) => {
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

    const promise1 = await dynamoDb.put(params).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            mockDraftId: mockDraftId,
            message: 'Successfully created new mock draft.',
            input: event,
        }),
    };

    callback(null, response);
};
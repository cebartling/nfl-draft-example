'use strict';

const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.createMockDraft = async (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
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

    const putResult = await dynamoDb.put(params).promise();
    console.log('DynamoDB PUT result:', JSON.stringify(putResult, null, 2));

    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         MockDraftId: mockDraftId,
    //         Name: event.mockDraftName,
    //         LastUpdated: lastUpdated,
    //         message: 'Successfully created new mock draft.',
    //         input: event,
    //     }),
    // };

    const result = {
        MockDraftId: mockDraftId,
        Name: mockDraftName,
        LastUpdated: lastUpdated
    };
    callback(null, result);
};
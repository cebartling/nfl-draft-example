'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.createMockDraft = async (event) => {
    const params = {
        TableName: 'icecreams',
        Item: {
            icecreamid: request.body.icecreamId,
            name: request.body.name // your icecream name
        }
    };

    return dynamoDb.put(params).promise(); // returns dynamo result
};
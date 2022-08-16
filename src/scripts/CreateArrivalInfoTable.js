const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});

const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "ArrivalInfo",
  KeySchema: [
    // Partition Key
    {AttributeName: "field", KeyType: "HASH"},
    // Sort Keys
    {AttributeName: "text", KeyType: "RANGE"}
  ],
  AttributeDefinitions: [
    {AttributeName: "field", AttributeType: "S"},
    {AttributeName: "text", AttributeType: "S"}
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err) {
    console.error("Unable to create table: ", JSON.stringify(err, null, 2));
  } else {
    console.log("Created table with description: ", JSON.stringify(data, null, 2));
  }
});

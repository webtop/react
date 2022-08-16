const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to ArrivalInfo table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const arrivalInfoData =
  JSON.parse(fs.readFileSync('../components/data/arrival_info.json', 'utf8'));

arrivalInfoData.forEach(function(arrivalInfo) {
  const params = {
    TableName: "ArrivalInfo",
    Item: {
      "field": arrivalInfo.field,
      "text": arrivalInfo.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err) {
      console.error("Unable to load data into table for accessibility",
        arrivalInfo.field, ". Error: ", JSON.stringify(err, null, 2))
    } else {
      console.log("Added", arrivalInfo.field, "to table.")
    }
  })
});
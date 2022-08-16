const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to Accessibility table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const accessibilityData =
  JSON.parse(fs.readFileSync('../components/data/accessibility_info.json', 'utf8'));

accessibilityData.forEach(function(accessibility) {
  const params = {
    TableName: "Accessibility",
    Item: {
      "text": accessibility.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err) {
      console.error("Unable to load data into table for accessibility",
        accessibility.name, ". Error: ", JSON.stringify(err, null, 2))
    } else {
      console.log("Added", accessibility.name, "to table.")
    }
  })
});
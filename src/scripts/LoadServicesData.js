const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to Services table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const servicesData =
  JSON.parse(fs.readFileSync('../components/data/services_info.json', 'utf8'));

servicesData.forEach(function(service) {
  const params = {
    TableName: "Services",
    Item: {
      "text": service.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err) {
      console.error("Unable to load data into table for accessibility",
        service.name, ". Error: ", JSON.stringify(err, null, 2))
    } else {
      console.log("Added", service.name, "to table.")
    }
  })
});
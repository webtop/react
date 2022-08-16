const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to MenuLinks table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const menuLinksData = 
  JSON.parse(fs.readFileSync('../components/data/menu_links.json', 'utf8'));

  menuLinksData.forEach(function(menuLink) {
  const params = {
    TableName: "MenuLinks",
    Item: {
      "class": menuLink.class,
      "href": menuLink.href,
      "text": menuLink.text
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for menu links",
      menuLink.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", menuLink.text, "to table.")
  });
});
const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to GalleryImages table.");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const galleryImagesData = 
  JSON.parse(fs.readFileSync('../components/data/welcome_images.json', 'utf8'));

galleryImagesData.forEach(function(galleryImage) {
  let className = galleryImage.className;
  if (className.trim() === "") {
    className = "no_class";
  }

  const params = {
    TableName: "WelcomeImages",
    Item: {
      "src": galleryImage.src,
      "alt": galleryImage.alt,
      "className": className
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for gallery images",
                    galleryImage.src, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", galleryImage.src, "to table.")
  });
});
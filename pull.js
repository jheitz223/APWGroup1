var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://JavaScript:1234@cluster0.fvgga.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("js_db");
  dbo.collection("users").find({}).toArray(function(err, result){


    if (err) throw err;
    console.log(result);
    db.close();
  });
});


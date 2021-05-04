var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://JavaScript:1234@cluster0.fvgga.mongodb.net/js_db?retryWrites=true&w=majority";

    
    MongoClient.connect(url, function (err, client) {
        var db= client.db('mydb');
        if (err) throw err;
        //document to be find
        var query = {name: 'John'};
        // find document to 'customers' collection using findOne
        db.collection("customers").findOne(query, function (err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });
    
    });
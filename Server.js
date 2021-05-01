const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 80;
var Homepage;
var Quiz;
//var Leaderboard;

//Read contents of Homepage.html
fs.readFile("Homepage.html")
//  Store contents in Homepage variable and start webpage
    .then(contents => {
        Homepage = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
//  If there's an issue reading the file, throw an error
    .catch(err => {
        console.error(`Could not read Homepage.html file: ${err}`);
        process.exit(1);
    });

//Read contents of Quiz.html
fs.readFile("Quiz.html")
//  Store contents in Quiz variable and start webpage
    .then(contents => {
        Quiz = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
//  If there's an issue reading the file, throw an error
    .catch(err => {
        console.error(`Could not read Quiz.html file: ${err}`);
        process.exit(1);
    });

/*
fs.readFile("Leaderboard.html")
    .then(contents => {
        Leaderboard = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read Leaderboard.html file: ${err}`);
        process.exit(1);
    });
*/

//Listen for HTTP requests
const requestListener = function (req, res) {

    res.setHeader("Content-Type", "text/html");
//  Check URL to determine proper webpage to send to client
    switch (req.url) {
        case "/home":
            res.writeHead(200);
            res.end(Homepage);
            break;
        case "/quiz":
            res.writeHead(200);
            res.end(Quiz);
            break;
        /*case "/leaderboard":
            res.writeHead(200);
            res.end(Leaderboard);
            break;*/
    }
    
}

//Create HTTP server
const server = http.createServer(requestListener);
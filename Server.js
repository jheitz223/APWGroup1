const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 80;
var Homepage;
var Quiz;
var Leaderboard;

fs.readFile("Homepage.html")
    .then(contents => {
        Homepage = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read Homepage.html file: ${err}`);
        process.exit(1);
    });

fs.readFile("Quiz.html")
    .then(contents => {
        Quiz = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read Quiz.html file: ${err}`);
        process.exit(1);
    });

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

const requestListener = function (req, res) {

    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/home":
            res.writeHead(200);
            res.end(Homepage);
            break;
        case "/quiz":
            res.writeHead(200);
            res.end(Quiz);
            break;
        case "/leaderboard":
            res.writeHead(200);
            res.end(Leaderboard);
            break;
    }
    
}

const server = http.createServer(requestListener);
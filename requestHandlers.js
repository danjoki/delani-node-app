let fs = require("fs");

let Logger = require('./logger');
let logger = new Logger('Request Handler');

//Function for handling index.html
function home(response) {
    console.log("Request handler for home was called");
    logger.info("Request handler for home was called");
    fs.readFile("./public/index.html", function (error, data) {
        if(error){
            console.log(error)
        }
        response.writeHead(200, {"Content-type": "text/html"});
        response.write(data);
        response.end();
    });
}

//Function for handling portfolio.html
function portfolio(response) {
    console.log("Request handler for Portfolio was called");
    logger.info("Request handler for Portfolio was called");
    fs.readFile("./public/portfolio.html", function (error, data) {
        if(error){
            console.log(error)
        }
        response.writeHead(200, {"Content-type": "text/html"});
        response.write(data);
        response.end();
    });
}

exports.home = home;
exports.portfolio = portfolio;
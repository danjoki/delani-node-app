let http = require('http');
let url = require('url');

let Logger = require('./logger');
let logger = new Logger('Server');

let start = function (route, handle) {

    function onRequest(request, response) {
        //Extracts the path name
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " has been Received");
        logger.info("Request for " + pathname + " has been Received with a request method " + request.method);

        //Parse handlers and pathname as a parameter
        route(pathname, handle, response);
    }

    let PORT = process.env.PORT || 8000;
    http.createServer(onRequest).listen(PORT);

    logger.info("Server has started on port: " + PORT);
    console.log("Server has started on port: " + PORT);

}

exports.start = start;
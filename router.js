let path = require('path');
let fs = require('fs');

let Logger = require('./logger');
let logger = new Logger('Router');

function router(pathname, handle, response) {
    console.log("About to route a request for " + pathname);
    logger.info("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else if(pathname.match("\.css$")){
        let cssPath = path.join(__dirname, 'public', pathname);
        let cssStream = fs.createReadStream(cssPath);
        response.writeHead(200, {"Content-type": "text/css"});
        cssStream.pipe(response);
    } else if(pathname.match("\.png$") || pathname.match("\.jpg$")){
        let imagePath = path.join(__dirname, 'public', pathname);
        let imageStream = fs.createReadStream(imagePath);
        response.writeHead(200, {"Content-type": "text/png"});
        imageStream.pipe(response);
    } else if(pathname.match("\.js$")){
        let jsPath = path.join(__dirname, 'public', pathname);
        let jsStream = fs.createReadStream(jsPath);
        response.writeHead(200, {"Content-type": "application/js"});
        jsStream.pipe(response);
    } else {
        console.log("No request handler found for " + pathname);
        logger.info("No request handler found for " + pathname);
        response.writeHead(404, {"Content-type": "application/json"});
        let resObject = {};
        resObject["status"] = 404;
        resObject["message"] = "Url Not Found";
        response.write(JSON.stringify(resObject));
        response.end();
    }
}

exports.route = router;
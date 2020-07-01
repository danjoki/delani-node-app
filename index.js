let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

let handle = {};
handle["/"] = requestHandlers.home;
handle["/index.html"] = requestHandlers.home;
handle["/portfolio.html"] = requestHandlers.portfolio;

server.start(router.route, handle);
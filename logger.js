let fs = require('fs');

class Logger {
    constructor(module){
        this.module = module;

        let logStream = fs.createWriteStream('./logs', {flags: 'a'});

        let info = function (msg) {
            var level = "info".toUpperCase();
            let message = `${new Date()} | ${level} | ${msg} \n`;
            logStream.write(message);
        }

        this.info = info;

        let error = function (msg) {
            var level = "error".toUpperCase();
            let message = `${new Date()} | ${level} | ${msg} \n`;
            logStream.write(message);
        }

        this.error = error;

        let debug = function (msg) {
            var level = "debug".toUpperCase();
            let message = `${new Date()} | ${level} | ${msg} \n`;
            logStream.write(message);
        }

        this.debug = debug;
    }
}

module.exports = Logger;
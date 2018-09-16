var secrets = require("./secrets.js");
var pug = require("pug");
var morgan = require("morgan");
var express = require("express");

var opts = {};
opts.port = 3000;

var app = express();
var admin = express.Router();

app.use(morgan('common'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/', admin);

function run() {
    app.listen(opts.port, function() {
        console.log('Twitch control running ont ' + opts.port + '!');
    });
}

admin.get('/', function(req, res) {
    var adminTemplate = pug.compileFile(__dirname + '/stream.pug');
    var html = adminTemplate();
    res.send(html);
});

run();
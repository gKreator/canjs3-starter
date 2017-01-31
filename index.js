var express = require('express');
var bodyParser = require('body-parser');
var exec = require( "child_process" ).exec;
var path = require("path");
var ssr = require('done-ssr-middleware');
var proxy = require('http-proxy-middleware');
var cookieParser = require('cookie-parser');

//vdom
require("can-vdom");
window === global; // true

//vdom document
var makeDocument = require("can-vdom/make-document/make-document");
var document = makeDocument();

//vdom window
var makeWindow = require("can-vdom/make-window/make-window");
var window = makeWindow({});

//express
var app = express();

//proxy
app.use('/api', proxy({
    target: 'http://localhost:86/',
    proxyTimeout: 5000,
    changeOrigin: true,
    logLevel: 'debug',
    secure: false,
    onProxyReq: relayRequestHeaders,
    onProxyRes: relayResponseHeaders
}));

function relayRequestHeaders(proxyReq, req) {
    Object.keys(req.headers).forEach(function (key) {
        proxyReq.setHeader(key, req.headers[key]);
    });
}

function relayResponseHeaders(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function (key) {
        res.append(key, proxyRes.headers[key]);
    });
}

//cookie parser
app.use(cookieParser());

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json

//listen
app.set('port', (process.env.PORT || 5000));

app.use( express.static(__dirname + '/') );

if ( process.argv.indexOf( "--slow" ) !== -1 ) {
    console.log("Delaying everything 1 second");
    app.use( function ( req, res, next ) {
        setTimeout(next, 1000);
    });
}

//can-ssr:
app.use( "/", ssr({
    config: __dirname + "/package.json!npm",
    main: "canjs3-starter-client/index.stache!done-autorender",
    liveReload: false,
    debug: true
}));

//start
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

//develop
if ( process.argv.indexOf( "--develop" ) !== -1 ) {
    //is dev mode so do live reload
    var child = exec( path.join("node_modules",".bin","steal-tools live-reload"), {
        cwd: process.cwd() + "/"
    });

    child.stdout.pipe( process.stdout );
    child.stderr.pipe( process.stderr );
}
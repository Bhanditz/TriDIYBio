process.title = 'test-server';

var fs = require('fs');
var hapi = require('hapi');
var inert   = require('inert');

var root = fs.readFileSync(__dirname + '/layout_partials/root.hbt').toString();

var server = new hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 8080
});

server.register(inert, function() {});

server.route({
  method: 'GET',
  path: root + '/{param*}',
  handler: {
    directory: {
      path: __dirname + '/http',
      index: true
    }
  }
});

server.start(function () {
  console.log('Server running at: ' + server.info.uri + root + '/');
});

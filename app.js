let Hapi = require('hapi'),
    env = require('./environment/environment.js'),
    server = new Hapi.Server();

server.connection({ port: env.api.port });

require('./libs/api/routes/routes.js')(server);

//Inicia o Flipper
server.start((err) => {
    if(err){
        console.error(err);
    }else{
        console.info("Running on: " + server.info.uri);
    }
});
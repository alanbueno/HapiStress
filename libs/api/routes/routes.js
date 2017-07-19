module.exports = (server) => {
    //Rotas do controller de direcionamento das execuções
    require('../../core/stressRoute.js')(server);
};
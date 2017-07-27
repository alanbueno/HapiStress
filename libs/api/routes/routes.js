module.exports = (server) => {
  //Rotas do controller de direcionamento das execuções
  require('../../core/stresser/stressRoute.js')(server);

  //Rotas antiga do controller de direcionamento das execuções
  require('../../core/stresserOld/stressOldRoute.js')(server);
};
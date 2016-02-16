var dogController = require( '../dogs/dogController' );
var imageController = require( '../images/imageController' );
var matchController = require( '../matches/matchController' );

module.exports = function ( app, express ) {
  /* DOGS */
  app.get( '/api/dogs', dogController.showAll );
  app.post( '/api/dogs/', dogController.addOne );

  /* IMAGES */
  app.get( '/api/images', imageController.showAll );
  app.get( '/api/images/count', imageController.count );
  app.get( '/api/images/dog/:dogId', imageController.byDogId );
  app.get( '/api/images/:id', imageController.showOne );
  app.post( '/api/images', imageController.addOne );

  /* MATCHES */
};

var dogController = require( '../dogs/dogController' );
var imageController = require( '../images/imageController' );
var matchController = require( '../matches/matchController' );

module.exports = function ( app, express ) {
  app.get( '/api/dogs', dogController.showAll );
  app.get( '/api/images', imageController.showAll );
  app.get( '/api/images/count', imageController.count );
  app.post( '/api/images', imageController.addOne );
};

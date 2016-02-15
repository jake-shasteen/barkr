var dogController = require( '../dogs/dogController' );
var imageController = require( '../images/imageController' );

module.exports = function ( app, express ) {
  app.get( '/api/dogs', dogController.showAll );
  app.get( '/api/images', imageController.showAll );
};

var dogController = require( '../dogs/dogController' );

module.exports = function ( app, express ) {
  app.get( '/api/dogs', dogController.showAll );
};

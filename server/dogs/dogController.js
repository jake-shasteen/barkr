var Dog = require( './dog' );

module.exports = {
  showAll: function( req, res, next ) {
    res.json( "dog" );
  }
};

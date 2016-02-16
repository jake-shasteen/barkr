var helpers = require ( '../config/helpers' );
var Dog = require( './dog' );

module.exports = {
  showAll: function( req, res, next ) {
    Dog.findAll({})
    .then( function( dogs ) {
      res.json( dogs );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  showOne: function( req, res, next ) {
    var id = req.params.id;
    Dog.findOne({ where: {'id': id } })
    .then( function( dog ) {
      res.json( dog );
    }, function( err ) {
      helpers.reportError( res, err );
    })
  },

  count: function( req, res, next ) {
    Dog.count()
    .then( function( count ) {
      res.json( count );
    }, function( err ) {
      helpers.reportError( res, err );
    });
  },

  addOne: function( req, res, next ) {
    Dog.create( req.body ).then( function() {
      res.send( "New dog profile added!" );
    }, function( err ) {
      helpers.reportError( res, err );
    });
  }

};

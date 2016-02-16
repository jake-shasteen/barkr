var helpers = require ( '../config/helpers' );
var Host = require( './host' );
var Dog = require( '../dogs/dog' );

module.exports = {

  showAll: function( req, res, next ) {
    Host.findAll({}).then( function( hosts ) {
      res.json( hosts );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  addOne: function( req, res, next ) {
    Host.create( req.body ).then( function( host ) {
      res.send( "New host profile added! ID: " + host.id )
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  byDogId: function( req, res, next ) {
    var dogId = req.params.id;
    Dog.find( {where: { 'id': dogId }, attributes: [], include: { model: Host } } )
    .then( function( result ) {
      res.json( result.host );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  }

};

var helpers = require ( '../config/helpers' );
var User = require( './user' );

module.exports = {

  showAll: function( req, res, next ) {
    User.findAll({}).then( function( users ) {
      res.json( users );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  showOne: function( req, res, next ) {
    var id = req.params.id;
    User.findOne( { where: {'id': id } } ).then( function( user ) {
      res.json( user );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  editOne: function( req, res, next ) {
    var id = req.params.id;
    User.update( req.body, { where: {'id': id} } ).then( function() {
      User.findOne( {where: {'id': id} } ).then( function( user ) {
        res.json( user ); // return updated user entry
      },
      function( err ) {
        helpers.reportError( res, err );
      });
    
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  addOne: function( req, res, next ) {
    User.create( req.body ).then( function( user ) {
      res.send( "New user profile added! ID: " + user.id )
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  }
  
}
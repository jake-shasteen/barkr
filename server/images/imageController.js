var helpers = require( '../config/helpers' );
var db = require( '../config/db' );
var Image = require( './image' );
var Dog = require( '../dogs/dog' );

module.exports = {
  showAll: function( req, res, next ) {
    Image.findAll({})
      .then( function( images ) {
        res.json( images );
      },
      function( err ) {
        helpers.reportError( res, err );
      });
  },

  count: function( req, res, next ) {
    Image.count()
    .then( function( count ) {
      res.json( count );
    }, function( err ) {
      helpers.reportError( res, err );
    });
  },

  addOne: function( req, res, next ) {
    Image.create(req.body).then( function() {
      res.send( "Image added to database." );
    }, function( err ) {
      helpers.reportError( res, err );
    });
  },

  byDogId: function( req, res, next ) {
    var id = req.params.dogId;
    console.log( id );
    Image.findAll( {attributes: ['id', 'path'], include: { model: Dog, attributes: [], where: { 'id': id } } } )
    .then( function( images ) {
      res.json( images );
    }, function( err ) {
      helpers.reportError( res, err );
    } );
  }
};

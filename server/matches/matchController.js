var helpers = require( '../config/helpers' );
var Match = require( './match' );
var Dog = require( '../dogs/dog' );

module.exports = {
  showMatches: function( req, res, next ) {
    var userid = req.params.userid;
    Match.findAll( { where: {'u_id': userid, 'vote': true } } ).then( function( matches ) {
      res.json( matches );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  showUnmatchedDogIds: function( req, res, next ) {
    var userid = req.params.userid;
    Match.findAll( { attributes: [], where: {'u_id': userid }, include: { model: Dog,  } } )
  },

  upvote: function( req, res, next ) {
    var userid = req.params.userid;
    var dogid = req.params.dogid;
    Match.create( {'u_id': userid, 'd_id': dogid, 'vote': true } )
    .then( function( match ) {
      res.send( "Matcher: " + userid + " matched: " + dogid )
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  downvote: function( req, res, next ) {
    var userid = req.params.userid;
    var dogid = req.params.dogid;
    Match.create( {'u_id': userid, 'd_id': dogid, 'vote': false } )
    .then( function( match ) {
      res.send( "Matcher: " + userid + " declined: " + dogid )
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  }
}
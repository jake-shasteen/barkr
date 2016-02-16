var helpers = require( '../config/helpers' );
var db = require( '../config/db' );
var Match = require( './match' );
var Dog = require( '../dogs/dog' );

module.exports = {
  showMatches: function( req, res, next ) {
    var userid = parseInt( req.params.userid );
    Match.findAll( { where: {'u_id': userid, 'vote': true } } ).then( function( matches ) {
      res.json( matches );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  showUnmatchedDogIds: function( req, res, next ) {
    var userid = parseInt( req.params.userid );
    db.query("SELECT dogs.id FROM dogs WHERE dogs.id NOT IN ( SELECT d_id FROM matches WHERE u_id = " + userid + ")", { type: db.QueryTypes.SELECT })
    .then( function( dog_ids ) {
      dog_ids.forEach( function( dog, idx ) {
        dog_ids[idx] = dog.id;
      });
      res.json( dog_ids );
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  upvote: function( req, res, next ) {
    var userid = parseInt( req.params.userid );
    var dogid = parseInt( req.params.dogid );
    Match.create( {'u_id': userid, 'd_id': dogid, 'vote': true } )
    .then( function( match ) {
      res.send( "Matcher: " + userid + " matched: " + dogid )
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  },

  downvote: function( req, res, next ) {
    var userid = parseInt( req.params.userid );
    var dogid = parseInt( req.params.dogid );
    Match.create( {'u_id': userid, 'd_id': dogid, 'vote': false } )
    .then( function( match ) {
      res.send( "Matcher: " + userid + " declined: " + dogid )
    },
    function( err ) {
      helpers.reportError( res, err );
    });
  }
}
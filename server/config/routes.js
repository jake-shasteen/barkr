var dogController = require( '../dogs/dogController' );
var imageController = require( '../images/imageController' );
var matchController = require( '../matches/matchController' );
var hostController = require( '../hosts/hostController' );
var userController = require( '../users/userController' );

module.exports = function ( app, express ) {
  /* DOGS */
  app.get( '/api/dogs', dogController.showAll );
  app.get( '/api/dogs/count', dogController.count );
  app.get( '/api/dogs/:id', dogController.showOne );
  app.post( '/api/dogs/', dogController.addOne );

  /* IMAGES */
  app.get( '/api/images', imageController.showAll );
  app.get( '/api/images/count', imageController.count );
  app.get( '/api/images/dog/:dogId', imageController.byDogId );
  app.get( '/api/images/:id', imageController.showOne );
  app.post( '/api/images', imageController.addOne );

  /* USERS */
  app.get( '/api/users', userController.showAll );
  app.get( '/api/users/:id', userController.showOne );
  app.put( 'api/users/:id', userController.editOne );
  app.post( '/api/users', userController.addOne );


  /* HOSTS */
  app.get( '/api/hosts', hostController.showAll );
  app.get( '/api/dogs/:id/host', hostController.byDogId );
  app.post( '/api/hosts', hostController.addOne );

  /* MATCHES */
  app.get( '/api/matches/:userid', matchController.showMatches );
  app.get( '/api/matches/unmatched/:userid', matchController.showUnmatchedDogIds );
  app.post( '/api/matches/upvote/:userid/:dogid', matchController.upvote );
  app.post( '/api/matches/downvote/:userid/:dogid', matchController.downvote );
};

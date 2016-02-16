angular.module( 'barkr.find', [] )

.controller( 'FindController', function( $scope, Find, Match ) {
  $scope.dog = {};
  $scope.dog.images = [];
  $scope.dog.primaryImage = '';

  Find.randomDog( function( dog ) {
    $scope.dog = dog;

    Find.fillImages( dog.id, function( images ) {
      images = _.pluck( images, 'path' );
      $scope.dog.images = images;
      $scope.dog.primaryImage = images[0];
    });

  });

  $scope.upvote = function() {
    Match.upVote( {id: 1}, $scope.dog );
  };

  $scope.downvote = function() {
    Match.downVote( {id: 1}, $scope.dog );
  };

} );
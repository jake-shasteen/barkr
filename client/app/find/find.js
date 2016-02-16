angular.module( 'barkr.find', [] )

.controller( 'FindController', function( $location, $route, $scope, Find, Match ) {
  $scope.dog = {};
  $scope.dog.images = [];
  $scope.dog.primaryImage = '';

  $scope.popover = '../app/congrats/congrats.html';

  Find.randomDog( function( dog ) {
    $scope.dog = dog;

    Find.fillHost( dog.id, function( host ) {
      $scope.dog.host = host;
    });

    Find.fillImages( dog.id, function( images ) {
      images = _.pluck( images, 'path' );
      $scope.dog.images = images;
      $scope.dog.primaryImage = images[0];
    });

  });

  $scope.like = function() {
    Match.upVote( {id: 1}, $scope.dog, function() {
      // setTimeout( $route.reload, 3000 );
    });
  };

  $scope.skip = function() {
    Match.downVote( {id: 1}, $scope.dog, function() {
      $scope.next();
    } );
  };

  $scope.next = function() {
    $route.reload();
  };

} );
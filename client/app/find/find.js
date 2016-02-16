angular.module( 'barkr.find', [] )

.controller( 'FindController', function( $location, $route, $scope, Find, Match ) {
  $scope.dog = {};
  $scope.dog.images = [];
  $scope.dog.primaryImage = '';

  $scope.popover = '../app/congrats/congrats.html';

  Find.unMatchedDog( 1, function( dog ) {
    $scope.dog = dog;
    $scope.dog.primaryImage = dog.images[0];

  });

  $scope.like = function() {
    Match.upVote( {id: 1}, $scope.dog, function() {
      // setTimeout( $route.reload, 3000 );
    });
  };

  $scope.skip = function() {
    //Match.downVote( {id: 1}, $scope.dog, function() {
      $scope.next();
    //} );
  };

  $scope.next = function() {
    $route.reload();
  };

} );
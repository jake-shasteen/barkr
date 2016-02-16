angular.module( 'barkr.find', [] )

.controller( 'FindController', function( $scope, Find ) {
  $scope.dog = {};
  $scope.dog.images = ['http://i.imgur.com/AwdYxQN.png'];
  $scope.dog.primaryImage = $scope.dog.images[0];
  $scope.dog.name = "Buddy";
  $scope.dog.distance = ".5 mi";
  $scope.dog.profile = "Buddy is a Good Boy. He likes tennis balls and running in circles. He dislikes cats and the color yellow. He knows his own name because he is a good boy.";
} );
angular.module( 'barkr.find', [] )

.controller( 'FindController', function( $scope ) {
  $scope.primaryImage = 'http://i.imgur.com/AZ4w8eu.jpg';
  $scope.name = "Buddy";
  $scope.distance = ".5 mi";
  $scope.profile = "Buddy is a Good Boy. He likes tennis balls and running in circles. He dislikes cats and the color yellow. He knows his own name because he is a good boy.";
} );
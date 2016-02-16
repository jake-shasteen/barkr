angular.module( 'barkr.matches', [] )

.controller( 'MatchesController', function( $scope, Match ) {
  $scope.matches = [];

  Match.showAll( 1, function( matches ) {
    $scope.matches = matches;
  });
  
} );

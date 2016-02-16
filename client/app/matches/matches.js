angular.module( 'barkr.matches', [] )

.controller( 'MatchesController', function( $scope, Match, Find ) {
  $scope.matches = [];

  Match.showAll( 1, function( matches ) {
    var dogIds = _.pluck( matches, 'd_id' );
    dogIds.forEach( function( id ) {
      Find.oneDog( id, function( dog ) {
        $scope.matches.push( dog );
      });
    });
  });
  
} );

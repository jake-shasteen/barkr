angular.module( 'barkr', [
  'barkr.find',
  'barkr.matches',
  'barkr.services',
  'ngRoute'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when( '/find', {
      templateUrl: 'app/find/find.html',
      controller: 'FindController'
    })
    .when( '/matches', {
      templateUrl: 'app/matches/matches.html',
      controller: 'MatchesController'
    })
    .when( '/parks', {
      templateUrl: 'app/parks/parks.html',
      controller: 'ParksController'
    })
    .otherwise({
      redirectTo: '/find'
    });
})
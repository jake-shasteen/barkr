angular.module( 'barkr', [
  'barkr.congrats',
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
    .when( '/congrats', {
      templateUrl: 'app/congrats/congrats.html',
      controller: 'CongratsController'
    })
    .otherwise({
      redirectTo: '/find'
    });
})
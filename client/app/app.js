angular.module( 'barkr', [
  'barkr.find',
  'barkr.matches',
  'barkr.host',
  'barkr.services',
  'ui.bootstrap',
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
    .when( '/host', {
      templateUrl: 'app/host/host.html',
      controller: 'HostController'
    })
    .otherwise({
      redirectTo: '/find'
    });
})
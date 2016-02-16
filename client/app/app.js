angular.module( 'barkr', [
  'barkr.find',
  'barkr.services',
  'ngRoute'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/find', {
      templateUrl: 'app/find/find.html',
      controller: 'FindController',
    })
    .otherwise({
      redirectTo: '/find'
    });
})
angular.module( 'barkr', [
  'barkr.find',
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
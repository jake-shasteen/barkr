angular.module( 'barkr.host', [] )

.controller( 'HostController', function( $scope, Find ) {
  $scope.newdog = {};

  Find.allDogs( function( dogs ) {
    $scope.dogs = dogs;
  });

  $scope.submitForm = function() {

  };

  $scope.submitAddDog = function() {

  };

  $scope.submitImage = function( isvalid, id ) {
    if( isvalid ) {

    }
  }
});
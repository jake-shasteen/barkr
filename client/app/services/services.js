angular.module('barkr.services', [])

.factory( 'Find', function( $http ) {
  return $http({
      method: 'GET',
      url: '/api/dogs'
    })
    .then( function ( resp ) {
      return resp.data;
    });
} );
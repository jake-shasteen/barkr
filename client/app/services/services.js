angular.module('barkr.services', [])

.factory( 'Find', function( $http ) {

  var allDogs = function( callback ) {
    return $http({
        method: 'GET',
        url: '/api/dogs'
      })
      .then( function ( resp ) {
        callback( resp.data );
      });
  };

  var countDogs = function( callback ) {
    return $http({
      method: 'GET',
      url: '/api/dogs/count'
    })
    .then( function( resp ) {
      callback( resp.data );
    });
  }

  var randomDog = function( callback ) {
    return $http({
      method: 'GET',
      url: '/api/dogs/count'
    })
    .then( function( resp ) {
      var pickDog = Math.floor( Math.random() * resp.data )+1;
      return $http({
        method: 'GET',
        url: 'api/dogs/' + pickDog
      })
      .then( function( resp ) {
        callback( resp.data );
      })
    });
  }

  var fillImages = function( id, callback ) {
    return $http({
      method: 'GET',
      url: '/api/images/dog/' + id
    }).then( function( resp ) {
      callback( resp.data );
    })
  }

  return {
    allDogs: allDogs,
    countDogs: countDogs,
    randomDog: randomDog,
    fillImages: fillImages
  }
} );

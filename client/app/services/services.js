angular.module( 'barkr.services', [] )

.factory( 'Find', function( $http ) {

  var oneDog = function( id, callback ) {
    return $http({
      method: 'GET',
      url: '/api/dogs/' + id
    }).then( function( dog ) {
      fillHost( id, function( host ) {
        dog.data.host = host;
        fillImages( id, function( images ) {
          dog.data.images = _.pluck( images, 'path' );
          callback( dog.data );
        });
      });
    }, function( err ) {
      console.error( err );
    })
  };

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

  var fillHost = function( id, callback ) {
    return $http({
      method: 'GET',
      url: '/api/dogs/' + id + '/host'
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
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
    oneDog: oneDog,
    allDogs: allDogs,
    countDogs: countDogs,
    randomDog: randomDog,
    fillImages: fillImages,
    fillHost: fillHost
  };
} )

.factory( 'Match', function( $http ) {

  var upVote = function( user, dog, callback ) {
    return $http({
      method: 'POST',
      url: '/api/matches/upvote/'+user.id+'/'+dog.id
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  };

  var downVote = function( user, dog, callback ) {
    return $http({
      method: 'POST',
      url: '/api/matches/downvote/'+user.id+'/'+dog.id
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  };

  var showAll = function( userId, callback ) {
    return $http({
      method: 'GET',
      url: '/api/matches/' + userId
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  }

  return {
    upVote: upVote,
    downVote: downVote,
    showAll: showAll
  };
});

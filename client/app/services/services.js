angular.module( 'barkr.services', [] )

.factory( 'Find', function( $http, Match ) {

  var oneDog = function( id, callback ) {
    $http({
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
    $http({
        method: 'GET',
        url: '/api/dogs'
      })
      .then( function ( resp ) {
        callback( resp.data );
      });
  };

  var countDogs = function( callback ) {
    $http({
      method: 'GET',
      url: '/api/dogs/count'
    })
    .then( function( resp ) {
      callback( resp.data );
    });
  }

  var randomDog = function( callback ) {
    $http({
      method: 'GET',
      url: '/api/dogs/count'
    })
    .then( function( resp ) {
      var pickDog = Math.floor( Math.random() * resp.data )+1;
      oneDog( pickDog, function( dog ) {
        callback( dog );
      });
    });
  }

  var unMatchedDog = function( userid, callback ) {
    Match.unMatchedDogIds( userid, function( dogIds ) {
      var pickDog = Math.floor( Math.random() * dogIds.length );
      if( dogIds.length > 0 ) {
        oneDog( dogIds[pickDog], function( dog ) {
          callback( dog );
        });
      } else {
        callback({ images: [], host: {} });
      }
    });
  }

  var fillHost = function( id, callback ) {
    $http({
      method: 'GET',
      url: '/api/dogs/' + id + '/host'
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  }

  var fillImages = function( id, callback ) {
    $http({
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
    unMatchedDog: unMatchedDog,
    fillImages: fillImages,
    fillHost: fillHost
  };
} )

.factory( 'Match', function( $http ) {

  // returns an array of dog ids for dogs the user
  // has not previously matched with
  var unMatchedDogIds = function( userid, callback ) {
    $http({
      method: 'GET',
      url: '/api/matches/unmatched/' + userid
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  }

  var upVote = function( user, dog, callback ) {
    $http({
      method: 'POST',
      url: '/api/matches/upvote/'+user.id+'/'+dog.id
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  };

  var downVote = function( user, dog, callback ) {
    $http({
      method: 'POST',
      url: '/api/matches/downvote/'+user.id+'/'+dog.id
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  };

  var showAll = function( userId, callback ) {
    $http({
      method: 'GET',
      url: '/api/matches/' + userId
    }).then( function( resp ) {
      callback( resp.data );
    }, function( err ) {
      console.error( err );
    });
  }

  return {
    unMatchedDogIds: unMatchedDogIds,
    upVote: upVote,
    downVote: downVote,
    showAll: showAll
  };
});

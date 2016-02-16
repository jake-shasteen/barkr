var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );
var Dog = require( '../dogs/dog' );
var User = require( '../users/user' );

var Match = db.define( 'match', {
  u_id: {
    type: Sequelize.INTEGER,
    unique: 'user_dog_idx'
  },
  d_id: {
    type: Sequelize.INTEGER,
    unique: 'user_dog_idx'
  },
  vote: {
    type: Sequelize.BOOLEAN
  }
});

Match.sync().then( function() {
  console.log( "Table created:", Match );
})
.catch( function( err ) {
  console.error( err );
});

Match.belongsTo( User, {as: 'voter', foreignKey: 'u_id'} );
Match.belongsTo( Dog, {as: 'target', foreignKey: 'd_id'} );

module.exports = Match;

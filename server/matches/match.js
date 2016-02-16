var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );
var Dog = require( '../dogs/dog' );

var Match = db.define( 'match', {
  v_id: {
    type: Sequelize.INTEGER
  },
  t_id: {
    type: Sequelize.INTEGER
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

Match.belongsTo( Dog, {as: 'voter', foreignKey: 'v_id'} );
Match.belongsTo( Dog, {as: 'target', foreignKey: 't_id'} );

module.exports = Match;

var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );
var Dog = require( '../dogs/dog' );

var Host = db.define( 'host', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  website: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING
  }
});

Host.sync().then( function() {
  console.log( "Table created:", Host );
} )
.catch( function( err ) {
  console.error( err );
});

Dog.belongsTo( Host );

module.exports = Host;

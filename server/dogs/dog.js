var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );
var Image = require( '../images/image' );

var Dog = db.define( 'dog', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  host_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Dog.sync().then( function() {
  console.log( "Table created:", Dog );
} )
.catch( function( err ) {
  console.error( err );
});

Image.belongsTo( Dog );

module.exports = Dog;

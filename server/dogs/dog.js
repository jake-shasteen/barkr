var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );
var Image = require( '../images/image' );

var Dog = db.define( 'dog', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
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

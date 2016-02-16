var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );
var Dog = require( '../dogs/dog' );

var Image = db.define( 'image', {
  dog_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

Image.sync().then( function() {
  console.log( "Table created:", Image );
}).catch( function( err ) {
  console.error( err );
});

module.exports = Image;

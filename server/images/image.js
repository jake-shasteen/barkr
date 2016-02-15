var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );
var Dog = require( '../dogs/dog' );

var Image = db.define( 'image', {
  dog_id: {
    type: Sequelize.INTEGER
  },
  path: {
    type: Sequelize.STRING,
    unique: true
  }
});

Image.sync();

module.exports = Image;

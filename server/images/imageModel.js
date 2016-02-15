var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );

var Image = db.define( 'image', {
  path: {
    type: Sequelize.STRING,
    unique: true
  }
});

Image.sync();

module.exports = Image;

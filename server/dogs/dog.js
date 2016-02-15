var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );

var Dog = db.define( 'dog', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
});

Dog.sync();

module.exports = Dog;

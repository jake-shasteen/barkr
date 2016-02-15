var Sequelize = require( 'sequelize' );
var db = new Sequelize( 'barkr', 'barkr', null, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  define: {
    underscored: true
  }
});

module.exports = db;

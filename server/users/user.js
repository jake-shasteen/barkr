var Sequelize = require( 'sequelize' );
var db = require( '../config/db' );

var User = db.define( 'user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
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
  },
  phone: {
    type: Sequelize.STRING
  }
});

User.sync().then( function() {
  console.log( "Table created:", User );
  // only for demo purposes
  return User.create({
    'name': 'Jake',
    'description': 'Some guy who likes dogs'
  })
  // end demo
} )
.catch( function( err ) {
  console.error( err );
});

module.exports = User;

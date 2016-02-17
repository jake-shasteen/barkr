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
  // only for demo purposes
  return Host.create( {
    'name': 'SF SPCA',
    'website': 'https://www.sfspca.org/',
    'description': 'A San Francisco nonprofit since 1868. An organization with a vision to end animal abandonment.',
    'address': '201 Alabama Street San Francisco CA',
    'zip': '49103',
    'phone': '4155543000',
    'email': 'adoptions@sfspca.org'
  })
  // end demo
} )
.catch( function( err ) {
  console.error( err );
});

Dog.belongsTo( Host );

module.exports = Host;

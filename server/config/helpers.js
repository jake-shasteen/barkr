module.exports = {
  reportError: function( res, err ) {
    console.error( err );
    res.send( err.message );
  }
}
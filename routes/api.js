
/*
 * API
 */

var uriExp = /^https?\/\//;

exports.ce = function(req, res){
  var uri = req.uri;
  // uri test 

  res.send('test');
};

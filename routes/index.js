
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// angularjs 연동을 위해 추가
exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
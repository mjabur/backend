
exports.got= function(req, res) {
     res.send('respond with a resource');

}
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/download',function(req, res, next){
	var file = __dirname + '/app-debug.apk';
	res.download(file);
});

module.exports = router;

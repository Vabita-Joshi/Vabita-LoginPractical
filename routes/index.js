const { application } = require('express');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'registration' });
});

router.get('/handle', function(req, res, next) {
  res.render('handle',{
    "data":{
    "name": req.query.username,
    "password": req.query.password,
    }

  });

});
router.get('/handler', function(req, res, next) {
    res.render('handler',{
      "data":{
      "name": req.query.username,
      "password": req.query.pass,
      "repassword": req.query.confirm,

      }
  
    });
  
  });
module.exports = router;
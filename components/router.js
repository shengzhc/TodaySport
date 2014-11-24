var router = require('express').Router();
var input_validator = require('../controllers/input_validator');
var access_validator = require('../controllers/access_validator');
var teams = require('../controllers/teams');

router.get('/', function(req, res, next) {
	res.status(200).send({status:200, more_info:{message:'Welcome to LocalHelper'}});
	return next();
});

router.get('/teams', access_validator.access_validate, team.getAllTeams);
router.get('/teams/:id', access_validator.access_validate, team.getTeam);

module.exports = router;

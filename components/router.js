var router = require('express').Router();
var inputValidator = require('../controllers/InputValidator');
var accessValidator = require('../controllers/AccessValidator');
var teamController = require('../controllers/TeamController');

router.get('/', function(req, res, next) {
	res.status(200).send({status:200, more_info:{message:'Welcome to TodaySport Center'}});
	return next();
});

router.get('/teams', accessValidator.getAllTeams, inputValidator.getAllTeams, teamController.getAllTeams);
router.get('/teams/:id', accessValidator.getTeam, inputValidator.getTeam, teamController.getTeam);

module.exports = router;

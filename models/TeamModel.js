var mongoose = require('mongoose');

var teamModel = mongoose.Schema({
	team_id : {type: String, required: true, unique: true},
	abbreviation : {type: String, required: true},
	active : {type: Boolean, default: true},
	last_name : String,
	division : String,
	site_name : String,
	city : String,
	state : String,
	full_name : String,
	create_date : {type: Date, default: Date.now},
	update_date : {type: Date, default: Date.now},
	details : {}
}, {collection:'teams'});

teamModel.statics.findAllTeams = function(callback) {
	this.find({}, "team_id abbreviation active", function(err, docs) {
		if (err) return callback(err, null);
		return callback(null, docs);
	});
};

teamModel.statics.findByTeamId =function(teamId, callback) {
	this.findOne({abbreviation:teamId.toUpperCase()}, function(err, doc) {
			if (err) return callback(err, null);
			return callback(null, doc);
	});
};

module.exports = teamModel;

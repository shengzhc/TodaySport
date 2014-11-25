var mongoose = require('mongoose');

var team = mongoose.Schema({
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
	update_date : {type: Date, default: Date.now}
	details : {}
}, {collection:'teams'});


team.static.method

module.exports = team;

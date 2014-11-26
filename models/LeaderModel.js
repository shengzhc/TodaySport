var mongoose = require('mongoose');

var leaderModel = mongoose.Schema({
	session: {type: String, required: true},
	session_type: {type: String},
	stats_type: {type: String},
	ranking: [{
		last_name: String,
		first_name: String,
		display_name: String,
		rank: Int,
		value: Number,
		team: {}
	}],
	update_date: {type: Date, required: true, default: Date.now}
}, {collection:'leaders'});

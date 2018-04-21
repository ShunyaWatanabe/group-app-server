'use strict';

const user = require('../models/user');
const group = require('../models/group');

exports.getGroup = (req) =>
	new Promise((resolve,reject) => {
		console.log("test1");

		user.findOne({'private_key':req.params.private_key},function(err,doc){
			console.log("test00");
			if (err) console.log(err);
			resolve({status:201,message:"sucessfully get group", groups:doc.groups_participated });
		});		
	});
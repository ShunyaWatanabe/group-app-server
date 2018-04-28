'use strict';

const user = require('../models/user');
const group = require('../models/group');


exports.createGroup = (user) =>
	new Promise((resolve,reject) => {


		const newGroup = new group({
			name: "Test1",
	//		members:[user]，
			created_at: new Date(),
			isVerified: true
		});

		newGroup.save()
		.then(() => {
			//shoudl retrun more here todo
			resolve({ status: 201, message: 'Group created!'})
		})
		.catch(err => {
			if (err.code == 11000) {
				reject({ status: 409, message: 'Group Already Registered !' });
			} else {
				reject({ status: 500, message: 'Internal Server Error !' });
			}
		});
	});

	exports.createGroupFromUsers = (usersArray) =>
		new Promise((resolve,reject) => {

			const newGroup = new group({
				name: "New Group",
				created_at: new Date(),
				isVerified: true
			});

			newGroup.save()
			.then(() => {

				usersArray.map(function(user){
					group.members.push(user.key);
				});

				//shoudl retrun more here todo
				resolve({ status: 201, message: 'Group created!', group_id:_id })
			})
			.catch(err => {
				if (err.code == 11000) {
					reject({ status: 409, message: 'Group Already Registered !'});
				} else {
					reject({ status: 500, message: 'Internal Server Error !' });
				}
			});
		});

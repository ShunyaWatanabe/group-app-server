'use strict';

const group = require('../models/group');
const user = require('../models/user');

var currentInvites = {};
var codePool = ['1111','2222','3333','4444'];

for (var i=0;i<50;i++){
	addToPool();
}

function addToPool(){
	do{var tempCode = Math.floor((Math.random() * 10000)) -10;
		if (tempCode<1000) tempCode+=1000;
	}while((tempCode in currentInvites)||(codePool.includes(tempCode)));
	codePool.push(tempCode.toString());
}

function check(tempCode){
	console.log((tempCode in currentInvites)||(codePool.includes(tempCode)))
}

exports.getNewInvite = (groupID) => 
	
	new Promise((resolve,reject) => {

	

		var code = codePool.pop();
		addToPool();
		currentInvites[code] = groupID;

		console.log("-----");
		console.log(currentInvites);
		
		resolve(code);
		

		
		setTimeout(function(){ 
			delete currentInvites[code];
			console.log('after delete ----');
			console.log(currentInvites);

		}, 20000);

		
	});
	

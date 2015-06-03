var faker = require('faker');

module.exports = function() {
var data = {
	users: []
}

// create 100 users
for (var i = 0; i < 100; i++) {
		var address =[];
		data.users.push({
		id: i,
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		userName: faker.internet.userName(),
		status: 'Inactive',
				
	});
	
		data.users[i].address = [];
		data.users[i].address.push({
			homeAddress :{
			street: faker.address.streetName(),
			city : faker.address.city(),
			state : faker.address.state(),
			country : faker.address.country(),
			zipCode : faker.address.zipCode()
			}
		});
		
		data.users[i].address.push({
			officeAddress :{
			street: faker.address.streetName(),
			city : faker.address.city(),
			state : faker.address.state(),
			country : faker.address.country(),
			zipCode : faker.address.zipCode()
			}
		});
		

}
return data
}

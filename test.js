var fs = require("fs");
var filename = "students2.json";

fs.readFile(filename , 'utf8', function (err, data) {
	data = JSON.parse( data );
	var newStudent;
	var position = data["data"].length;
	
	newStudent = {
		name: "George",
		major: "CS",
		id: "15015012"
	};

	data["data"][position] = newStudent;
	
	for (var i=0; i<data["data"].length; i++)
		console.log(data["data"][i]);
});

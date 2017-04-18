console.log("hello");


//Write a for loop that uses a counter variable initialized at 5 and
//then increments it by 10 every time it executes. Use console.log()
//to output the value of the counter variable each time through the loop.
// Stop execution of the loop if the counter variable's value is greater than 120.


for(var i = 5; i <= 120; i+=10){
	console.log("Number is " + i);
}


//Write a for loop with a counter variable initialized at 4096. Each
//time the loop executes divide the counter variable's value by 2. Use
//console.log() to output its value every time. When the counter variable's
//value is 1, stop execution.


for(var counter = 4096; counter > 1; counter/=2){
	console.log(counter / 2);
}

//Create an array that contains the names of American Presidents.
//Loop over that array with a for loop, and use string concatenation
//with console.log() to output the order and name of each President

var presidents = ["George Washington", "John Adams", "Thomas Jefferson"];
var order = ["President #1 was ", "President #2 was ", "President #3 was "];

for(var x = 0; x < 3; x++){
	console.log(order[x] + presidents[x]);
}

//You can use another kind of for loop to iterate over objects.
//Iterate over the object below and use console.log() to output
//the names of the keys in the object

var antSpecies = {
				  argentine: {},
				  army: {},
				  bigHeaded: {},
				  black: {},
				  bull: {},
				  carpenter: {},
				  crazy: {},
				  fire: {},
				  glider: {},
				  honeyPot: {},
				  jackJumper: {}
}

for(var prop in antSpecies){
	console.log(prop, "=", antSpecies[prop]);
}

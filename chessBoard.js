/* Code by Collin Mullis
	Javascript Exercise
	April 13th 2015
*/
var line1 = " # # # #" 
var line2 = "# # # # "
for (i = 1; i <= 8;i++) {
	// If line # is odd, print first line
	if (i % 2 !== 0)
		console.log(line1)
	// If line # is even, print second line
	else if (i % 2 == 0)
		console.log(line2)
	}

// Link "Source Text" to "Slider" and assing the result to a variable
var num = (effect("Slider Control")("Slider").value).toFixed();

// Declare and initialize five variables to help with adding commas
var numString = num.toString();
var result = "";
var end;
var commasNeeded = 0;
var n = numString.length;

// Create a function to add commas
function addCommas(num) {
	// don't add commas if number is between 0 and 999 (less than four digits)
	if (n < 4) {
        return num;
    }
    else {
		// count the number of commas needed
		var temp = n;
        while (temp - 3 > 0) {
            commasNeeded++;
            temp = temp - 3;
        }
		// add the required number of commas
        while (commasNeeded > 0) {
            end = "," + numString.substring(numString.length-3);
            result = end + result;
            commasNeeded--;
            numString = numString.substring(0, numString.length-3);
        }
        result = numString + result;
    }
    return result;
}

// execute the function
addCommas(num);
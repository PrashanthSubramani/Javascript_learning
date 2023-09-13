/////// Strings//////////////////////////////////////////:

let myVariable ="Mathematics";

//Length Property 
console.log(myVariable.length);


//string methods

console.log(myVariable.charAt(0)); //fetch the character word from the given index.

console.log(myVariable.indexOf('at')); //Fetch the index value from given character.

console.log(myVariable.slice(5,8)); //it will the string from starting index 5 to ending index 8. Last index value will not be showed.

console.log(myVariable.toUpperCase()); //it will convert to upperCase;

console.log(myVariable.toLowerCase()); //it will convert to LowerCase;

console.log(myVariable.includes('Mat')); //it will check the input is stored in given variable;

console.log(myVariable.split('')); //it will split the string and given array datatype. We can split using gap, comma and only double quotes it will split the whole string into array one by one.;



/////// Numbers//////////////////////////////////////////:

const myNumber = 42;
const myStringNumber ="42aa";
const myFloat = 42.01;

console.log(myNumber);

console.log(myFloat);

console.log(myNumber === myFloat);

console.log(Number(myStringNumber)); //It will change string to number.


// Number Methods:

console.log(Number.isInteger(myNumber)); //It will check the input is integer or not. if the input is integer it will return true orelse false.

console.log(Number.parseFloat(myStringNumber)); //It will check return only int or float numbers from the given input.

console.log(Number.parseInt(myStringNumber)); //It will check return only integer numbers from the given input.


console.log(Number.parseFloat(myStringNumber).toFixed(2)); //It will check return only float number but it will be in string.




//////// Math Properties/////////

console.log(Math.PI)

console.log(Math.trunc(Math.PI)) //It will truncate.

console.log(Math.round(Math.PI)) //It will roundOff.

console.log(Math.ceil(Math.PI)) //It will roundoff uperValue.

console.log(Math.floor(Math.PI)) //It will roundoff.

console.log(Math.pow(2,3)) //It will power of 2 to the power of 3.



/////////Coding Challenge ///////


const ChallengeVar = "Prashanth";

console.log(ChallengeVar.charAt(Math.floor(Math.random() * ChallengeVar.length)));


  

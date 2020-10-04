// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbers = "123456789".split("");
var newArr = [];
// var ifNoToAll = [];

// console.log(upperCase);
// console.log(lowerCase);
// console.log(specialChar);
// console.log(numbers);


// Write password to the #password input
function generatePassword() {
  var CharNum = prompt("Choose a number between 8 and 128 for the length of your password.");
  CharNum = parseInt(CharNum);
  if (CharNum >= 8 && CharNum <= 128) {
    console.log(CharNum)
  } else {
    alert("That was not a number between 8 and 128. Please try again.");
    return;
  }

  // The user is asked whether or not she wants lower case letters included. Her response is stored.
  var lowerCaseY = confirm("Do you want to include lower case letters?");
  // This stores the lowerCase array in a new array.
  if (lowerCaseY) {
    newArr = newArr.concat(lowerCase);
    console.log(newArr);
  } 

  // The user is asked whether or not she wants lower case letters included. Her response is stored.
  var upperCaseY = confirm("Do you want to include UPPER CASE letters?");
  // This stores the lowerCase array in a new array.
  if (upperCaseY) {
    newArr = newArr.concat(upperCase);
    console.log(newArr);
  } 

  // The user is asked whether or not she wants lower case letters included. Her response is stored.
  var numbersY = confirm("Do you want to include numbers?");
  // This stores the lowerCase array in a new array.
  if (numbersY) {
    newArr = newArr.concat(numbers);
    console.log(newArr);
  } 

  // The user is asked whether or not she wants lower case letters included. Her response is stored.
  var specialCharY = confirm("Do you want to include special characters?");
  // This stores the lowerCase array in a new array.
  if (specialCharY) {
    newArr = newArr.concat(specialChar);
    console.log(newArr);
  } 

  // If user denies all four choices, they are promted to start over and pick one.
  if (!lowerCaseY && !upperCaseY && !numbersY && !specialCharY) {
    alert("You must choose one category. Please start over.")
    return;
  }

  var password = [];
  for ( i = 0; i < CharNum; i++) {
    password.push(newArr[Math.floor(Math.random() * newArr.length)]);
  }

  return password.join("");
}

// The computer will run a loop that selects a random character from the new array until the chosen number of characters is met.
  
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*()|`~^<>?/_-";
// variables include all possible special characters, single-digit numbers, lower case letters, and upper case letters.

var passLength; // User input of how long they want their password to be.


var confirmLower; // Confirms whether the user wants to use lower case letters in their password.
var confirmUpper; // Confirms whether the user wants to use upper case letters in their password.
var confirmNumbers; // Confirms whether the user wants numbers characters in their password.
var confirmSpecial; // Confirms whether the user wants special characters in their password.

function generatePassword() {
  var finalPass = "";
  var charSet = "";
 
  passLength = parseInt(
    prompt(
      "How many characters would you like in your password? Passwords must be at least 8 characters long, but not more than 128."
    )
  ); // Prompts user for the number of characters they want in their generated password, converting the number to an integer.

  
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Your answer must be provided as a number between 8 and 128.");
    passLength = parseInt(
      prompt(
        "How many characters would you like in your password? Passwords must be at least 8 characters long, but not more than 128."
      )
    ); //If the user's number does not meet the conditional requirements, an alert will pop up telling them so; the original prompt will show after the OK is clicked.
  }

  {
  
    //Boolean confirmations for required password conditions.
    confirmLower = confirm("Do you want to use lowercase letters in your password?");
    confirmUpper = confirm("Do you want to use uppercase letters in your password?");
    confirmNumbers = confirm("Do you want to use numbers in your password?");
    confirmSpecial = confirm("Do you want to use special characters in your password?");

    //If user confirm = true, add to charSet
    if (confirmLower === true) {
      charSet += lowerCase;
    }
    if (confirmUpper === true) {
      charSet += upperCase;
    }
    if (confirmNumbers === true) {
      charSet += numbers;
    }
    if (confirmSpecial === true) {
      charSet += special;
    }
    //If a user selects nothing
    if (
      confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false
    ) {
      alert("Passwords must contain a combination of special characters, numerals, uppercase letters, and lower case letters. Please start over and select amongst these character types");
    } else {
      
      //loops until the user's chosen password length is reached, then takes the characters the user chose and randomizes to the length of the character set.
      for (let i = 0; i < passLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length)); // Final password is generated.
      }
      
    }
  }

  return finalPass;
}

//Generate password Button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays to be used as sources for the password
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", " | ", ": ", "; ", "'", "<", ">", ",", ".", "?", "/"];
const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();
const numString = "0123456789";

// Convert strings to arrays
const lowerCaseArray = Array.from(lowerCaseAlphabet);
const upperCaseArray = Array.from(upperCaseAlphabet);
const numArray = Array.from(numString);

// Function to generate password
function generatePassword() {
  let pwArray = [];

  // User determines the number of characters within the password
  let numOfChar = parseInt(prompt("Your password must be between 8 and 128 characters. How many characters do you want in your password?"));

  // Validation loop ensures the user enters a valid number within the specified range
  while (isNaN(numOfChar) || numOfChar < 8 || numOfChar > 128) {
    numOfChar = parseInt(prompt("Please enter a valid number between 8 and 128 for the password length:"));
  }

  // User confirms which types of characters they want in the password
  let lowerCase = confirm("Do you want lower case characters?");
  let upperCase = confirm("Do you want upper case characters?");
  let nums = confirm("Do you want numeric characters?");
  let specialChar = confirm("Do you want special characters?");

  // Create an array to hold the character arrays based on user choices
  let selectedCharArrays = [];

  if (lowerCase) {
    selectedCharArrays = selectedCharArrays.concat(lowerCaseArray);
  }
  if (upperCase) {
    selectedCharArrays = selectedCharArrays.concat(upperCaseArray);
  }
  if (nums) {
    selectedCharArrays = selectedCharArrays.concat(numArray);
  }
  if (specialChar) {
    selectedCharArrays = selectedCharArrays.concat(specialArray);
  }

  // Requires the user to enter at least one character type
  if (selectedCharArrays.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // Loop to generate the specified number of characters for the password
  for (let i = 0; i < numOfChar; i++) {
    const randomIndex = Math.floor(Math.random() * selectedCharArrays.length);
    pwArray.push(selectedCharArrays[randomIndex]);
  }

  // Final password string created from pwArray using join('')
  const password = pwArray.join('');
  return password;
}

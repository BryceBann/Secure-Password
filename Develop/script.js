// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passLength = 0;
var lower = false;
var upper = false;
var numeric = false;
var specialChar = false;


const generatePassword = function(){
  var passLength = window.prompt("How many characters between 8-128")
  if(prompt <! 8){
    window.prompt("Not enough characters")
  }else{}
    
    
  

}
console.log(passLength)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

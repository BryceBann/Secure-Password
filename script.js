// Assignment code here
var passLength;
var lower;
var upper;
var special;
var number;
const numChar = ["0123456789"]
const alpChar = ["abcdefghijklmnopqrstuvwxyz"]
const alphUpChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const speChar = ["!@#$%^&*()_-+="]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const generatePassword = function(){ 
  var passLength = window.prompt("Select characters amount between 8-128.")
  if(passLength < 8){
    window.alert("Not enough characters please try again.") 
    generatePassword()
  }else if(passLength > 128){
    window.alert("Too many characters please try agian.")
    generatePassword()
  }else{
    window.alert("Character amount set to " + passLength)
  }
  //self check function works
  console.log(passLength)

  
  var lower = window.prompt("Any lowercase characters?\n(Yes or No)")
  lower = lower.toUpperCase();
  if(lower ==="YES"){
    window.alert("You chose: " + lower)
    lower = true
  }else if(lower === "NO"){
    window.alert("You chose: " + lower)
    lower = false
  }else{
    window.alert("Please check spelling")
   //needs a return reset to top of lower for miss spelling
  }
 //self check log
 console.log(lower)

  var upper = window.prompt("Any uppercase characters\n(Yes or No)")
  upper = upper.toUpperCase();
  if(upper === "YES"){
    window.alert("You chose: " + upper)
    upper = true
  }else if(upper === "NO"){
    window.alert("You chose: " + upper)
    upper = false
  }else{
    window.alert("Please check spelling.")
    //needs return to reset to top of upper for miss spelling
  }
  //self check log
  console.log(upper)

  var special = window.prompt("Any special characters\n(Yes or No)")
  special = special.toUpperCase();
  if(special === "YES"){
    window.alert("You chose: " + special)
    special = true
  }else if(special === "NO"){
    window.alert("You chose: " + special)
    special = false
  }else{
    window.alert("Please check spelling.")
    //needs return to reset to top of special for miss spelling
  }
  //self check log
  console.log(special)

  var number = window.prompt("Any numerical characters\n(Yes or No)")
  number = number.toUpperCase();
  if(number === "YES"){
    window.alert("You chose: " + number)
    number = true
  }else if(number=== "NO"){
    window.alert("You chose: " + number)
    number = false
  }else{
    window.alert("Please check spelling.")
    //needs return to reset to top of number for miss spelling 
  }
  //self check log
  console.log(number)

  const passWordCriteria = [passLength, lower, upper, special, number]
  console.log(passWordCriteria)
}
//put hard stop so generate password button keeps generating passwords with stored var data or option to generate new or change criteria


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

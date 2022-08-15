// Assignment code here
var passLength;
var lower;
var upper;
var special;
var number;
var perTrue = 0;
const passWordCriteria = []
const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const alpChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const alphUpChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const speChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","="]
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

  
 if(lower == true){
  passWordCriteria.push("lowerCase")
 
 if(upper == true){
  passWordCriteria.push("upperCase")
 }

 if(special == true){
  passWordCriteria.push("specialChar")
 }

 if(number == true){
  passWordCriteria.push("numChar")
 }

 console.log(passWordCriteria)
 }
  return
}
//put hard stop so generate password button keeps generating passwords with stored var data or option to generate new or change criteria


// Write password to the #password input

//find way to turn true var into +1 on new var
 //distrabute passLength randomly through the now true var
 //grab random characters depending on true or false value
 //scramble characters gathered 
 //display final ouput 
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  


 
  
 
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var passLength;
var lower;
var upper;
var special;
var number;
let passWordCriteria = [];
const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const alpChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const alphUpChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const speChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","="]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//change to window.confirm to help on my side and user firendly
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

  var lower = window.confirm("Any lowercase characters?\n(Ok = Yes or Cancel = No)")
  if(lower){
    window.alert("You chose: Yes")
  }else{
    window.alert("You chose: No")
  }
 //self check log
 console.log(lower)

  var upper = window.confirm("Any uppercase characters\n(Ok = Yes or Cancel = No)")
  if(upper){
    window.alert("You chose: Yes")
  }else{
    window.alert("You chose: No")
  }
  //self check log
  console.log(upper)

  var special = window.confirm("Any special characters\n(Yes or No)")
  if(special){
    window.alert("You chose: Yes")
  }else{
    window.alert("You chose: No")
  }
  //self check log
  console.log(special)

  var number = window.confirm("Any numerical characters\n(Yes or No)")
  if(number){
    window.alert("You chose: Yes")
  }else{
    window.alert("You chose: No")
  }
  //self check log
  console.log(number)

  //depending on true of false will add array to blank array 
 if(lower == true){
  passWordCriteria = passWordCriteria.concat(alpChar)
 }
 if(upper == true){
  passWordCriteria = passWordCriteria.concat(alphUpChar)
 }

 if(special == true){
  passWordCriteria = passWordCriteria.concat(speChar)
 }

 if(number == true){
 passWordCriteria = passWordCriteria.concat(numChar)
}

//grab random characters with for loop and math.random including passLength
var  finalPass = "";
console.log(passWordCriteria)
for( i = 0; i < passLength; i++){
  var ranPass = passWordCriteria[Math.floor(Math.random()*passWordCriteria.length)];
  finalPass = finalPass.concat(ranPass)
  console.log(finalPass)
}
return finalPass
}

//display final ouput
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//passWordCriteria.splice(0,passWordCriteria.length)
//use to clear array after password is generated
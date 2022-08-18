// Assignment code here
var passLength;
var lower;
var upper;
var special;
var number;
const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const alpChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const alphUpChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const speChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","="]
// Get references to the #generate element
//returns a number from the min - max range
function ranInt(min, max){
  if(!max){
    max = min
    min = 0
  }
let ran = Math.random()
return Math.floor(min*(1 - ran) + ran*max)
}
//gets a random entry from lsit
function ranFromItem(list){
  return list[ranInt(list.length)]
}
var generateBtn = document.querySelector("#generate");
const generatePassword = function(){ 

  //simple if statement asking the user for password lengeth will start over if none accepted number is entered
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
//the next four functions as for a confirm input (true or flase) to declare on characters needed
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

  if(lower === false && upper === false && special === false && number === false){
    alert("What kind of password is no password")
  }
  var passWordCriteria = [];
  //depending on true of false will add array to blank array 
 if(lower == true){
 passWordCriteria.push(alpChar)
}

 if(upper == true){
 passWordCriteria.push(alphUpChar)
 }

 if(special == true){
  passWordCriteria.push(speChar)
 }

 if(number == true){
 passWordCriteria.push(numChar)
 }

 if(passWordCriteria.length === 0){
  passWordCriteria.push(alpChar)
 }
console.log(passWordCriteria)
//a for loop that calls to the function at the top, runs the for loop amount of times uder input,pulls a random list then random item to create password 
 var finalPass = ""
 for(var i = 0; i < passLength; i++){
  var listRandom = ranFromItem(passWordCriteria)
  var charRandom = ranFromItem(listRandom)
   finalPass += charRandom
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
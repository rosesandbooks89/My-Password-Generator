// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghjiklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_+";

//generate passsword (funtion declaration)
function generatePassword() {
  console.log("You clicked the button!");

  //  b. upperCase, lowerCase, numbers, & special characters

  var pre = [];
  var post = "";

  //splits variables into individuals
  var lowercaseArr = lowerCase.split("");
  console.log(lowercaseArr);

  var uppercaseArr = upperCase.split("");
  console.log(uppercaseArr);

  var numbersArr = numbers.split("");
  console.log(numbersArr);

  var specialCharactersArr = specialCharacters.split("");
  console.log(specialCharactersArr);

  //1.prompt user for pass word criteria  a. password length 8-128 characters get prompt to popup
  var length = parseInt(
    prompt(
      "Choose the length of your password. Just pick a number between 8 and 128."
    )
  );

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("enter a number 8 thru 128");
    return null;
  }
  //2. validate the input; at least one character type selected

  // create variable for all confirms

  var lowerCaseConfirm = confirm("Do you want to use lower case letters?");
  {
    pre = pre.concat(lowercaseArr);
  }
  var upperCaseConfirm = confirm("Do you want to use upper case letters?");
  {
    pre = pre.concat(uppercaseArr);
  }
  var numbersConfirm = confirm("Do you want to use numbers");
  {
    pre = pre.concat(numbersArr);
  }
  var specialCharactersConfirm = confirm("Do you want to use special characters?");{
    pre = pre.concat(specialCharactersArr);
  }

  if (pre.length === 0) {
    alert("You have to pick at least one!");
    return "Try me again";
  }
  //3. generate password based on criteria
  // create for loop pass a letter at random
  else {
    for (let i = 0; i < length; i++) {
      console.log(i);
      var rando = Math.floor(Math.random() * pre.length);
      password += pre[rando];
    }
  }

  // alert("You have to pick at least one!");
  //     return "Try me again";

  return password;
}

//4. display the generated password on the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

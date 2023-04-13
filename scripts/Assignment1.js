//.............................Task 1:.............................................
let ZakatPercentage=0.025;
let UserInput=prompt("Enter Your amount on which you want to calculate Zakat") ;
let Result=ZakatPercentage * Number(UserInput);
alert("Your Zakat is " + Result)

//..............................Task 2:CALCULATE FITRA.....................................
//Instructions: Ask the user the number  of family members they have and the form in which they want to give the fitra then calculate the fitra:
let FamilyMembers=Number(prompt("Enter the number of family members you have?"))
let FitraForm=prompt("Enter the form in which you want to give the fitra:Press 1 for Wheat,2 for Raisin,3 for oats,4 for Dates")
if(FitraForm=='1'){
    console.log("Your Fitra amount to be payed is ",90*FamilyMembers)
}
else if(FitraForm=='2'){
    console.log("Your Fitra amount to be payed is ",1600*FamilyMembers)
}
else if(FitraForm=='3'){
    console.log("Your Fitra amount to be payed is ",240*FamilyMembers)
}
 else if(FitraForm=='4'){
    console.log("Your Fitra amount to be payed is ",840*FamilyMembers)
}
else{
    console.log("Invalid Options Entered")
}

//................Task 3..............
var secretNumber=5;
// var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt("Guess the secret number between 1 and 10");
if (guess == secretNumber) {
  alert("Congratulations! You guessed the secret number");
} else if (guess < secretNumber) {
  alert("Sorry, your guess is too low. Guess again.");
} else {
  alert("Sorry, your guess is too high. Guess again.");
}

//..................Task 4: ............
let Name=prompt("Enter Your Name");
Name=Name.toLowerCase()

let FirstLetter=Name.slice(0,1);
FirstLetter=FirstLetter.toUpperCase();
let FinalName=FirstLetter + Name.slice(1,Name.length)
console.log(FinalName)
// Name=Name.replace(Name.charAt(0),Name.charAt(0).toUpperCase())


//...................Task 5.................

var contactNumbers = [];
var contactNames = [];

var numContacts = Number(prompt("How many contacts do you want to add?"));
for (var i = 0; i < numContacts; i++) {
  var number = prompt("Enter the contact number:");
  var UserName = prompt("Enter the contact name:");
  contactNumbers.push(number);
  contactNames.push(UserName);
}

console.log("Contacts:");
for (var i = 0; i < contactNumbers.length; i++) {
  console.log(contactNumbers[i] + " - " + contactNames[i]);
}

//.........................................Task 6 ........................................................

// Create an array of products
var products = ["apple", "banana", "orange", "grape", "watermelon"];

// Prompt the user to enter the position of the product they want to remove
var position = Number(prompt("Enter the position of the product you want to remove (1-" + products.length + "):"));

// Remove the product at the specified position and store it in a variable
var removedItem = products.splice(position - 1, 1);

// Display the removed item and the remaining items in the array
console.log("Removed item: " + removedItem);
console.log("Remaining items: " + products);

// Display the total number of items remaining
console.log("Total number of items remaining: " + products.length);

//...............................Task 7:....................


let Nationality = prompt('Enter Your Nationality?')
let Age = Number(prompt('Enter Your Age?'))
let Gender = prompt('Enter Your Gender?')
Nationality = Nationality.toUpperCase()
Gender = Gender.toUpperCase()
if (Nationality == "PAKISTANI" || Nationality == "INDIAN") {
    if (Gender === "MALE" && Age >= 18) {
        alert("You are eligible to vote.");
      } else if (Gender === "FEMALE" && Age >= 18) {
        let married = prompt("Are you married? (yes or no)");
        married=married.toUpperCase();
        if (married === "yes") {
          alert("You are eligible to vote.");
        } else {
          alert("You are not eligible to vote.");
        }
      } else {
        alert("You are not eligible to vote.");
      }
    
} 
  
else  {
  alert('You are not eligible to vote due to Nationality issue.')
}


//.......................Task 8.................................
// Create an array of 15 Pakistani cricket players for the World Cup
var WorldCupSquad = [
  'Babar Azam',
  'Fakhar Zaman',
  'Imam-ul-Haq',
  'Asif Ali',
  'Haris Sohail',
  'Shoaib Malik',
  'Sarfaraz Ahmed',
  'Mohammad Amir',
  'Hasan Ali',
  'Wahab Riaz',
  'Shaheen Afridi',
  'Shadab Khan',
  'Imad Wasim',
  'Mohammad Hafeez',
  'Abid Ali',
]


var FinalTeam = WorldCupSquad.slice(0, 11)


console.log('Final team for the match against India:')
for (var i = 0; i < FinalTeam.length; i++) {
  console.log(i + 1 + '. ' + FinalTeam[i])
}

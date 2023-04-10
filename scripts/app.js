
//.......................SMIT CLASS CODE..................................

// ...................................class  1 & 2
// console.log("hello");
// prompt("enter your name","laiba")
// alert("Hello WORLD")

// let a="5";
// let b=5;
// console.log(a+b)  
// gives 55 bcz it concatenates

// there are 3 methods to change the string into int 
// console.log(+a+b);
//it changes the a string into int and then add both numbers.
// console.log(parseInt(a)+b);
// console.log(Number(a)+b);

//math operator +,-,*,/,%

//wants to ask user something
// let userfavnum=prompt("what is your fav number?");
// console.log(userfavnum)
// let name=prompt("enter your name")
// document.write("welcome to my website s" + name);

// let a=Math.random();
// console.log(a);

// let randomenumber= Math.random();
// randomenumber=randomenumber*10;
// console.log(randomenumber);

// let roundednumber=Math.round(randomenumber);
// console.log(roundednumber);
// let num=5+5*5;
// console.log(num);
// ans is 30 bcz JS follows BODMAS RULE (Bracket of divison multiplication div add sub)
// ** means power 

// .....................CLASS NO 3:



// let userFavNum =prompt("Enter your favourite number:");
// console.log(+userFavNum+3);

// Comparison Operators
// == , ===
//console.log(5==5); type check nhi karta laikin === type bhi check krta hai.


//!= , !==
//console.log(5!==6);  //true

//< , >
 
// let num1 = 5;
// let num2 = 6;
// console.log(num1 <= num2);


// CONDITIONAL STATEMENT:

// let userAge1 = 7;
// let userAge2 = 25;
// console.log(useerAge2 >= 18);

// let userAge = +prompt("Enter Your Age:");

// if(userAge>=18){
//     console.log("You can apply for CNIC")
// }else{
//     console.log("You can't apply for CNIC")
// }

// let userFavNum = +prompt("Enter A Number:");
// let computerNum =Math.round(Math.random()*10);

// if(userFavNum === computerNum){
//     console.log("You Won!");
// }else{
//     console.log("You lose!" + computerNum);
// }

// let userFavNum = +prompt("Even Or Odd:");
// let computerNum =Math.round(Math.random()*10);

// if(computerNum % 2 === 0 && userFavNum === "Even"){
//     console.log("You Won!"+ computerNum);
// }else if(computerNum % 2 !== 0 && userFavNum === "Odd"){
//     console.log("You Won!"+ computerNum)
// }else{
//     console.log("You Loss!"+ computerNum);
// }

// LOOPING STATEMENT:

//(initialisation ; condition ; increment)
// for(let i=1; i<=10 ; i++){
//     document.write("Hello" + i)
// }



// ............task 1 (BANOQABIL CLI)............
// let ZakatPercentage=0.025;
// let UserInput=prompt("Enter Your amount on which you want to calculate Zakat") ;
// let Result=ZakatPercentage * Number(UserInput);
// alert("Your Zakat is " + Result)

//.................class 4.....................//
// Functions
// alert, parseInt = built-in function
// greet = custom function
//  function greet (studentsName) { // Parameter
//     console.log("Hello " + studentsName);
//  }

//  greet("Nadir"); // Argument
//  greet("Ikhlas"); // Argument
//  greet("Ameen"); // Argument

// function employee(fileNo) {
//   return "Working on file no: " + fileNo;
// }

// let data = employee(7);
// console.log(data);

// function add (num1, num2) {
//     return num1 + num2;
// }

// let result = add(5, 7);
// console.log(result);
// document.write(result);

// Recursion

// function writeData(data, times) {
//     document.write(data);
//     if (times > 0) {
//         writeData(data, times - 1);
//     }
// }

// writeData("Hello", 5);

// function factorial (num) {
//     if (num > 1) {
//         return num * factorial(num - 1);
//     }
//     return 1;
// }

// console.log(factorial(4));
// 5 * 4 * 3 * 2 * 1

// Closures => Scopes
// Global Scope => whole file
// local scope => inside function

// let abc = 7; // Global Scope
// function print (def) {
//     //  def = local scope
//     return function (ghi) { // anonymous function
//         console.log(def + ghi)
//     }
// }

// let innerFunction = print(7);
// let innerFunction2 = print(8);
// innerFunction(7)
// innerFunction2(5)


// function saveUrl (url) {
//     return function () {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }
// }
// // SAVE URL 
// let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos");

// // Request attempt
// makesRequest();
// makesRequest();


///...................class 5.........................//
// let months = ["January", "February", "March", "April"];
// months[4] = "May"; // Not recommended;

// let shouldIStore = prompt("Array me value rakhun?");

// if(shouldIStore === "yes") {
//     months.push("May");
// }

// let months = ["January", "February", "Sept", "March", "April"];
//..methodss
// months.shift(); // Removes 1st index;
// months.unshift("Jan"); // Add value on 1st Index and jis ko shift sy remove kia tha us ko wapsi lay ay ga .
// months.push("May"); // Add value on last+1 Index
// months.pop();// Removes last index;

//...property
// months.length // Tells the quantity of values

// month.splice(2,1,"june","july")  //(index from where to remove,how many values too remove,values to be inserted)

// months.slice(0, 2); // Provide a new copy of array;

// let newArr = months.slice(0, 2);  (index to start,how many values you want)
// console.log(months);
// console.log(newArr);

// let arr = ["Apple", "Orange", "Mango"];
// arr.forEach // loops through array values
// arr.forEach(function(val, index) {
//     console.log(index, val);
// });

// arr.filter()// Filters Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let filteredArr = arr.filter(function (val) {
//     return val % 2 === 0;
//     // if (val % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// });

// console.log(filteredArr, arr);


// arr.sort() // Sorts Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let sortedArr = arr.sort(function(a, b) {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// console.log(sortedArr);
// reduce

// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];

// let total = arr.reduce(function(prevValues, currVal) {
//     return prevValues + currVal;
// }, 0);
// let arr = ["Happy", "Birthday", "Ameen"];
// let finalString = "";

// arr.forEach(function (val) {
//     finalString = finalString + " " + val;
// });

// let finalString = arr.reduce(function(prevValues, currVal) {
//     return prevValues + " " + currVal;
// }, "");

// console.log(finalString);


//.................class 6........................//
// Objects

// let person = {
//   name: "Nadir",
//   cnic: 1234567890,
//   eyesColor: "black",
//   canSpeakEnglish: false,
//   speak: function(sentence) {
//     console.log(sentence + this.name);
//   }
// };

// let person2 = { // person2 = Object
//   name: "Ameen", // name: "Ameen" = Property
//   cnic: 1234567890, // cnic = key
//   eyesColor: "black", // "black" = value
//   canSpeakEnglish: false,
//   speak: function(sentence) {
//     console.log(sentence + this.name);
//   }
// };

// let animal = {
//   name: "Lion",
//   eatsMeat: true,
//   eatsGrass: false
// };
// let animal2 = {
//   name: "Goat",
//   eatsMeat: false,
//   eatsGrass: true
// }

// person2.speak("Hello, I'm ");
// console.log(person.name);

// let student1 = {
//   name: "Hamza",
//   rollNo: 420,
//   teacher: "Nadir",
//   className: "JavaScript"
// };

// let student2 = {
//   name: "Farrukh",
//   rollNo: 421,
//   teacher: "Ameen",
//   className: "CSS"
// };

// let prevStudents = localStorage.getItem("students"); // get from LocalStorage
// let students = prevStudents ? JSON.parse(prevStudents) : [];
// function provideStudent() {
//   let std = {
//     name: prompt("Enter Name"),
//     rollNo: +prompt("Enter Roll no"),
//     teacher: prompt("Enter Teachers Name"),
//     className: prompt("Enter Your Class"),
//   };
//   students.push(std);
//   console.log(students);
//   let stringify = JSON.stringify(students); // Convert it to String
//   localStorage.setItem("students", stringify); // Save it to LocalStorage
// }
// localStorage.setItem("name", "Ishaq");

//...................class 7......................//



const R = "rock";
const P = "paper";
const S = "scissors";


// Taking user input
function userInput(){
    let input = prompt("write input rock, paper or scissors");

    // console.log(input);             // for debugging

    if(input == undefined){
        return ("cancelled");
    }
    else{
        let trimmed_input = input.trim();
        let user_input = trimmed_input.toLowerCase();
        // return(userInput);

        // Artificial Intelligence
        let suggested_input = user_input[0] === "r" ? "rock" : user_input[0] === "p" ? "paper" : user_input[0]=== "s" ? "scissors" : "wrong_input";
        //
        return (suggested_input);
    }
    
}

// Generating automatic computer input
function computerInput(){

    let computer_options = ["rock", "paper", "scissors"]
    let random_index = Math.floor(Math.random() * computer_options.length);
    return(computer_options[random_index]);

}

// Playing Rounds
function play(user, computer){
    // console.log("user =", user,);                // for debugging
    // console.log("computer =", computer);

    if(user === "cancelled" ){
        return undefined;                           // by default return returns undefined
    }

    else if (user === "wrong_input"){
        return ("again");
    }
    else{
        if(user === computer){
            return("tie");
        }
        else if( user === R && computer === S || user === S && computer === P || user === P && computer === R){
            return("userwin");
        }
        else{
            return("computerwin");
        }
    }
    
}


// Congratulatory message
function congrats(userScore, computerScore){
    (userScore === 5) ? console.log("Congrats!! You win") : console.log("Sedd!! You lost") ;
}


// Message announcing winner when game completes successefully or when game is cancelled by the user
function gameEnd(userScore, computerScore){ 

    console.log(`Your Score ---> ${userScore}`);
    console.log(`Computer Score ---> ${computerScore}`);
    
    if(userScore === 5 || computerScore === 5){
        congrats(userScore, computerScore);
    }
    else{
        console.log("Game remains unfinished :(")
    }
}


// main game function
function game(){
    let userScore = 0;
    let computerScore = 0;
    let round = 1;
    while(!(userScore === 5 || computerScore === 5)){
        console.log(`=====================Round ${round} ========================`);
        let result = play(userInput(), computerInput());

        if(result == undefined){
            alert("you cancelled the game")
            break;
        }

        else if(result === "again"){
            continue;
        }
        else{
            if(result === "userwin"){
                userScore++;
                console.log("you beats computer");
            }
            else if(result === "computerwin"){
                computerScore++;
                console.log("computer beats you");
            }
            else{
                console.log(result);  // here result = "tie"
            }
            ++round;
        }
    }

    gameEnd(userScore, computerScore);

    // console.log(`user = ${userScore} \n computer = ${computerScore} \n user + computer = ${userScore + computerScore}`); // for debugging
 
}

// accessing HTML button
const playgame = document.querySelector('button');
playgame.addEventListener('click', game);










//..............class 8..........................//
// const date = new Date();

// console.log(date.getDate());
// const months = ["January", "Feb", "Mar", "Apr"];
// console.log(months[date.getMonth()]);
// console.log(date.getFullYear());

// console.log(date.getMinutes());

// const doomsDay = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);

// const date = new Date();

// let diff = doomsDay.getTime() - date.getTime();

// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));

// const hoursElem = document.getElementById("hours");
// const minutesElem = document.getElementById("minutes");
// const secondsElem = document.getElementById("seconds");
// const amPmElem = document.getElementById("amPm");

// setInterval(function () {
//   const date = new Date();
//   let hours = date.getHours();
//   let amPm = "AM";
//   if(hours > 11) {
//     amPm = "PM";
//     if(hours > 12) {
//         hours -= 12;
//     }
//   }
//   hoursElem.innerText = hours;
//   minutesElem.innerText = date.getMinutes();
//   secondsElem.innerText = date.getSeconds();
//   amPmElem.innerText = amPm;
// }, 1000);





//.....................BANOQABIL TASK 2...............DATE:10-APRIL-2023


//Q1)WRITE A TABLE OF THE NUMBER THAT THE USER ENTERED.
// let number=( prompt("Enter the number whose table you want to display"))
// console.log("Table of "+ number)
// for(var i=1;i<=10;i++){
//     console.log(number + "*" + i + "=" + (parseInt(number)*i))
// }

//Q2)WRITE A CODE TO PRINT FIBONACCI SERIES.
// const num=parseInt (prompt("Enter the number of terms"))//takes input from user
// let n1=0,n2=1,NextTerm;
// console.log("Fibonacci Series")
// for(var i=1;i<=num;i++){
//     console.log(n1);
//     NextTerm=n1+n2;
//     n1=n2;
//     n2=NextTerm;
// }
//Q3)TASK OF NAME
// let UserName=prompt("Enter Your Name");
// UserName=UserName.toLowerCase()
// UserName=UserName.replace(UserName.charAt(0),UserName.charAt(0).toUpperCase())
// console.log(UserName)

//Q4 MATCH THE CAPITAL AND THE CITIES:

// let cities=['Karachi','Islamabad','faisalabad','lahore']
// let capital=['Karachi','Islamabad']
// for(var i=0;i<=cities.length;i++){
//     if(cities[i]==capital[i]){
//      alert(capital +" was the capital "+" from the given cities")
//      }
// }

//Q5 CALCULATE FITRA
//Instructions: Ask the user the number  of family members they have and the form in which they want to give the fitra then calculate the fitra:
// let FamilyMembers=parseInt(prompt("Enter the number of family members you have?"))
// let FitraForm=prompt("Enter the form in which you want to give the fitra:Press 1 for Wheat,2 for Raisin,3 for oats,4 for Dates")
// if(FitraForm=='1'){
//     console.log("Your Fitra amount to be payed is ",90*FamilyMembers)
// }
// else if(FitraForm=='2'){
//     console.log("Your Fitra amount to be payed is ",1600*FamilyMembers)
// }
// else if(FitraForm=='3'){
//     console.log("Your Fitra amount to be payed is ",240*FamilyMembers)
// }
//  else if(FitraForm=='4'){
//     console.log("Your Fitra amount to be payed is ",840*FamilyMembers)
// }
// else{
//     console.log("Invalid Options Entered")
// }


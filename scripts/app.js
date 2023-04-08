
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



// ............task 2 (BANOQABIL CLI)............
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









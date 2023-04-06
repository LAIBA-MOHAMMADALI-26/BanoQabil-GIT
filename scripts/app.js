
//.......................SMIT CLASS CODE..................................

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

// CLASS NO 3:

// let userFavNum =prompt("Enter your favourite number:");
// console.log(+userFavNum+3);

// Comparison Operators
// == , ===
//console.log(5==5); type check nhi karta

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
let ZakatPercentage=0.025;
let UserInput=prompt("Enter Your amount on which you want to calculate Zakat") ;
let Result=ZakatPercentage * Number(UserInput);
alert("Your Zakat is " + Result)












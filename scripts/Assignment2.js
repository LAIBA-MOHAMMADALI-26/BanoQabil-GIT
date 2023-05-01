//Checks the present year is a leap year or not.
function isLeapYear() {
    const year = new Date().getFullYear(); // get current year
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true; // leap year
    } else {
      return false; // not a leap year
    }
  }
  if (isLeapYear()) {
    console.log("This year is a leap year!");
  } else {
    console.log("This year is not a leap year.");
  }
    

//Next leap year in upcoming 10 years
function getNext10LeapYears() {
    const currentYear = new Date().getFullYear();
    const leapYears = [];
  
    for (let year = currentYear + 1; year <= currentYear + 10; year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        leapYears.push(year);
      }
    }
  
    return leapYears;
  }
  const next10LeapYears = getNext10LeapYears();
  console.log("The leap years for the next 10 years are: " + next10LeapYears);
//Make a function that converts string to capital case.
// function toUpperCase(UserName){
// UserName=UserName.toUpperCase();
// return UserName;
// }   
// let Name=prompt("Enter Your Name");
// console.log(toUpperCase(Name));

//Function that calculate your age;
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  const age = calculateAge("2003-02-18");
  console.log("Your age is " + age);
    

  //Function to generate OTP
  function generateOTP() {
    
    let otp = '';
  
      const randomOTP = Math.floor(Math.random() *10);
      otp +=randomOTP;
  
    return otp;
  }
  
  const otp = generateOTP();
console.log("Your OTP is: " + otp);

//2. use console.log to show current year

let currentYear = new Date();
console.log(currentYear.getFullYear());

//3 create teo variable fname and lname . concatenate and log them

let fname = "Saiful";
let lname = "Ilsam";

console.log(fname + "" + lname);

//4.track the valur of a variable by logging it before and after updating

let value = 12;
console.log(value);
value = 24;
console.log(value);

//5 log the square of the number 12 to the console

let number = 12;

console.log(number * number);

//6 print the type of a variable holding the valur true.
let vt = true;
console.log(typeof vt);
//7create a variable holding your age and log whether its grater than 18
let age = 25;
if (age > 18) {
  console.log("Its grater than 18");
} else {
  console.log("Less then 18");
}

// 8 log the result of 100/0 and observe the output
console.log(100 / 0);

//declare a variable using let an log its value
let vari = 25;
console.log(vari);

//create a constrant to store the value of PI and log it
// let PI = 3.1416;
// console.log(PI);
let PI = Math.PI;
console.log(PI);

//re assign the value of a variable decleared by let and log it

let vvv = 20;
vvv = 255;
console.log(vvv);

// check the type of null and log it

let v = null;
console.log(typeof v);

// create the value of number as a string ("25") and log its type
let vall = "123";
console.log(typeof vall);

//
//declrar a variable without assignin a valur and log its type
let vvvv;
console.log(typeof vvvv);

let x = undefined;
console.log(typeof x);

let aa = [1, 2, 3];
aa.push(10);
console.log(aa);

//write a forloop that print 1-50

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

//write a while loop and log sum of 1-10
let num1 = 1;
let sum = 0;
while (num1 <= 10) {
  sum = sum + num1;
  num1++;
}
console.log(sum);

let str = "Javascript";

for (let character of str) {
  console.log(character);
}

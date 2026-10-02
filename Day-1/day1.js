// ### 1. Print Numbers from 1 to N

let N = 10;
for (let i = 1; i <= N; i++) {
  console.log(i);
}

// ### 2. Print Numbers from N to 1 without changing the loop condition of above question

const num = 10;

for (let i = num; i >= 1; i--) {
  console.log(i);
}

// for (let i = 1; i <= num; i++) {
//   console.log(num - i + 1);
// }

// ### 3. Print All Even Numbers from 1 to N

let nu = 10;

for (let i = 1; i <= nu; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// sum of 1-5

// let p = 5;
// let sum = 0;
// for (let i = 1; i <= p; i++) {   //if number is big bigint must needs to use
//   sum = sum + i;
// }
// console.log(sum);

// optimize Way

let num3 = 5;
let sum = (num3 * (num3 + 1)) / 2; //n sonkhok number er jogfol
console.log(sum);

// ### 6. Sum of All Even Numbers up to N

let n6 = 20;
let sum1 = 0;
for (let i = 1; i <= n6; i++) {
  if (i % 2 === 0) {
    sum1 += i;
  }
}
console.log(sum1);

// ### 7. Print Squares of Numbers from 1 to N
let n7 = 10;
for (let i = 1; i <= n7; i++) {
  console.log(i * i);
}

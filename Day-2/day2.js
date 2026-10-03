// # 1. Find the Maximum of Three Numbers

function threeMax(a, b, c) {
  let max = 0;
  if (a > b) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}
console.log(threeMax(2, 4, 1));

// # 1. Find the Maximum of 5 Numbers

function nMax(a, b, c, d, e) {
  let max = a;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (d > max) {
    max = d;
  }
  return max;
}
console.log(nMax(1, 2, 4, 5, 3));

function maxx(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxx([1, 2, 9, 5, 8]));

function maxxx(a, b, c, d) {
  return Math.max(a, b, c, d);
}
console.log(maxx([1, 2, 9, 5, 8]));

// # 2. Check if a Number is Positive, Negative, or Zero

function pnz(num) {
  if (num === 0) {
    return "Zero";
  }
  if (num < 0) {
    return "Negative";
  }
  return "posative";
}
console.log(pnz(5));

// # 3. Calculate Electricity Bill

function electricityBill(unit) {
  let sum = 0;
  if (unit <= 100) {
    sum = unit * 5;
  } else if (unit <= 200) {
    sum = 100 * 5 + (unit - 100) * 7;
  } else if (unit <= 250) {
    sum = 100 * 5 + 100 * 7 + (unit - 200) * 10;
  }
  return sum;
}

console.log(electricityBill(201));

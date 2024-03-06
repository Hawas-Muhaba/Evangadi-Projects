// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function evensOnly(array) {
  var evenOnly = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenOnly[j] = array[i];
      j++;
    }
  }
  return evenOnly;
}

let array8 = [1, 2, 3, 6, 4, 8];
console.log(evensOnly(array8));

// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

function reverseCompare(num) {
  var numString = num.toString();
  var num1 = parseInt(numString[0]);
  var num2 = parseInt(numString[1]);
  if (num1 - num2 >= 0) console.log("ok");
  else console.log("Not ok");
}
reverseCompare(72);

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function factorialFind(fact) {
  if (fact == 0 || fact == 1) return 1;
  else {
    return fact * factorialFind(fact - 1);
  }
}

console.log(factorialFind(5));

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

function meeraArrayTest(array) {
  for (const key in array) {
    for (i = 0; i < array.length && i != key; i++) {
      if (array[key] == 2 * array[i]) {
        return false;
      }
    }
  }
  return true;
}

var array9 = [1, -6, 4, -3];

if (meeraArrayTest(array9)) {
  console.log("I am ");
} else {
  console.log("I am NOT");
}

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

function isDual(array) {
  var flag = true;
  var i = 1;
  var length = array.length;
  while (flag && length > 0) {
    flag = false;
    if (array[i - 1] == array[i]) flag = true;
    i + 2;
    length--;
  }

  return flag;
}

var array10 = [2, 5, 2, 5, 5];
if (isDual(array10.sort())) {
  console.log("Is Dual Array");
} else {
  console.log("Is not dual");
}

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day

function digitalClock(seconds) {
  var hour = 0;
  var minute = 0;
  var sec = 0;
  hour = Math.floor(seconds / 3600);
  var remain = seconds % 3600;
  minute = Math.floor(remain / 60);
  sec = remain % 60;
if(hour>=24) hour = 00;
else if(minute>=60) minute =00;
else if(sec>=60) sec = 00;
  console.log(hour + ":" + minute + ":" + sec);
}

digitalClock(87000);

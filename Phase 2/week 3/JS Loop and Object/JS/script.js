//Q#1
// Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Q#2
// Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
function increment(num) {
  for (var i = 1; i <= 5; i++) {
    num = num + 1;
    console.log(num + "\n");
  }
}
increment(7);

// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

function SumFront(num) {
  var sum = 0;
  for (var i = 0; i <= 9; i++) {
    sum = sum + ++num;
  }
  return sum;
}
console.log(SumFront(7) + "\n");

// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

function print(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
var array = [1, "Hello", 8, 44];
print(array);

// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2

function print(array) {
  console.log(array.length);
}
var array = [1, "Hello", 8, 44];
print(array);

// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  return sum;
}
var array2 = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(sumArray(array2));

// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

function differenceArray(array) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even = even + array[i];
    } else odd = odd + array[i];
  }
  return even - odd;
}
var array3 = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(differenceArray(array3));

// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

function evenOnly(array) {
  for (var i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      console.log(array[i]);
    }
  }
}
var array4 = [5, 6, 99, 8, 76, 4, 68, 44];
var array5 = [11, "“Sam”", 3, 7, "“car”"];
evenOnly(array4);
console.log("********************************");
evenOnly(array5);

// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

function lastOut(array) {
  array.pop();
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
var array7 = [5, 6, 99, 8, 76, 4, 68, 44];
lastOut(array7);

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

function sortOut(array) {
  //   array.sort();
  array.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
console.log("********************************");
var array8 = [5, 6, 99, 8, 76, 4, 68, 44];
sortOut(array8);

// Questions on JavaScript objects

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change
console.log(evangadiClass.lengthOfCourse);
evangadiClass.lengthOfCourse = "5 month";
console.log(evangadiClass.lengthOfCourse);

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console
// ○ // Use an array method

evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered);

// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. Print the result on the console

function calculatesAge(evangadiClass){
  var sum = 0;
  var totalNumber = evangadiClass.students.length;  
    for(var i =0; i<totalNumber; i++){
      sum = sum + evangadiClass.students[i].age;
    }
    return sum/totalNumber;
}

var average = calculatesAge(evangadiClass);



// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
    function calculatesAge(evangadiClass) {


    }
// Puzzles
// ***************************************

// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all numbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.







// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for numbers which are multiples of both three and five print "FizzBuzz".








// Question 17: Evens number ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not. Write a function named isEvens that prints on the console 1 if its integer argument is an Evens number. The function prints 0 otherwise.

  const isEvens = (num) => {
    while (num > 0) {
      if (num % 2 !== 0) {
        return 0;
      }
      num = Math.floor(num / 10);
    }
    return 1;
  };

  console.log(isEvens(3224));
  console.log(isEvens(6224));
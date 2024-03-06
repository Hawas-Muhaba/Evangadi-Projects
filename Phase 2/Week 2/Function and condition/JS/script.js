// alert("You are ready to script");
//Q#1
function myFirst() {
  console.log("Hello");
}

myFirst();

//Q#2

function mySecond(name) {
  console.log(name);
}

mySecond("Hawas Muhaba");

//Q#3

function myThird(name) {
  mySecond(name);
}

myThird("Hawas Muhaba");

//Q#4

function myForth(list) {
  console.log(list[0]);
}

var arrays = [1, 2, 3, 4, 5, 6];

myForth(arrays);

//Q#5

function myFifth(list) {
  console.log(list[0] + list[3]);
}
myFifth(arrays);

//Q#6

// Write a function that takes an integer minutes and converts it to seconds.

function convertToSecond(minute) {
  return minute * 60;
}

console.log(convertToSecond(60));

//Q#7

// Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result

function IncrementByOne(num) {
  return ++num;
}

console.log(IncrementByOne(60));

//Q#8

// Write a function that takes the base and height of a triangle and returns its area.

function calculateArea(height, base) {
  return (height * base) / 2;
}
console.log(calculateArea(2, 3));
//Q#9

//      Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember the
// farmer wants to know the total number of legs and not the total number of animals

function countLeg(chicken, cows, pigs) {
  if (
    typeof chicken !== "number" ||
    typeof pigs !== "number" ||
    typeof cows !== "number"
  ) {
    console.log("Input error!!");
    return -1;
  }
  return chicken * 2 + (cows + pigs) * 4;
}
console.log(countLeg("k", 1, 1));
//Q#10

// Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array

//Q#11

// Create a function that returns true when num1 is equal to num2; otherwise return false

function equalities(numb1, numb2) {
  if (numb1 == numb2) return true;
  return false;
}
console.log(equalities(2, 2));
//Q#12

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false

function divisibility(nu) {
  if (nu % 100 == 0) return true;
  return false;
}

console.log(divisibility(101));

//Q#13

// Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
function parityCheck(nu) {
  if (nu % 2 == 0) return true;
  return false;
}

if (parityCheck(2)) {
  console.log("Even");
} else console.log("Odd!");

//Q#14

// Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

function scores(score) {
    if(typeof score!== "number"){
        console.log("Score is not a number?");
        return null;
    }
    // console.log("Score is"+score);
   

        if (score>100){
            console.log("Score can't be more than 100");
            }
        else if (score>=90){
            console.log("Score A");
            }
        else if (score>=80){
            console.log("Score B");
             }
        else if (score<80){
            console.log("Score C");
            }
        else{
            console.log("Invalid input");
            }
        

}

scores("kk");
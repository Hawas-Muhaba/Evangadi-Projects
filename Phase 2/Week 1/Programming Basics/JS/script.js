console.log("hello");
// alert("your JS file is connected!!");
console.log(24 > 3); //true
console.log(2 < "12"); //true
console.log(0 == 2); //false
console.log(2.0 === 2); //true
console.log(2.0 == "2"); //true
console.log(2 < "John"); //false
console.log(2 > "John"); //false
console.log("2" < "2"); //false
console.log("2" > "12"); //true
console.log(1 == 1 || 3 == 2 || 3 == 7); //true
console.log(1 == 1 && 2 == 2 && 3 == 7); //false
console.log(1 == 1 || (2 == 2 && 3 == 7)); //true
console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
); //true

//#Q2
console.log(+"2" + 2);
console.log(7 % 3);
console.log(2 + true);
//#Q3
console.log(1 + 2);
// var a = 10,
//   b = 2,
//   c;

let a = 20,
  b = 10,
  c;
c = a + b;
console.log(c);

//Q#4
var fname = "Hawas";
var lname = "Muhaba";
var fullName;
fullName = fname + " " + lname;
console.log(fullName);

// alert("Helow");
// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.

// const res = require("express/lib/response");

// var firstP = document.getElementById("sample1");

// console.log(firstP);

// console.log(firstP.textContent);

// // firstP.textContent = "I hacked it finally! you israel!";

// // Question 2:
// // The following questions are based on the HTML code found under the
// // section labeled "For question 2".
// // 2.1 Select the element with an ID of "techCompanies" and display it on your
// // console. (Do not use "querySelector" for this question)
// // 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// // display it on your console.
// // 2.3 How many tech companies are listed under the ul element with an id of
// // "techCompanies"? Use "querySelectorAll" to count the total.

var techCompanies = document.getElementById("techCompanies");
// console.log(techCompanies);

// var techCompanies2 = document.querySelector("#techCompanies");
// console.log(techCompanies2);

// var techCompanies3 = document.querySelectorAll("#techCompanies");
// console.log(techCompanies3.length);

// var reds = document.getElementsByClassName("red");
// var red2 = document.querySelectorAll(".red");
// console.log(reds);

// var redss = document.querySelectorAll(".red");
// console.log(redss);

// var newface= document.createElement("li");
// newface.textContent="FaceBook";
// console.log(newface);

// newface.className = "blue";
// newface.classList.add("pink");
// techCompanies.appendChild(newface);

// var blues = techCompanies.textContent.length;

// // //2.8 ?
// var Blues =0;
// for( var i =0; i < techCompanies; i++ ){
//     if( techCompanies.item(i) == "blue"){
//         Blues++;
//     }
// }
// console.log(Blues);
// var counting = document.createElement("div");
// var numberOfBlues= document.getElementById("blueCompanies");
// counting.textContent = blues;
// numberOfBlues.appendChild(counting);

// const blueCompanies = document.getElementById("blueCompanies");
// const blueLists = document.getElementsByClassName("blue");
// const newParagraph = document.createElement("p");
// newParagraph.textContent = blueLists.length;
// blueCompanies.appendChild(newParagraph);

// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No".

// function yesClicked(){
//     document.body.style.backgroundColor = "#99ecff";
// }
// function noClicked(){
//     document.body.style.backgroundColor = "white";
// }

// var yesId = document.getElementById("yesBackground");
// yesId.addEventListener("click", yesClicked);

// var noId = document.getElementById("noBackground");
// noId.onclick = noClicked;

// // Question 4:
// // A form with two text fields is provided under the section which says "For question 4".
// // Write a JavaScript code which takes the values of the two fields, checks if they are
// // number values and calculate the sum of the two numbers.
// // 1. Display the result on the console
// // 2. Display the result underneath the form
// // 3. If any of the numbers provided is not a number, display a message that says
// // "Please enter numerical values only" underneath the form

// // var firstValue = document.getElementById("firstInput");
// // var num1 = parseFloat(firstValue.value);
// // // console.log(num1);
// // var secondValue = document.getElementById("secondInput");
// // var num2 = parseFloat(secondValue.value);
// // // console.log(num2);
// // // console.log(num1);
// // var result;
// // addNumbers = function(e){
// //     e.preventDefault();
// //     if(typeof num1 !== "number"){
// //         firstValue.placeholder = "Please enter number only";
// //         firstValue.placeholder.style.color = "white";
// //         firstValue.style.backgroundColor = "red";
// //     }else if(typeof num2 !== "number"){
// //         secoondValue.placeholder = "Please enter number only";
// //         secondValue.style.backgroundColor = "red";
// //     }
// //     else
// //     result = num1 + num2;
// // }
// // console.log(result);
// // var resultDist= document.createElement("p");
// // resultDist.innerHTML = result;
// // var submit = document.getElementById("submitButton");
// // // submit.preventDefault();
// // submit.onclick = addNumbers;
// // submit.appendChild(resultDist);

// // var submit = document.getElementById("submitButton");
// // submit.onclick = addNumbers;

// //////////////////////////correctiom////////////////////////
// var submit = document.getElementById("submitButton");
// submit.onclick = addNumbers;

// function addNumbers(e) {
//   e.preventDefault(); // Prevent form submission

//   var firstValue = document.getElementById("firstInput");
//   var num1 = parseFloat(firstValue.value);

//   var secondValue = document.getElementById("secondInput");
//   var num2 = parseFloat(secondValue.value);

//   var result;
//   if (isNaN(num1) || isNaN(num2)) {
//     if (isNaN(num1)) {
//       firstValue.placeholder = "Please enter a number only";
//       firstValue.style.backgroundColor = "red";
//     }
//     if (isNaN(num2)) {
//       secondValue.placeholder = "Please enter a number only";
//       secondValue.style.backgroundColor = "red";
//     }
//     return; // Stop further execution
//   }

//   result = num1 + num2;
//   var resultDist = document.createElement("p");
//   resultDist.innerHTML = "Result: " + result;

//   // Clear previous result paragraph if any
//   var previousResult = document.getElementById("sum");
//   if (previousResult) {
//     previousResult.remove();
//   }

//   // Append the result paragraph
//   submit.parentNode.appendChild(resultDist);
// }
// const secondValueInput = adder.querySelector('input[name="second-value"]
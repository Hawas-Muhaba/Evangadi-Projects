// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.
// 1.2. Print the element itself on the console upon page refresh.
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to
// select the content of the element


var par1= $("#sample1");
console.log(par1);
console.log(par1.text());
// alert("connected");

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.
// 2.2. How many tech companies are listed under the ul element with an id of
// "techCompanies"?
// 2.3. Select all elements with a class of "red" and display them on the console.
// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
// 2.5. Give the newly created element a class of "blue" using jQuery
// 2.6. Append the newly created element next to the the "Sony" <li> element
// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.


var techCompanies = $("#techCompanies");
console.log(techCompanies);

var red = $(".red");
console.log(red.length);

var newList= $("<li>Facebook</li>");
console.log(newList);

newList.addClass("blue");
techCompanies.append(newList);

var totalBlueCompanies = $(".blue").length;
$("#blueCompanies").text(totalBlueCompanies);

// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form


var form = $("#adder");
form.on("submit", function (event) {
  event.preventDefault();
  var num1 = parseFloat($(this).find("[name='first-value']").val()); // Corrected: Parsing input to numerical value
  var num2 = parseFloat($(this).find("[name='second-value']").val()); // Corrected: Parsing input to numerical value
  console.log(num1, num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    // Corrected: Checking if the parsed values are valid numbers
    $("#sum").text(num1 + num2); // Corrected: Calculating the sum
  } else {
    $("#sum").text("Please enter a number only.").addClass("red");
  }
});

// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.

// var fName =.find("input[name='FirstName']").val();


$("#errorMessage").hide();
var wholeForm = $(".subscribe");
$(".subscribe").on("submit", function(e) {
    e.preventDefault();
    var firstName = $("#FirstName").val();
    var lastName = $("#SecondName").val();
    var email = $("#email").val();
    // console.log(firstName + " " + lastName + " " + email);
if(firstName.trim() === "" || lastName.trim() === "" || email.trim() === ""){
    $("#errorMessage").show();
}else{
    var success = $("<div>");
    success.html("<strong>Successfully registered</strong>");
    success.addClass("greens");
    $("#errorMessage").hide();
    $(".subscribe").hide();
    $("#userInfo").show();
    $("#userInfo").prepend(success);
    $("#displayFirstName").text(firstName);
    $("#displayLastName").text(lastName);
    $("#displayEmail").text(email);
}

});




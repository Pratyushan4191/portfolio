/*function greetuser()
{
  alert("Function is working" + user);
}
let user = prompt("Please enter your name...");
greetuser(user);
let count = 0;
while (count <= 5)
{
  console.log(count);
  count++;
}*/

//Task 1 as soon as we click admin login, the admin login must appear
let controlOfAmdinLogin = document.getElementById("admin-login");

function showAdminLogin() {
  // .style to get control of the css
  // .property to get control over specific property
  controlOfAmdinLogin.style.display = "block";
}

//Task 2 Toggle theme
let controlOfThemeBtn = document.getElementById("switch-theme");
controlOfThemeBtn.addEventListener('click', function () {
  document.body.classList.toggle("dark-theme");
});

//task 3 make admin login work
// Make sure JS runs only after HTML is fully loaded
window.addEventListener("DOMContentLoaded", function () {

  // Get the form element
  let controlOfAdminForm = document.getElementById("admin-form");

  // Add event listener for form submission
  controlOfAdminForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Stored (hardcoded) admin credentials
    let storedUsername = "admin";
    let storedPassword = "password";

    // Get values entered by the user
    let username = document.getElementById("usrnme").value;
    let password = document.getElementById("pswd").value;

    // Validate credentials
    if (storedUsername === username && storedPassword === password) {
      alert("Access Granted!");

      // Hide the login form and show the user section
      document.getElementById("admin-login").style.display = "none";
      document.getElementById("user-response").style.display = "block";

      // You can call a function here to show more data, etc.
    } else {
      alert("Access Denied");
    }
  });

  //task 4 store user responses from the contact me section in the back end
  let controlOfContactmeForm = document.getElementById("contact-me-form");

  controlOfContactmeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Grab values from input fields
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('msg').value.trim();
    let date = new Date().toISOString();
    //getting date from the system

    // Create a response object
    let response = {
      name,
      email,
      message,
      date
    };

    console.log("User Response:", response);

    //respone to the back end
    //once u run this code fro the first time it will create a dummydata base
    // for every other time there is no need to create

    // Initialize dummy database from localStorage or create a new empty one
    // empty list act as a dummy data base that stores data in the local storage of browser
    let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [];
    //JSON.parse converts JSON structure to JS object (getting data from DB),DB sends you data in JSON format
    //JSON stringify convert JS object to JSON (Sending data from JS to DB,needs to be converted to JSON)

    //to put items in the JS list
    DummyDatabase.push(response);

    // Save the updated database back to localStorage
    localStorage.setItem('tempDB', JSON.stringify(DummyDatabase));

    // Log the current dummy database
    console.log(DummyDatabase);
  });
});

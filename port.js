/*function greetuser()
{
  alert("Function is working"+user);
}
let user=prompt("Please enter your name...")
greetuser(user);
let count=0;
while(count<=5)
  {
    console.log(count);
    count++;
  }*/


//Task 1 as soon as we click admin login, the admin login must appear

let controlOfAmdinLogin=document.getElementById("admin-login");

function showAdminLogin()
{
  // .style to get control of the css
  // .property to get control over specific property
  controlOfAmdinLogin.style.display="block";
}

//Task 2 Toggle theme
let controlOfThemeBtn=document.getElementById("switch-theme");
 controlOfThemeBtn.addEventListener('click',function(){
document.body.classList.toggle("dark-theme");
});

//task 3
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
});


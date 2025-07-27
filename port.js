// Task 1: Show Admin Login when clicked
let controlOfAdminLogin = document.getElementById("admin-login");

function showAdminLogin() {
  controlOfAdminLogin.style.display = "block";
}

// Task 2: Toggle Theme
let controlOfThemeBtn = document.getElementById("switch-theme");
controlOfThemeBtn.addEventListener('click', function () {
  document.body.classList.toggle("dark-theme");
});

// Task 3: Admin Login Validation
window.addEventListener("DOMContentLoaded", function () {
  let controlOfAdminForm = document.getElementById("admin-form");

  controlOfAdminForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let storedUsername = "admin";
    let storedPassword = "password";

    let username = document.getElementById("usrnme").value;
    let password = document.getElementById("pswd").value;

    if (storedUsername === username && storedPassword === password) {
      alert("Access Granted!");
      document.getElementById("admin-login").style.display = "none";
      document.getElementById("user-response").style.display = "block";
      displayUserMessages();
    } else {
      alert("Access Denied");
    }
  });

  // Task 4: Store User Responses from Contact Form
  let controlOfContactmeForm = document.getElementById("contact-me-form");

  controlOfContactmeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('msg').value.trim();
    let date = new Date().toLocaleString();

    let response = { name, email, message, date };

    let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [];
    DummyDatabase.push(response);
    localStorage.setItem('tempDB', JSON.stringify(DummyDatabase));

    alert("Thank you for your message, we will get back to you shortly");
    this.reset();
  });
});

// Display User Messages after Admin Login
function displayUserMessages() {
  let ControlOfUserMessages = document.getElementById("user-messages");
  ControlOfUserMessages.innerHTML = ""; // Clear previous

  let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [];

  DummyDatabase.forEach(response => {
    let ControlOfResponseElement = document.createElement('div');
    ControlOfResponseElement.innerHTML = `
      <p><strong>Name:</strong> ${response.name}</p>
      <p><strong>Email:</strong> ${response.email}</p>
      <p><strong>Message:</strong> ${response.message}</p>
      <p><strong>Date:</strong> ${response.date}</p>
      <hr>
    `;
    ControlOfUserMessages.append(ControlOfResponseElement);
  });
}

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

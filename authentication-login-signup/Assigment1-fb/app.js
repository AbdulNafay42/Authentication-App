
// Login Page
var emailLogin = document.getElementById("emailLogin");
var passLogin = document.getElementById("passLogin");


function login() {
    if (
      emailLogin.value === localStorage.getItem("Email Address") &&
      passLogin.value === localStorage.getItem("Password")
    ) {
      Swal.fire({
        position: "center",
        icon: "success",  
        title: "Successfully Logged In",
        showConfirmButton: false,
        timer: 1500,
      });
    } else
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter valid Email or Password. ",
        footer: '<a href="">Why do I have this issue?</a>',
      });
  }
  

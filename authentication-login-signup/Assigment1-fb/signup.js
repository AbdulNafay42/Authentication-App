// SignUp Page
var firstName = document.getElementById("firstName");
var LastName = document.getElementById("lastName");
var emailSignUp = document.getElementById("emailSignUp");
var passwordSignUp = document.getElementById("passwordSignUp");

function signup(){
    localStorage.setItem("First Name" , firstName.value);
    localStorage.setItem("Last Name" ,  LastName.value);
    localStorage.setItem("Email Address" , emailSignUp.value);
    localStorage.setItem("Password" , passwordSignUp.value);

    if(firstName.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your first name',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    if(LastName.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your first name',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    if(emailSignUp.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your first name',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    if(passwordSignUp.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your first name',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    else{
        window.location.href = "index.html"
        // document.getElementById("logIn").style.display = "initial"
        // document.getElementById("signUp").style.display = "none"    
    }
}


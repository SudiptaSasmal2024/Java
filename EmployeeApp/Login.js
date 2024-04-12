function signUp()
{
    document.getElementById("login").style.display = "none" 
    document.getElementById("signup").style.display = "block" 
}

function logIn()
{
    document.getElementById("signup").style.display = "none" 
    document.getElementById("login").style.display = "block" 
}
function signUpUser(){
    alert("You have Succesfully Signed Up!!!!!!!!!!")
    document.getElementById("signup").style.display = "none" 
}
function logInUser(){
    alert("You have Succesfully LogIn !!!!!!!!!!")
    document.getElementById("login").style.display = "none" 
}
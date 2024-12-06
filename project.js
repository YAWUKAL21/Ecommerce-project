var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"; 
    } else {
        MenuItems.style.maxHeight = "0px"; 
    }
}

// js for product detail
var productimg= document.getElementById("productimg")
var smallImg=document.getElementsByClassName("small-img")
    
smallImg[0].onclick=function(){
    productimg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    productimg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    productimg.src=smallImg[2].src;
}

smallImg[3].onclick=function(){
    productimg.src=smallImg[3].src;
}
//js for account

/*var loginform=document.getElementById("Loginform")
var RegisterForm=document.getElementById("RegisterForm");
var Indicator =document.getElementById("indicator")

function login(){
    loginform.style.transform="translateX(300px)";
    RegisterForm.style.transform="translateX(300px)";
    Indicator .style.transform='translateX(0px)';
}
function register(){
    loginform.style.transform="translateX(0px)";
    RegisterForm.style.transform="translateX(0px)";
    Indicator .style.transform='translateX(100px)';
}
    */
function login() {
    document.getElementById('Loginform').style.left = '0'; // Move login form to the right place
    document.getElementById('RegisterForm').style.left = '-300px'; // Move register form out of view
    document .getElementById('indicator') .style.transform='translateX(0px)';
}

function register() {
    document.getElementById('RegisterForm').style.left = '0'; // Move register form to the right place
    document.getElementById('Loginform').style.left = '300px'; // Move login form out of view
    document .getElementById('indicator') .style.transform='translateX(100px)';
}


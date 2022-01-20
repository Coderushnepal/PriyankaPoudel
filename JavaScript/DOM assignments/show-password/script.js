// //form
//  var form = document.createElement("form");
//  document.body.appendChild(form);

// //creating password field
//  var enterpassword = document.createElement("input");
//  enterpassword.type = "password";
//  enterpassword.placeholder = "Enter your password";

// // create pasdiv
// var pasdiv = document.createElement("div");
// pasdiv.classList.add('pasdiv');

// // create icon
// var icon = document.createElement('i');
// icon.className = "fas fa-eye" 
// icon.id = "eyeicon";

// pasdiv.appendChild(enterpassword);
// pasdiv.appendChild(icon);

// form.appendChild(pasdiv);

// function clicked(){
//     var password = document.getElementById("password");
//     var eyeicon = document.getElementById("eyeicon");
//     if(password.type === "password"){
//         password.setAttribute("type", "text");
//         // eyeicon.className = "fas fa-eye-slash";
//     }
//     else if(password.type === "text") {
//         password.setAttribute("type", "password");
//         eyeicon.className = "far fa-eye";

//     }
// }






//create form
var form = document.createElement("form");
form.style.width = "350px";
form.style.height = "200px";
form.style.backgroundColor ="brown";
form.style.margin = "10px auto";
document.body.appendChild(form);

//create password field
var inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Enter your password");
inputPassword.style.padding = "10px";
inputPassword.style.margin = "20px";
inputPassword.style.width = "220px";
form.appendChild(inputPassword);

//input icon
var eyeIcon = document.createElement('i');
eyeIcon.className = "fa fa-eye-slash" ;
eyeIcon.id = "eyeicon" ;
form.appendChild(eyeIcon);
eyeIcon.style.marginLeft = "-45px";

eyeIcon.addEventListener("click", function() {
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        eyeIcon.className = "fa fa-eye";
    } else {
        inputPassword.type = "password";
        eyeIcon.className = "fa fa-eye-slash";
    }
});

//forgot and next div
var forgotNext = document.createElement("div");
form.appendChild(forgotNext);
//forgot password
var forgotPassword = document.createElement("a");
forgotPassword.innerHTML = "Forgot Password?";
forgotPassword.style.margin ="20px";
forgotNext.appendChild(forgotPassword);
// forgotPassword.addEventListener('mouseover', function(event) {
//     forgotPassword.style.color = "red";
// })
// forgotPassword.addEventListener('mouseout', function(event) {
//     forgotPassword.style.color = "pink";
// })

//next button
var nextButton = document.createElement("button")
nextButton.innerHTML = "Next";
nextButton.style.margin = "20px";
forgotNext.appendChild(nextButton);

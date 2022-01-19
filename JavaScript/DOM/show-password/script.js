//form
// var form = document.createElement("form");
// document.body.appendChild(form);

//creating password field

// var enterpassword = document.createElement("input");
// enterpassword.type = "password";
// enterpassword.placeholder = "Enter your password";
// document.body.appendChild(enterpassword);


function clicked(){
    var password = document.getElementById("password");
    var eyeicon = document.getElementById("eyeicon");
    if(password.type === "password"){
        password.setAttribute("type", "text");
        eyeicon.className = "fas fa-eye-slash";
    }
    else if(password.type === "text") {
        password.setAttribute("type", "password");
        eyeicon.className = "far fa-eye";

    }
}
//creating maincontainer
var maincontainer = document.createElement("div");
maincontainer.style.height = "600px"
maincontainer.style.width ="700px";
maincontainer.style.margin = "40px auto";
maincontainer.style.backgroundColor = "wheat";
document.body.appendChild(maincontainer);

// creating button
var button = document.createElement("button");
button.innerHTML = "generate balloons" ;
button.style.padding = "10px";
button.style.margin = "20px";
maincontainer.appendChild(button);

//div for ballons
var ballonsdiv = document.createElement("div");
ballonsdiv.style.height = "400px";
ballonsdiv.style.width = "600px";
ballonsdiv.style.position = "relative";
maincontainer.appendChild(ballonsdiv);

//adding eventListner in buttons(creating balloons) 

button.addEventListener("click", function(){
    var  balloons = document.createElement("div");
    balloons.style.height = "30px";
    balloons.style.width = "30px";
    balloons.style.borderRadius = "50%";
    balloons.style.backgroundColor = "green";
    balloons.style.position = "absolute" ;
    balloons.style.left = "600" * Math.random() + "px";
    balloons.style.top = "400" * Math.random() +"px";
    ballonsdiv.appendChild(balloons);
})







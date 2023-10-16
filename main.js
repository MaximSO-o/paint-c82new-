var mouseEvent;

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var color;

var width;

var radius;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

  color = document.getElementById("color").value;  
    
  width_of_line = document.getElementById("width_of_line").value;  

  radius = document.getElementById("radius").value; 

  mouseEvent = "mousedown";
  
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e) {

var current_position_of_X = e.clientX - canvas.offsetLeft; 

var current_position_of_Y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mousedown") {

console.log("Current position of X and Y cordinetes = ");

console.log("x = " + current_position_of_X + "y = " + current_position_of_Y);

ctx.beginPath();

ctx.strokeStyle = color;

ctx.lineWidth = width_of_line;

ctx.arc(current_position_of_X,current_position_of_Y,radius,0,2 * Math.PI);

ctx.stroke();

}

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {

mouseEvent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup() {

mouseEvent = "mouseup";

}

function clearArea(){


    ctx.clearRect(0,0,canvas.width,canvas.height);

}
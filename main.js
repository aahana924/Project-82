var mouseEvent = "";
canvas = document.getElementById("mycanvas");
 ctx = canvas.getContext("2d");
var color = "";
var radius = "";
var width = "";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  color = document.getElementById("color1").value;
  console.log(color);
  radius = document.getElementById("radius").value;
  width = document.getElementById("width").value;
  mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
  mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  mouseEvent="mouseleave";
 }
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  mouseEvent="mousedown";
  currentpositionofmouseX=e.clientX-canvas.offsetLeft;
  currentpositionofmouseY=e.clientY-canvas.offsetTop;
  
  if (mouseEvent == "mousedown") {
    console.log("Current Position of y and x corrdinates");
    console.log("X = "+ currentpositionofmouseX+" Y = " + currentpositionofmouseY);
    //Circle Code
    ctx.beginPath();
    
    ctx.lineWidth = width;
    ctx.strokeStyle=color;
    ctx.arc(currentpositionofmouseX,currentpositionofmouseY,radius,0,2*Math.PI);
    ctx.stroke();
   }
  
}
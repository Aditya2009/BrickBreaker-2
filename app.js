var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsettop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for(var c=0; c<brickColumnCount; c++)
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);
function keyDownHandler(e){
    if(e.key == "right" || e.key == "arrowright"){
        rightPressed = true;
    }
    else if(e.key == "left" || e.key == "arrowleft"){
        leftPressed = true;
    }
    }
    function keyDownHandler(e){
        if(e.key == "right" || e.key == "arrowright"){
            rightPressed = false;
        }
        else if(e.key == "left" || e.key == "arrowleft"){
            leftPressed = false;
        }
        }
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath(); 
}
function drawpaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleHeight,paddleWidth);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
}
function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath(); 
drawBall();
drawPaddle();
x +=dx;
y +=dy;
if(y+dy < ballRadius ||  y+dy > canvas.height - ballRadius){
    dy = -dy;
}
if(x+dx < ballRadius ||  x+dx > canvas.width - ballRadius){
    dx = -dx;
}
if(rightPressed){
    paddleX -= 7;
    if(paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
}
else if(leftPressed){
    paddleX -= 7;
    if(paddleX<0){
        paddleX=0;
    }
}
}
function keyDownHandler(e){
if(e.key == "right" || e.key == "arrowright"){
    rightPressed = true;
}
else if(e.key == "left" || e.key == "arrowleft"){
    leftPressed = true;
}
}
function keyDownHandler(e){
    if(e.key == "right" || e.key == "arrowright"){
        rightPressed = false;
    }
    else if(e.key == "left" || e.key == "arrowleft"){
        leftPressed = false;
    }
    }
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);
setInterval(draw,10);
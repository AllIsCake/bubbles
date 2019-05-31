function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


   

canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);
ctx = canvas.getContext('2d');
/*
ctx.fillStyle = 'red';
ctx.fillRect(5, 5, 50, 50);
ctx.fillStyle = 'rgba(225, 0, 0, 0.1)';
ctx.fillRect(150, 150, 50, 50);
ctx.fillRect(300, 300, 50, 50);

//my first path

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(150, 100);
ctx.lineTo(125, 50)
ctx.lineTo(100, 100)
ctx.strokeStyle = "blue";
ctx.stroke();

//my first arc / circle
ctx.beginPath();
ctx.arc(100, 300, 30, 0, 0.9 * Math.PI, false)
ctx.stroke();
*/
/*
function DrawCirlces() {
    for (var i = 0; i < 1; i++) {
        for (var j = 0; j < 2000; j++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgb(' + getRandom(225) + ', ' + getRandom(225) + ', '+ getRandom(225) +')';
            ctx.arc(getRandom(window.innerWidth), getRandom(window.innerHeight), 30, 0, 2 * Math.PI, false)
            ctx.stroke();
        }
    }
}

DrawCirlces();*/
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 5;

//colors 

var colorsArray = [
    '#1abc9c',
    '#e74c3c',
    '#9b59b6',
    '#f1c40f',
    '#e67e22',
]

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    unit();
})

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

function unit() {
    circlesArray = [];
    for (var i = 0; i < 600; i++) {
    var coordY = Math.random() * (innerHeight - 60) + radius;
    var coordX = Math.random() * (innerWidth - 60) + radius;
    var speedY = Math.random() - 0.5;
    var speedX = Math.random() - 0.5;
    var radius = 30;
    circlesArray.push(new Circle(coordX, coordY, speedY, speedY, radius));
}
}

function Circle(x, y, speedX, speedY, radius) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;
    this.color = colorsArray[getRandom(4)]
    this.minRadius = getRandom(10) + 2;
    this.draw = function() {
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        this.update();
    }
    this.update = function() {
        if (this.y > innerHeight || this.y - this.radius  < 0) {
            this.speedY = -this.speedY;
        } 
        if (this.x > innerWidth || this.x - this.radius  < 0) {
            this.speedX = -this.speedX;
        }

        this.x += this.speedX;
        this.y += this.speedY;

         if (mouse.x - this.x < 60 && mouse.x - this.x > -60 && 
            mouse.y - this.y < 60  && mouse.y - this.y > -60) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
    }
}
circlesArray = [];
for (var i = 0; i < 600; i++) {
    var coordY = Math.random() * (innerHeight - 60) + radius;
    var coordX = Math.random() * (innerWidth - 60) + radius;
    var speedY = Math.random() - 0.5;
    var speedX = Math.random() - 0.5;
    var radius = 30;
    circlesArray.push(new Circle(coordX, coordY, speedY, speedY, radius));
}
unit();
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circlesArray.length; i++) {
       circlesArray[i].draw();
    }
}

animate();
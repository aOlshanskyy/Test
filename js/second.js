const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.fillStyle = '#11365c';
context.fillRect(0, 0, window.innerWidth, window.innerHeight);

let ship = {
    live: true,
    shots: [],
    pos: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    },
    acceleration: {
        x: 0,
        y: 0
    },
    angle: 0,
    velocity: {
        x: 0,
        y: 0
    }
}
shot = {
    live: true,
    pos: {
        x: 0,
        y: 0
    },
    radius: 1,
    orientation: 0,
    acceleration: {
        x: 2,
        y: 2
    },
    velocity: {
        x: 0,
        y: 0
    }
    // drow:  shotDrow = ()=>{
    //     		context.save();
    //     		// Translate to the player's position
    //     		context.translate(ship.pos.x, ship.pos.y);
    //     		// Settings
    //     		context.fillStyle = "#0f0";
    //     		context.lineWidth = 4;
    //     		context.beginPath();
    //     		context.arc(0, 0, this.size, 0, Math.PI * 2, true);
    //     		context.closePath();
    //     		context.fill();
        
    //     		context.restore();
    //         }
};
// function drowShot(){
//         context.save();
//         // Translate to the player's position
//         context.translate(ship.pos.x, ship.pos.y);
//         // Settings
//         context.fillStyle = "#0f0";
//         context.lineWidth = 4;
//         context.beginPath();
//         context.arc(0, 0, this.size, 0, Math.PI * 2, true);
//         context.closePath();
//         context.fill();

//         context.restore();
    
// }


function drowShot(obj) {
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = '#000';
    context.save();
    let radians = obj.orientation / Math.PI * 180;
    context.translate(obj.pos.x , obj.pos.y);
    // context.rotate(radians);
    context.rotate(radians);
    context.beginPath();
    context.arc(0, 0, obj.radius, 0, 2 * Math.PI, true);
    context.fill();
    context.stroke();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    context.restore();
}
// let shot = function(){
//     live: true,
//     pos = {
//         x: ship.pos.x,
//         y: ship.pos.y
//     },
//     angle: ship.angle,
//     drow:  shotDrow = ()=>{
// 		c.save();
// 		// Translate to the player's position
// 		c.translate(ship.pos.x, ship.pos.y);
// 		// Settings
// 		c.fillStyle = "#0f0";
// 		c.lineWidth = 4;
// 		c.beginPath();
// 		c.arc(0, 0, this.size, 0, Math.PI * 2, true);
// 		c.closePath();
// 		c.fill();

// 		c.restore();
//     }
// }
function update(event){
    ship.pos.x += ship.acceleration.x;
    ship.pos.y += ship.acceleration.y;
    shot.pos.x += shot.acceleration.x;
    shot.pos.y += shot.acceleration.y;
    // shot ship.pos.x;
    // ship.pos.y;
    // if (ship.pos.x < 0 || ship.pos.x > canvas.width) {
    //     ship.acceleration.x *= -1;
    // }
    // if (ship.pos.y < 0 || ship.pos.y > canvas.height) {
    //     ship.acceleration.y *= -1;
    // }
    if (ship.pos.x > canvas.width) {
        ship.pos.x = 0;
    }
    if (ship.pos.x < 0) {
        ship.pos.x = canvas.width;
    }
    if (ship.pos.y < 0) {
        ship.pos.y = canvas.height;
    }
    if (ship.pos.y > canvas.height) {
        ship.pos.y = 0;
    }
    
    if ((canvas.width < shot.pos.x) || (0 > shot.pos.x) || (canvas.height < shot.pos.y) || (0 > shot.pos.y)) {
        shot.live = false;
        shot.pos.y = false;
    }
    if (shot.live) drowShot(shot);
    
  
   
}
function draw(){
    context.fillStyle = '#11365c';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.save();
    context.translate(ship.pos.x, ship.pos.y);
    context.rotate(ship.angle);
    context.strokeStyle = "#ffffff";
    context.fillStyle = '#ffffff';
    // context.beginPath();
    // context.moveTo(10,55);
    // context.lineTo(55,25);
    // context.lineTo(10,25);
    // context.closePath();
    // context.fill();
    // context.stroke();
    // context.restore();
    var halfSize = 30 / 1.2;
    context.beginPath();
    context.moveTo(-30, -halfSize);
    context.lineTo(-30 + (halfSize / 2), 0);
    context.lineTo(-30, halfSize);
    context.lineTo(30, 0);
    context.lineTo(-30, -halfSize);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // for (var i=0; i<ship.shots.length; i++) {
    //     var bullet = ship.shots[i];
    //     shot.draw;
    // }
}

function run(){
    update();
    draw();
    
}
// run();
// document.addEventListener('keydown', event =>{ 
//         if (event.keyCode === 37) {
//             ship.angle -= 0.1;
//         }
// });

document.addEventListener('keydown', event =>{ 
    let radians = ship.angle / Math.PI * 180;
    switch (event.keyCode){
        case 37:
            ship.angle -= 0.5;
            break;
        case 39:
            ship.angle += 0.5;
            break;
        case 38:
            // ship.pos.x = 5 * Math.cos(degToRad(ship.angle));
            // ship.pos.y = 5 * Math.sin(degToRad(ship.angle));
            
            // ship.pos.x += Math.cos(radians) * 5;
            // ship.pos.y += Math.sin(radians) * 5;
            ship.acceleration.x = Math.cos(radians) * 2;
            ship.acceleration.y = Math.sin(radians) * 2;
            // ship.pos.y += Math.sin(radians) * 5;
            // ship.pos.x = 0.05 * Math.cos(degToRad(ship.angle));
            // ship.pos.y = 0.05 * Math.sin(degToRad(ship.angle*10));
            break;
        case 40:
            ship.acceleration.x *= 0.2
            ship.acceleration.y *= 0.2;
            break;
        case 32:
            shot.live = true ;
            shot.pos.x = ship.pos.x + 35;
            shot.pos.y = ship.pos.y;
            shot.acceleration.x = Math.cos(radians) * 2;
            shot.acceleration.y = Math.sin(radians) * 2;
            // shot.velocity.x = Math.cos(radians)*3;
            // //if (x<0)		bullet.velocity.x *= -1;
            // shot.velocity.y  = Math.sin(radians)*3;
            // //if (y<0)		bullet.velocity.y *= +1;
            console.log('Shot');
            break;
    }
});
setInterval(run, 5);
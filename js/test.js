const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.fillStyle = '#11365c';
context.fillRect(0, 0, window.innerWidth, window.innerHeight);



let Ship = function(){
    this.live = true;
    this.shots = [];
    this.rating = 0;
    this.pos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }
    this.angle = 0;
    
    this.moveTo = function(e){
        e = e || window.event;
        switch (e.keyCode){
            case '37':
                this.angle -= 0.5;
                break;
            case '39':
                this.angle += 0.5;
                break;
        }
    }

    // this.moveTo();

    this.draw = function(context) {
		// Save state
		context.save();
		// Translate to the player's position
		context.translate(this.pos.x, this.pos.y);
		context.rotate(this.angle);
		// Settings
		context.strokeStyle = "#ffffff";
        context.fillStyle = '#ffffff';
		// context.lineWidth = 4;
		// Draw triangle
		context.beginPath();
		context.moveTo(-30, -15);
        context.lineTo(50, 75);
        context.lineTo(100, 25);
		context.closePath();
		context.fill();
		context.stroke();
		context.restore();
	};

} 





function run(){
    let ship = new Ship();
    document.addEventListener('keydown', ship.moveTo(e));
    ship.draw(context);
}
run();

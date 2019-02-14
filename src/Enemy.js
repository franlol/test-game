'use strict'

class Enemy extends Character {

    constructor(canvas, game) {
        super(canvas, game);
        this.direction = Math.floor((Math.random() * 1) - 0.5) ? -1 : 1;         //random left or right
        this.turnSpeed = 0.1;
        this.sizeX = 35;
        this.sizeY = 35;
        this.x = this.generateX();
        this.y = 10;
        // this.canvas = canvas;                            //Super
        // this.ctx = this.canvas.getContext("2d");         //Super
        // this.lives = 3;                                  //Super
        // this.game = game;                                //Super
    }
 
    generateX() {
        let x = Math.random() * (this.canvas.width - this.sizeX) > 0 ? (Math.random() * this.canvas.width) - this.sizeX : 10;

        return x;
    }

    update() {
        this.y += 0.4;
        this.move();
    }

    move() {
        if (this.direction < 0) { //left
            this.x+= -this.turnSpeed;
        } else {                  //right
            this.x+= this.turnSpeed;
        }
    }

    //@override
    checkCollisions() { //Wall collisions && change direction
        if (this.x + this.sizeX >= this.canvas.width) {
            // console.log("out")
            this.x = this.canvas.width - this.sizeX - 1;
            this.direction = -1;
        }
        if (this.x <= 0) {
            this.x = 1;
            this.direction = 1;
        }
    }

    shoot() {
        if (Math.random() * 100 > this.game.enemyShootProb) {
            // console.log("SHOT")
            this.game.enemyBullets.push(new EnemyBullet(this.canvas, this));
        }
    }

}

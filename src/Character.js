'use strict'

class Character {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.direction = 0;
        this.sizeX = 40;
        this.sizeY = 60;
        this.lives = 3;

        this.x = (canvas.width / 2) - (this.sizeX / 2);
        this.y = canvas.height - 80;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    }

    update() {
        this.x = this.x + (this.speed * this.direction);
    }

    move() {
        //
    }

    checkCollisions() {
        console.log(this.canvas.width)
        if (this.x + (this.sizeX / 2) >= this.canvas.width) {
            this.direction = 0;
        }
    }

    shoot() {
        console.log("im shooting");
        
    }

    receiveDamage() {
        //
    }

    loseLife() {
        //
    }

    die() {
        //
    }

}
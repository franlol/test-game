'use strict'

class Character {

    constructor(canvas, game) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.direction = 0;
        this.sizeX = 40;
        this.sizeY = 60;
        this.lives = 3;
        this.game = game;

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
        if (this.x + this.sizeX >= this.canvas.width) {
            // console.log("out")
            this.x = this.canvas.width - this.sizeX - 1;
        }
        if (this.x <= 0) {
            this.x = 1;
        }

    }

    shoot() {
        this.game.bullets.push(new Bullet(this.canvas, this));
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
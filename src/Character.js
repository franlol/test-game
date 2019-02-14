'use strict'

class Character {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x;
        this.y;
        this.direction;
        this.sizeX;
        this.sizeY;
        this.lives = 3;
    }

    draw(canvas) {
        this.ctx.fillRect(100, 100, 40, 40);
    }

    move() {
        //
    }

    checkCollisions(canvas) {
        //
    }

    shoot() {
        //
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
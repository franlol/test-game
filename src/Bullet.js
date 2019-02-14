'use strict'

class Bullet {

    constructor(canvas, player) {
        this.x = player.x;
        this.y = player.y;
        this.sizeX = 8;
        this.sizeY = 10;
        this.distance = 5;
        this.velocity = 8;
        this.outOfCanvas = false;

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.player = player;
    }
    
    draw() {
        this.ctx.fillRect(this.x + (this.player.sizeX / 2) - (this.sizeX / 2), this.y - this.distance, this.sizeX, this.sizeY)
    }

    update() {
        this.y -= this.velocity;
        if (this.y - (this.sizeY / 2) <= 0) {
            this.outOfCanvas = true;
            // console.log("out")
        }
    }
}
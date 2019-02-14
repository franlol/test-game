'use strict'

class Game {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.startScreen();
    }

    startScreen() {
        this.ctx.fillRect(25, 25, 100, 100);
        this.ctx.clearRect(45, 45, 60, 60);
        this.ctx.strokeRect(50, 50, 50, 50);
    }

}
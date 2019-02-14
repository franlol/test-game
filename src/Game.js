'use strict'

class Game {

    constructor(canvas) {
        this.players = [];
        this.enemies = [];
        this.bullets = [];
        this.isGameOver = false;
        this.playerLives = 3;

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.requestAnimationID;
    }

    startGame() {
        this.players.push(new Player(this.canvas));
        this.startLoop();
    }

    startLoop() {
        console.log("OUT of loop");
        // let test = 1;
        const loop = () => {
            console.log("in the loopz");
            // this.update();
            // this.clear();
            // this.draw();
            if (this.isGameOver) {
                window.cancelAnimationFrame(animationFrameID);
            // } else if (test < 100) {
            } else {
                // test++;
                window.requestAnimationFrame(loop);
            }
        }
        const animationFrameID = window.requestAnimationFrame(loop);
    }

    update() {
        this.players.forEach(function (player) {
            player.update();
        });

        this.bullets.forEach(function (bullet) {
            bullet.update();
        });

        this.enemies.forEach(function (enemy) {
            enemy.update();
        });
    }


}
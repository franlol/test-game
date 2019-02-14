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
        this.players.push(new Player(this.canvas, this));
        // console.log(this)
        this.startLoop();
    }

    startLoop() {
        console.log("OUT of loop");
        // let test = 1;
        const loop = () => {
            // console.log("in the loopz");
            this.clearCanvas();
            this.update();
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

    generateEnemies() {
        if (Math.random() * 100 > 98) {
            console.log("YES")
        }
    }

    update() {
        this.players.forEach(function (player) {
            player.update();
            player.draw();
            player.checkCollisions();
            
        });

        this.bullets.forEach(function (bullet) {
            if (bullet.outOfCanvas) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1); //Borro la bullet que está fuera del canvas, para que el GC la borre de la ram
            }
            bullet.update();
            bullet.draw();
            
        }.bind(this));

        this.enemies.forEach(function (enemy) {
            // enemy.update();
            // enemy.draw();
        });
        
        this.generateEnemies();
    }

    
    draw() {
        
    }
    
    checkCollisions() {
        
    }
    
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    gameOver() {

    }
}
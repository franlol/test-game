'use strict'

class Game {

    constructor(canvas, screen) {
        //objects
        this.players = [];
        this.enemies = [];
        this.bullets = [];
        this.enemyBullets = [];
        this.hits = [];
        this.explosions = [];

        //game status
        this.isGameOver = false;
        this.playerLives = 3;

        //enemies config
        this.maxEnemies = 10;
        this.enemySpawnProb = 97.2;
        this.enemyShootProb = 99;
        this.enemyBulletsSpeed = 8;

        //screen config
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.requestAnimationID;
        this.screen = screen;

        //bckground config
        this.backgroundX = 0;
        this.backgroundY = 5175;
    }

    startGame() {
        // setTimeout(() => {
        this.players.push(new Player(this.canvas, this));
        // },5000)
        // console.log(this)
        this.startLoop();
    }

    startLoop() {
        console.log("OUT of loop");
        // let test = 1;
        const loop = () => {
            // console.log("in the loopz");
            this.clearCanvas();
            this.draw();
            this.update();
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
        if (Math.random() * 100 > this.enemySpawnProb && this.enemies.length < this.maxEnemies) {
            this.enemies.push(new Enemy(this.canvas, this));
        }
    }

    update() {
        console.log(this.explosions)
        this.players.forEach(function (player) {
            player.update();
            player.draw();
            player.checkCollisions();
        });

        this.bullets.forEach(function (bullet) {
            bullet.checkCollisions();
            if (bullet.inCollision) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                this.hits.push(new Hit(bullet));
            }
            bullet.update();
            if (bullet.outOfCanvas) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1); //Borro la bullet que está fuera del canvas, para que el GC la borre de la ram
            }
            bullet.draw();
        }.bind(this));

        this.enemies.forEach(function (enemy) {
            enemy.update();
            if (enemy.outOfCanvas) {  //Borro el Enemy que está fuera del canvas, para que el GC la borre de la ram
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
            enemy.shoot();
            enemy.draw();
            enemy.checkCollisions();
        }.bind(this));

        this.enemyBullets.forEach(function (bullet) {
            bullet.checkCollisions();
            if (bullet.inCollision) {
                this.enemyBullets.splice(this.enemyBullets.indexOf(bullet), 1);
                this.hits.push(new Hit(bullet));
            }
            bullet.update();
            if (bullet.outOfCanvas) {
                this.enemyBullets.splice(this.enemyBullets.indexOf(bullet), 1); //Borro la bullet que está fuera del canvas, para que el GC la borre de la ram
            }
            bullet.draw();
        }.bind(this));

        this.hits.forEach(function (hit) {
            if (hit.hitFinished) {
                this.hits.splice(this.hits.indexOf(hit), 1);
            } else {
                hit.draw();
            }
        }.bind(this));

        this.explosions.forEach(function(explosion) {
            if (explosion.explosionFinished) {
                this.explosions.splice(this.explosions.indexOf(explosion), 1);
            } else {
                explosion.draw();
            }
        }.bind(this))

        this.generateEnemies();
    }


    draw() {
        var backgroundImage = new Image();
        backgroundImage.src = "./img/background.jpg";
        //drawImage(image, recortarDesdeX, recortarDesdeY, recorteWidth, recorteHeight, canvasStartX, canvasStartY, canvasWidth, canvasHeight)
        // this.ctx.drawImage(backgroundImage, 0, this.backgroundY - this.screen.canvasHeight, 900, 600, 0, 0, 600, 600);
        this.backgroundY -= 0.4;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOver() {
        this.isGameOver = true;
        console.log(this)
        setTimeout(this.screen.gameOverScreen, 3000);
    }
}
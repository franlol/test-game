'use strict'

class Game {

    constructor(screen) {
        //objects
        this.players = [];
        this.enemies = [];
        this.bullets = [];
        this.enemyBullets = [];
        this.hits = [];
        this.explosions = [];

        //game status
        this.isGameOver = false;
        this.playerLifes = 1;
        this.deadPlayerScore = 0;

        //enemies config
        this.maxEnemies = 10;
        this.enemySpawnProb = 97.2;
        this.enemyShootProb = 99;
        this.enemyBulletsSpeed = 8;

        //theme
        this.theme;

        //screen config
        this.screen = screen;
        this.canvas = this.screen.canvas;
        this.ctx = this.screen.canvas.getContext("2d");

        //bckground config
        this.backgroundX = 0;
        this.backgroundY = 5175;
    }

    startGame() {
        this.theme = Ship.getData(this.screen.theme);
        this.players.push(new Player(this));
        this.startLoop();
    }

    startLoop() {
        const loop = () => {
            console.log("in loop")
            this.clearCanvas();
            this.draw();
            this.update();
            if (this.isGameOver) {
                console.log(this);
                window.cancelAnimationFrame(animationFrameID);
            } else {
                window.requestAnimationFrame(loop);
            }
        }
        const animationFrameID = window.requestAnimationFrame(loop);
    }

    generateEnemies() {
        if (Math.random() * 100 > this.enemySpawnProb && this.enemies.length < this.maxEnemies) {
            this.enemies.push(new Enemy(this));
        }
    }

    update() {
        this.players.forEach(function (player) {
            player.update();
            player.draw();
            player.checkCollisions();
        });

        this.bullets.forEach(function (bullet) {
            bullet.checkCollisions();
            if (bullet.inCollision) {
                this.hits.push(new Hit(bullet));
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
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

        this.explosions.forEach(function (explosion) {
            if (explosion.explosionFinished) {
                this.explosions.splice(this.explosions.indexOf(explosion), 1);
            } else {
                explosion.draw();
            }
        }.bind(this))

        this.generateEnemies();
        this.updateInfo(this.players[0]);
    }

    draw() {
        var backgroundImage = new Image();
        backgroundImage.src = "./img/background.jpg";
        //drawImage(image, recortarDesdeX, recortarDesdeY, recorteWidth, recorteHeight, canvasStartX, canvasStartY, canvasWidth, canvasHeight)
        // this.ctx.drawImage(backgroundImage, 0, this.backgroundY - this.screen.canvasHeight, 900, 600, 0, 0, 600, 600);
        this.backgroundY -= 0.4;
    }

    updateInfo(player) {
        if (player !== undefined) {
            let heart = new Image();
            heart.src = "./img/Items/heart.png"; //200 x 185 pixels

            this.ctx.fillStyle = "black";
            this.ctx.font = "24px Orbitron";
            this.ctx.fillStyle = "yellow";
            this.ctx.fillText("00:45", (this.screen.canvasWidth / 2) - 50, 30);
            this.ctx.font = "18px Orbitron";
            this.ctx.fillText(`Score: ${player !== undefined ? player.score : this.deadPlayerScore}`, 20, 70);
            for (let i = player.lifes, x = 20; i > 0; i--) {
                this.ctx.drawImage(heart, 0, 0, 200, 185, x, 80, 24, 22);
                x += 30;
            }
            this.ctx.fillStyle = "black";
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    gameOver(player) { //player que ha muerto, para escalarlo a 2 players
        this.players.splice(this.players.indexOf(player), 1);
        let gameOverTimeoutId = setTimeout(function () {
            this.isGameOver = true;
            this.screen.gameOverScreen();
        }.bind(this), 1000);
    }


}

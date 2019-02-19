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
        this.deadPlayerScore = 0;
        this.timerId;
        this.timer = 140;
        this.stage = 1;
        this.stageBoss = false;

        //Player config
        this.playerLifes = 3;
        this.playerBulletSpeed = 8;

        //enemies config
        this.maxEnemies = 10;
        this.enemySpawnProb = 97.2;
        this.enemyShootProb = 99;
        this.enemyBulletsSpeed = 8;

        //theme
        this.theme;
        this.bg;
        this.enemyShip;

        //screen config
        this.screen = screen;
        this.canvas = this.screen.canvas;
        this.ctx = this.screen.canvas.getContext("2d");

        // bckground config
        this.backgroundX = 1080;
        this.backgroundY = 7680;
        this.meteors = this.backgroundY;
        this.planets = this.backgroundY;
        this.stars = this.backgroundY;

    }

    startGame() {
        //get themes
        this.theme = Ship.getData(this.screen.theme);
        this.bg = Background.getData("blue");

        //game logic
        this.players.push(new Player(this));
        this.startLoop();
        this.timerId = setInterval(function () {
            this.timer--;
        }.bind(this), 1000);
    }

    startLoop() {
        const loop = () => {
            // console.log("in loop")
            this.clearCanvas();
            this.draw();
            this.update();
            this.stageControl();
            if (this.isGameOver) {
                console.log(this);
                window.cancelAnimationFrame(animationFrameID);
            } else {
                window.requestAnimationFrame(loop);
            }
        }
        const animationFrameID = window.requestAnimationFrame(loop);
    }

    update() {

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

        this.players.forEach(function (player) {
            player.update();
            player.draw();
            player.checkCollisions();
        });

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

        this.stageControl();
        this.updateInfo(this.players[0]);
    }

    draw() {
        console.log(this.backgroundY)
        const backgroundImage = new Image();
        backgroundImage.src = this.bg.bg;
        this.backgroundY = (this.backgroundY >= 0) ? this.backgroundY - 0.8 : this.bg.height;
        // console.log(this.backgroundY)

        const starsImage = new Image();
        starsImage.src = this.bg.stars;
        this.stars = (this.stars >= 0) ? this.stars - 1.5 : this.bg.height + this.screen.canvasHeight;
        // console.log(this.stars)

        const planetsImage = new Image();
        planetsImage.src = this.bg.planets;
        this.planets = (this.planets >= 0) ? this.planets - 2 : this.bg.height + this.screen.canvasHeight;
        // console.log(this.planets)

        const meteorsImage = new Image();
        meteorsImage.src = this.bg.meteors;
        this.meteors = (this.meteors >= 0) ? this.meteors - 1 : this.bg.height + this.screen.canvasHeight;
        // console.log(this.meteors)

        this.ctx.drawImage(backgroundImage, 0, this.backgroundY - this.screen.canvasHeight, this.backgroundX, this.screen.canvasHeight, 0, 0, this.screen.canvasWidth, this.screen.canvasHeight);
        this.ctx.drawImage(starsImage, 0, this.stars - this.screen.canvasHeight, this.backgroundX, this.screen.canvasHeight, 0, 0, this.screen.canvasWidth, this.screen.canvasHeight);
        this.ctx.drawImage(planetsImage, 0, this.planets - this.screen.canvasHeight, this.backgroundX, this.screen.canvasHeight, 0, 0, this.screen.canvasWidth, this.screen.canvasHeight);
        this.ctx.drawImage(meteorsImage, 0, this.meteors - this.screen.canvasHeight, this.backgroundX, this.screen.canvasHeight, 0, 0, this.screen.canvasWidth, this.screen.canvasHeight);

    }

    updateInfo(player) {
        if (player !== undefined) {
            let heart = new Image();
            heart.src = "./img/Items/heart.png"; //200 x 185 pixels

            this.ctx.fillStyle = "black";
            this.ctx.font = "24px Orbitron";
            this.ctx.fillStyle = "yellow";
            this.ctx.fillText(this.time(this.timer), (this.screen.canvasWidth / 2) - 50, 30);
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

    stageControl() { //this.stageBoss | this.stage = x;
        if (this.timer <= 140 && this.timer > 120) {
            this.enemyShip = EnemyShip.getData("ufo");
            this.generateEnemies()
        }
        if (this.timer < 120 && this.timer > 100 && !this.stageBoss) {
            this.enemyShip = EnemyShip.getData("ufoBoss");
            this.stageBoss = true;
            this.generateEnemies(true);
        }
        if (this.timer < 100 && this.timer > 80) {
            this.stageBoss = false;
            this.enemyShip = EnemyShip.getData("alien");
            this.generateEnemies()
        }
        if (this.timer < 80 && this.timer > 60 && !this.stageBoss) {
            this.enemyShip = EnemyShip.getData("alienBoss");
            this.stageBoss = true;
            this.generateEnemies(true);
        }
        if (this.timer < 60 && this.timer > 40) {
            this.stageBoss = false;
            this.enemyShip = EnemyShip.getData("pirate");
            this.generateEnemies()
        }
        if (this.timer < 40 && this.timer > 0 && !this.stageBoss) {
            this.enemyShip = EnemyShip.getData("pirateBoss");
            this.stageBoss = true;
            this.generateEnemies(true);
        }

    }

    generateEnemies(byPass) {
        if (!byPass) { //sin parametro, enemigos random
            if (Math.random() * 100 > this.enemySpawnProb && this.enemies.length < this.maxEnemies) {
                let random = Math.floor(Math.random() * this.enemyShip.length);
                let randomTheme = this.enemyShip[random];
                this.enemies.push(new Enemy(this, randomTheme));
            }
        } else { //con True, el boss correspondiente con el Theme
            let random = Math.floor(Math.random() * this.enemyShip.length);
            let randomTheme = this.enemyShip[random];
            console.log(this.enemyShip)
            this.enemies.push(new Enemy(this, randomTheme));
        }
    }

    time(timer) { //122 seconds return 2:02
        let minutes = timer / 60;
        let seconds = timer % 60;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return Math.floor(minutes) + ":" + seconds;
    }

}

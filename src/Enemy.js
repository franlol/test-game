'use strict'

class Enemy extends Character {

    constructor(game, theme) {
        super(game);
        this.canvas = game.canvas;
        this.ctx = game.ctx;

        this.theme = theme;

        this.health = this.theme.health;
        this.direction = Math.floor((Math.random() * 1) - 0.5) ? -1 : 1;         //random left or right
        this.turnSpeed = 0.1;
        this.sizeX = this.theme.sizeX;
        this.sizeY = this.theme.sizeY;
        this.x = this.generateX();
        this.y = -this.sizeY;
        this.speedY = this.theme.speedY;

        this.outOfCanvas = false;
        this.scorePoints = this.theme.score;
    }

    generateX() {
        let x = Math.random() * (this.canvas.width - this.sizeX) > 0 ? (Math.random() * this.canvas.width) - this.sizeX : 10;

        return x;
    }

    move() {
        if (this.direction < 0) { //left
            this.x += -this.turnSpeed;
        } else {                  //right
            this.x += this.turnSpeed;
        }
    }

    update() {
        this.y += this.speedY;
        this.move();
        if (this.y - (this.sizeY / 2) > this.canvas.height) {
            this.outOfCanvas = true;
        }
    }

    shoot() {
        if ((Math.random() * 100 > this.game.enemyShootProb) && (this.y < this.canvas.height - 250)) {
            const bullets = this.theme.bullets;
            bullets.forEach(function (bullet) {
                this.game.enemyBullets.push(new EnemyBullet(this, bullet));
            }.bind(this));
        }
    }

    draw() {
        //Health Bar
        // let percent = (this.sizeX * this.health) / 100;
        // currentHealth * 100 / maxHealth;
        let percent = (this.health / this.theme.health) * this.sizeX;

        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x - (this.sizeX / 2) + 3, this.y - (this.sizeY / 2) - 12, percent - 6, 6);
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.x - (this.sizeX / 2) + 3, this.y - (this.sizeY / 2) - 12, this.sizeX - 6, 6);
        this.ctx.fillStyle = "black";

        const shipImg = new Image();
        shipImg.src = this.theme.path;

        let cutFromX = this.theme.cutFromX,
            cutFromY = this.theme.cutFromY,
            cutWidth = this.theme.cutWidth,
            cutHeight = this.theme.cutHeight,
            canvasStartX = this.x - (this.sizeX / 2),
            canvasStartY = this.y - (this.sizeY / 2),
            canvasWidth = this.sizeX,
            canvasHeight = this.sizeY;


        this.ctx.drawImage(shipImg,
            cutFromX,
            cutFromY,
            cutWidth,
            cutHeight,
            canvasStartX,
            canvasStartY,
            canvasWidth,
            canvasHeight
        );

        // let backgroundImage = new Image();
        // backgroundImage.src = "./img/Enemy/test.png";
        // // 1401 x 1449
        // let cutFromX = 0,
        //     cutFromY = 0,
        //     cutWidth = 1401,
        //     cutHeight = 1449,
        //     canvasStartX = this.x - (this.sizeX / 2),
        //     canvasStartY = this.y - (this.sizeY / 2),
        //     canvasWidth = this.sizeX,
        //     canvasHeight = this.sizeY;

        // this.ctx.drawImage(backgroundImage,
        //     cutFromX,
        //     cutFromY,
        //     cutWidth,
        //     cutHeight,
        //     canvasStartX,
        //     canvasStartY,
        //     canvasWidth,
        //     canvasHeight
        // );
    }

    checkCollisions() { //Wall collisions && change direction
        if (this.x + (this.sizeX / 2) >= this.canvas.width) {
            this.x = this.canvas.width - this.sizeX - 1;
            this.direction = -1;
        }
        if (this.x - (this.sizeX / 2) <= 0) {
            this.x = 1 + (this.sizeX / 2);
            this.direction = 1;
        }
    }

    getDamage(damage) {
        this.health = (this.health - damage <= 0) ? 0 : this.health - damage;
        if (this.health <= 0) {
            this.outOfCanvas = true; //Cuando un enemigo muere, hago como si estuviera fuera del canvas para eliminarlo.
            this.game.explosions.push(new Explosion(this));
        }
    }


}

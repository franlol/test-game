'use strict'

class Enemy extends Character {

    constructor(canvas, game) {
        super(canvas, game);
        this.direction = Math.floor((Math.random() * 1) - 0.5) ? -1 : 1;         //random left or right
        this.turnSpeed = 0.1;
        this.sizeX = 60;
        this.sizeY = 60;
        this.x = this.generateX();
        this.y = -this.sizeY;
        this.outOfCanvas = false;
        // this.canvas = canvas;                            //Super
        // this.ctx = this.canvas.getContext("2d");         //Super
        // this.lives = 3;                                  //Super
        // this.game = game;                                //Super
    }

    generateX() {
        let x = Math.random() * (this.canvas.width - this.sizeX) > 0 ? (Math.random() * this.canvas.width) - this.sizeX : 10;

        return x;
    }

    update() {
        this.y += 2;
        this.move();
        if (this.y > this.canvas.height) {
            this.outOfCanvas = true;
        }
    }

    move() {
        if (this.direction < 0) { //left
            this.x += -this.turnSpeed;
        } else {                  //right
            this.x += this.turnSpeed;
        }
    }

    //@override
    checkCollisions() { //Wall collisions && change direction
        if (this.x + (this.sizeX / 2) >= this.canvas.width) {
            // console.log("out")
            this.x = this.canvas.width - this.sizeX - 1;
            this.direction = -1;
        }
        if (this.x - (this.sizeX / 2) <= 0) {
            this.x = 1 + (this.sizeX / 2);
            this.direction = 1;
        }
    }

    shoot() {
        if ((Math.random() * 100 > this.game.enemyShootProb) && (this.y < this.canvas.height - 250)) {
            console.log("SHOT AT "+this.y)
            this.game.enemyBullets.push(new EnemyBullet(this.canvas, this));
        }
    }

    draw() {
        this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);

        let backgroundImage = new Image();
        backgroundImage.src = "./img/Enemy/test.png";
        // 1401 x 1449
        let cutFromX = 0,
            cutFromY = 0,
            cutWidth = 1401,
            cutHeight = 1449,
            canvasStartX = this.x - (this.sizeX / 2),
            canvasStartY = this.y - (this.sizeY / 2),
            canvasWidth = this.sizeX,
            canvasHeight = this.sizeY;

        this.ctx.drawImage(backgroundImage,
            cutFromX,
            cutFromY,
            cutWidth,
            cutHeight,
            canvasStartX,
            canvasStartY,
            canvasWidth,
            canvasHeight
        );

    }



}

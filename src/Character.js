'use strict'

class Character {

    constructor(canvas, game) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.direction = 0;
        this.sizeX = 100;
        this.sizeY = 100;
        this.lives = 3;
        this.game = game;

        this.x = (canvas.width / 2);
        this.y = canvas.height - 40;
    }//1166 1271

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        // var playerImage = new Image();
        // playerImage.src = "./img/Ship/blue-evo-1.png";
        // this.ctx.drawImage(playerImage, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY)

        var playerImage = new Image();
        playerImage.src = "./img/NAVE.png";
        this.ctx.drawImage(playerImage, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY)

        // var spriteWidth = 3842,
        //     spriteHeight = 2892,
        //     pixelsLeft = 315,
        //     pixelsTop = 79,

        //     // Where are we going to draw
        //     // the sprite on the canvas
        //     canvasPosX = 20,
        //     canvasPosY = 20,
        //     spriteWidth = 60,
        //     spriteHeight = 60;
            

        // this.ctx.drawImage(playerImage,
        //     pixelsLeft,
        //     pixelsTop,
        //     spriteWidth,
        //     spriteHeight,
        //     canvasPosX,
        //     canvasPosY,
        //     spriteWidth,
        //     spriteHeight
        // );
    }

    update() {
        this.x = this.x + (this.speed * this.direction);
    }

    checkCollisions() { //Wall collisions
        if (this.x + this.sizeX >= this.canvas.width) {
            console.log("out")
            this.x = this.canvas.width - this.sizeX - 1;
        }
        if (this.x <= 0) {
            this.x = 1;
        }
    }

    shoot() {
        this.game.bullets.push(new Bullet(this.canvas, this));
    }

    receiveDamage() {
        //
    }

    loseLife() {
        this.lives--;
        if (this.lives < 1) {
            this.game.gameOver();
            console.log("GAME OVAH!: " + this.lives)
        } else {
            console.log("LIVE--: " + this.lives)
            this.game.screen.gameUpdateTitle(this.lives);
        }
    }

    die() {
        //
    }

}
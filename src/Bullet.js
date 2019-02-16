'use strict'

class Bullet {

    constructor(canvas, player) {
        this.x = player.x;
        this.y = player.y;
        this.sizeX = 10;
        this.sizeY = 24;

        this.strenght = 5;
        this.velocity = 8;
        this.outOfCanvas = false;
        this.inCollision = false;

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.player = player;
    }

    draw() {
        this.ctx.fillRect(this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);

        var playerImage = new Image();
        playerImage.src = "./img/Effects/Bullet/BlueSpin__000.png";
        this.ctx.drawImage(playerImage, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY)
    }

    update() {
        this.y -= this.velocity;
        if (this.y - (this.sizeY / 2) <= 0) {
            this.outOfCanvas = true;
        }
    }

    checkCollisions() {
        let enemies = this.player.game.enemies;
        enemies.forEach(function (enemy) {
            let conditionIn1 = enemy.x - (enemy.sizeX / 2) < this.x - (this.sizeX / 2);
            let conditionIn2 = enemy.x + (enemy.sizeX / 2) > this.x + (this.sizeX / 2);
            let conditionIn3 = enemy.y - (enemy.sizeY / 2) < this.y - (this.sizeY / 2);
            let conditionIn4 = enemy.y + (enemy.sizeY / 2) > this.y + (this.sizeY / 2);

            // let conditionRight1 = enemy.x + (enemy.sizeX / 2) < this.x - (this.sizeX / 2);
            // let conditionRight2 = enemy.y + (enemy.sizeY / 2) < this.y + (this.sizeY / 2);
            // let conditionRight3 = enemy.y + (enemy.sizeY / 2) < this.y + (this.sizeY / 2);
            // let conditionRight4 = enemy.y + (enemy.sizeY / 2) > this.y + (this.sizeY / 2);

            if ((conditionIn1 && conditionIn2 && conditionIn3 && conditionIn4)) {
                this.inCollision = true;
                enemies.splice(enemies.indexOf(enemy), 1);
            }

        }.bind(this));
    }

    kill() {
        console.log("rofl")
        let backgroundImage = new Image();
        backgroundImage.src = "./img/Effects/Explosion/Explo__000.png";

        let cutFromX = 0,
            cutFromY = 0,
            cutWidth = 394,
            cutHeight = 359,
            canvasStartX = this.x - (this.sizeX / 2),
            canvasStartY = this.y - (this.sizeY / 2),
            canvasWidth = 100,
            canvasHeight = 100;

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
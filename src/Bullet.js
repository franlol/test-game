'use strict'

class Bullet {

    constructor(player, stats) {
        // x: 0,   //from player x
        // y: -40, //from player y
        // sizeX: 10,
        // sizeY: 24,
        // strength: 40,
        // velocity: 8,
        // path: bulletPath + "BlueSpin__000.png"

        this.x = player.x + stats.x;
        this.y = player.y + stats.y;
        this.sizeX = stats.sizeX;
        this.sizeY = stats.sizeY;
        this.strength = stats.strength;
        this.velocityX = stats.velocityX;
        this.velocityY = stats.velocityY;
        this.path = stats.path;

        this.outOfCanvas = false;
        this.inCollision = false;

        this.canvas = player.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player = player;
    }

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        var playerImage = new Image();
        playerImage.src = this.path;
        this.ctx.drawImage(playerImage, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);

    }

    update() {
        this.y -= this.velocityY;
        this.x += this.velocityX;
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

            if ((conditionIn1 && conditionIn2 && conditionIn3 && conditionIn4)) {
                this.inCollision = true;
                enemy.getDamage(this.strength);
                if (enemy.health <= 0) {
                    this.player.score += enemy.scorePoints;
                    enemies.splice(enemies.indexOf(enemy), 1);
                }
            }

        }.bind(this));
    }

    kill() {
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
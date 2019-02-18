'use strict'

class EnemyBullet extends Bullet {

    constructor(player, theme) {
        super(player, theme);

        this.velocity = player.game.enemyBulletsSpeed;
        this.theme = theme;
        this.strenght = theme.strength;

        // this.sizeX = theme.sizeX;                    //SUPER
        // this.sizeY = theme.sizeY;                    //SUPER
        // this.strength = theme.strength;              //SUPER
        // this.velocityX = theme.velocityX;            //SUPER
        // this.velocityY = theme.velocityY;            //SUPER
        // this.path = theme.path;                      //SUPER

        // this.outOfCanvas = false;                    //SUPER
        // this.inCollision = false;                    //SUPER

        // this.canvas = player.canvas;                 //SUPER
        // this.ctx = this.canvas.getContext("2d");     //SUPER
        // this.player = player;                        //SUPER
    }

    draw() {
        const img = new Image();
        img.src = this.theme.path;
        this.ctx.drawImage(img, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY)
    }

    update() {
        this.y += this.player.game.enemyBulletsSpeed;
        if (this.y - this.sizeY >= this.canvas.height) {
            this.outOfCanvas = true;
        }
    }

    checkCollisions() {
        this.player.game.players.forEach(function (player) {
            let conditionIn1 = player.x - (player.sizeX / 2) < this.x - (this.sizeX / 2);
            let conditionIn2 = player.x + (player.sizeX / 2) > this.x + (this.sizeX / 2);
            let conditionIn3 = player.y - (player.sizeY / 2) < this.y - (this.sizeY / 2);
            let conditionIn4 = player.y + (player.sizeY / 2) > this.y + (this.sizeY / 2);

            if (conditionIn1 && conditionIn2 && conditionIn3 && conditionIn4) {
                this.inCollision = true;
                player.getDamage(this.strenght);
            }

        }.bind(this));
    }

}
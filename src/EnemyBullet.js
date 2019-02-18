'use strict'

class EnemyBullet extends Bullet {

    constructor(player) {
        super(player);

        this.strenght = 40;
        this.velocity = player.game.enemyBulletsSpeed;
        // this.x = player.x;                   //SUPER
        // this.y = player.y;                   //SUPER
        // this.sizeX = 8;                      //SUPER
        // this.sizeY = 10;                     //SUPER
        // this.velocity = 8;                   //SUPER
        // this.outOfCanvas = false;            //SUPER
        // this.inCollision = false;            //SUPER

        // this.canvas = canvas;                //SUPER
        // this.ctx = canvas.getContext("2d");  //SUPER
        // this.player = player;                //SUPER
    }

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);

        var playerImage = new Image();
        playerImage.src = "./img/Effects/Bullet/OrangeSpin__000.png";
        this.ctx.drawImage(playerImage, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY)
    }

    update() {
        // console.log(this.player.game.enemyBulletsSpeed)
        this.y += this.player.game.enemyBulletsSpeed;
        if (this.y - this.sizeY >= this.canvas.height) {
            this.outOfCanvas = true;
        }
        // console.log(this.player.game.enemyBullets.length);
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
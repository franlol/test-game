'use strict'

class EnemyBullet extends Bullet {

    constructor(canvas, player) {
        super(canvas, player);
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

    update() {
        // console.log(this.player.game.enemyBulletsSpeed)
        this.y += this.player.game.enemyBulletsSpeed;
        if (this.y - this.sizeY >= this.canvas.height) {
            this.outOfCanvas = true;
        }
        // console.log(this.player.game.enemyBullets.length);
    }

    checkCollisions() {
        let players = this.player.game.players;
        players.forEach(function (player) {
            let conditionIn1 = player.x - (player.sizeX / 2) < this.x - (this.sizeX / 2);
            let conditionIn2 = player.x + (player.sizeX / 2) > this.x + (this.sizeX / 2);
            let conditionIn3 = player.y < this.y;
            let conditionIn4 = player.y + player.sizeY > this.y + this.sizeY;

            if (conditionIn1 && conditionIn2 && conditionIn3 && conditionIn4) {
                this.inCollision = true;
                // console.log(this.inCollision);
                player.loseLife();
            }

        }.bind(this));
    }

}
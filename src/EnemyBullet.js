'use strict'

class EnemyBullet extends Bullet {

    constructor(canvas, player) {
        super(canvas, player);
        // this.x = player.x;                   //SUPER
        // this.y = player.y;                   //SUPER
        // this.sizeX = 8;                      //SUPER
        // this.sizeY = 10;                     //SUPER
        // this.distance = 5;                   //SUPER
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
        this.inCollision = true;
    }
    
}
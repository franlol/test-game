'use strict'

class EnemyBullet extends Bullet {

    constructor(canvas, enemyPlayer) {
        super(canvas, enemyPlayer);
        // this.x = player.x;                   //SUPER
        // this.y = player.y;                   //SUPER
        // this.sizeX = 8;                      //SUPER
        // this.sizeY = 10;                     //SUPER
        // this.distance = 5;                   //SUPER
        // this.velocity = 8;                   //SUPER
        // this.outOfCanvas = false;            //SUPER

        // this.canvas = canvas;                //SUPER
        // this.ctx = canvas.getContext("2d");  //SUPER
        // this.player = player;                //SUPER
    }

    update() {
        // console.log(this)
        this.y += 8;
        if (this.y - this.sizeY >= this.canvas.height) {
            console.log("enemy bullet out")
            this.outOfCanvas = true;
        }
    }

}
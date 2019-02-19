class Explosion {

    constructor(player) { //el player muerto que ha generado la explosion. EZ.
        this.player = player;
        this.x = player.x;
        this.y = player.y;
        this.sizeX = player.sizeX / 1.3;
        this.sizeY = player.sizeX / 1.3;

        this.counter = 0;
        this.explosionFinished = false;
    }

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        let sprite = new Image();
        
        //timers
        let rank1 = 0;
        let sprite1 = "./img/Effects/Explosion/explosion_1.png";

        let rank2 = 5;
        let sprite2 = "./img/Effects/Explosion/explosion_2.png";

        let rank3 = 10;
        let sprite3 = "./img/Effects/Explosion/explosion_3.png";

        let rank4 = 15;
        let sprite4 = "./img/Effects/Explosion/explosion_4.png";

        let rank5 = 20;
        let sprite5 = "./img/Effects/Explosion/explosion_5.png";

        let rank6 = 25;
        let sprite6 = "./img/Effects/Explosion/explosion_6.png";

        let rank7 = 30;
        let sprite7 = "./img/Effects/Explosion/explosion_7.png";

        let rank8 = 35;
        let sprite8 = "./img/Effects/Explosion/explosion_8.png";

        let rank9 = 40;
        let sprite9 = "./img/Effects/Explosion/explosion_9.png";

        let rank10 = 45;
        let sprite10 = "./img/Effects/Explosion/explosion_10.png";

        let rank11 = 50
        let sprite11 = "./img/Effects/Explosion/explosion_11.png";

        let rank12 = 55;

        if (this.counter >= rank1 && this.counter < rank2) {
            sprite.src = sprite1;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank2 && this.counter < rank3) {
            sprite.src = sprite2;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank3 && this.counter < rank4) {
            sprite.src = sprite3;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank4 && this.counter < rank5) {
            sprite.src = sprite4;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank5 && this.counter < rank6) {
            sprite.src = sprite5;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank6 && this.counter < rank7) {
            sprite.src = sprite6;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank7 && this.counter < rank8) {
            sprite.src = sprite7;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank8 && this.counter < rank9) {
            sprite.src = sprite8;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank9 && this.counter < rank10) {
            sprite.src = sprite9;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank10 && this.counter < rank11) {
            sprite.src = sprite10;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= rank11 && this.counter < rank12) {
            sprite.src = sprite11;
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else {
            this.explosionFinished = true;
        }
        this.counter++;
    }

}
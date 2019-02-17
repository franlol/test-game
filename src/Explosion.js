class Explosion {

    constructor(player) { //el player muerto que ha generado la explosion. EZ.
        this.player = player;
        this.x = player.x;
        this.y = player.y;
        this.sizeX = player.sizeX * 1.5;
        this.sizeY = player.sizeY * 1.5;

        this.counter = 0;
        this.explosionFinished = false;
    }

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        let sprite = new Image();
        if (this.counter >= 0 && this.counter < 4) {
            sprite.src = "./img/Effects/Explosion/explosion_1.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 4 && this.counter < 8) {
            sprite.src = "./img/Effects/Explosion/explosion_2.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        }
        else if (this.counter >= 8 && this.counter < 12) {
            sprite.src = "./img/Effects/Explosion/explosion_3.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        }
        else if (this.counter >= 12 && this.counter < 16) {
            sprite.src = "./img/Effects/Explosion/explosion_4.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 16 && this.counter < 20) {
            sprite.src = "./img/Effects/Explosion/explosion_5.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 20 && this.counter < 24) {
            sprite.src = "./img/Effects/Explosion/explosion_6.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 24 && this.counter < 28) {
            sprite.src = "./img/Effects/Explosion/explosion_7.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 28 && this.counter < 32) {
            sprite.src = "./img/Effects/Explosion/explosion_8.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 32 && this.counter < 36) {
            sprite.src = "./img/Effects/Explosion/explosion_9.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else if (this.counter >= 36 && this.counter < 40) {
            sprite.src = "./img/Effects/Explosion/explosion_10.png";
            this.player.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        } else {
            this.explosionFinished = true;
        }
        this.counter++;
    }

}
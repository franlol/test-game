class Explosion {

    constructor(bullet) {
        this.bullet = bullet;
        this.x = bullet.x;
        this.y = bullet.y;
        this.sizeX = 20;
        this.sizeY = 20;

        this.counter = 0;
        this.explosionFinished = false;
    }

    draw() {
        console.log(Object.getPrototypeOf(this.bullet).name)
        let sprite = new Image();
        if (this.counter >= 0 && this.counter < 3) {
            sprite.src = "./img/Effects/Explosion/explosion_1.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else if (this.counter >= 3 && this.counter < 6) {
            sprite.src = "./img/Effects/Explosion/explosion_2.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 6 && this.counter < 9) {
            sprite.src = "./img/Effects/Explosion/explosion_3.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 9 && this.counter < 12) {
            sprite.src = "./img/Effects/Explosion/explosion_4.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 12 && this.counter < 15) {
            sprite.src = "./img/Effects/Explosion/explosion_5.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 15 && this.counter < 18) {
            sprite.src = "./img/Effects/Explosion/explosion_6.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else if (this.counter >= 15 && this.counter < 18) {
            sprite.src = "./img/Effects/Explosion/explosion_7.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else if (this.counter >= 15 && this.counter < 18) {
            sprite.src = "./img/Effects/Explosion/explosion_8.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else if (this.counter >= 15 && this.counter < 18) {
            sprite.src = "./img/Effects/Explosion/explosion_9.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else if (this.counter >= 15 && this.counter < 18) {
            sprite.src = "./img/Effects/Explosion/explosion_10.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else {
            this.hitFinished = true;
        }
        this.counter++;
    }

}
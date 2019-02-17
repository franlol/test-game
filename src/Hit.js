class Hit {

    constructor(bullet) {
        this.bullet = bullet;
        this.x = bullet.x;
        this.y = bullet.y;
        this.sizeX = 40;
        this.sizeY = 40;

        this.counter = 0;
        this.hitFinished = false;
    }

    draw() {
        let sprite = new Image();
        if (this.counter >= 0 && this.counter < 3) {
            sprite.src = (this.bullet instanceof EnemyBullet) ? "./img/Effects/Explosion/orange_explosion_1.png" : "./img/Effects/Explosion/blue_explosion_1.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else if (this.counter >= 3 && this.counter < 6) {
            sprite.src = (this.bullet instanceof EnemyBullet) ? "./img/Effects/Explosion/orange_explosion_2.png" : "./img/Effects/Explosion/blue_explosion_2.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 6 && this.counter < 9) {
            sprite.src = (this.bullet instanceof EnemyBullet) ? "./img/Effects/Explosion/orange_explosion_3.png" : "./img/Effects/Explosion/blue_explosion_3.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 9 && this.counter < 12) {
            sprite.src = (this.bullet instanceof EnemyBullet) ? "./img/Effects/Explosion/orange_explosion_4.png" : "./img/Effects/Explosion/blue_explosion_4.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 12 && this.counter < 15) {
            sprite.src = (this.bullet instanceof EnemyBullet) ? "./img/Effects/Explosion/orange_explosion_5.png" : "./img/Effects/Explosion/blue_explosion_5.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        }
        else if (this.counter >= 15 && this.counter < 18) {
            sprite.src = (this.bullet instanceof EnemyBullet) ? "./img/Effects/Explosion/orange_explosion_6.png" : "./img/Effects/Explosion/blue_explosion_6.png";
            this.bullet.ctx.drawImage(sprite, this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
        } else {
            this.hitFinished = true;
        }
        this.counter++;
    }

}
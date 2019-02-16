class Hit {

    constructor(bullet) {
        this.bullet = bullet;
        this.x = bullet.x;
        this.y = bullet.y;
        this.sizeX = 40;
        this.sizeY = 40;
    }

    draw() {
        console.log(this.x + " " + this.y)
        this.bullet.ctx.fillRect(this.x - (this.sizeX / 2), this.y, this.sizeX, this.sizeY);
    }

}
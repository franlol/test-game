'use strict'

class Character {

    constructor(game) {
        this.canvas = game.canvas;
        this.ctx = game.canvas.getContext("2d");
        this.game = game;

        //stats
        this.lifes = game.playerLifes;
        this.score = 0;
        this.health = 100;
        this.isInmune = false;
        this.inmuneBlink = true;
        this.direction = 0;

        //theme
        this.theme = this.game.theme;
        this.evo = 0;
        this.x = (game.canvas.width / 2);
        this.y = game.canvas.height - this.game.theme[0].evo[this.evo].yOffset;
        this.sizeX = this.game.theme[0].evo[this.evo].sizeX;
        this.sizeY = this.game.theme[0].evo[this.evo].sizeY;
    }

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        console.log(this.theme)
        const shipImg = new Image();
        shipImg.src = this.game.theme[0].evo[this.evo].path;

        let cutFromX = this.game.theme[0].evo[this.evo].cutFromX,
            cutFromY = this.game.theme[0].evo[this.evo].cutFromY,
            cutWidth = this.game.theme[0].evo[this.evo].cutWidth,
            cutHeight = this.game.theme[0].evo[this.evo].cutHeight,
            canvasStartX = this.x - (this.sizeX / 2),
            canvasStartY = this.y - (this.sizeY / 2),
            canvasWidth = this.sizeX,
            canvasHeight = this.sizeY;

        if (this.isInmune && this.inmuneBlink) {
            this.inmuneBlink = false;
        } else {
            this.inmuneBlink = true;
        }
        if (this.inmuneBlink) {
            this.ctx.drawImage(shipImg,
                cutFromX,
                cutFromY,
                cutWidth,
                cutHeight,
                canvasStartX,
                canvasStartY,
                canvasWidth,
                canvasHeight
            );
        }

        // draw() {
        //     // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);
        //     // this.ctx.fillRect(this.x , this.y, 20, 20);

        //     let backgroundImage = new Image();
        //     backgroundImage.src = "./img/Player/blue-evo-0.png"; //387 x 354 pixels
        //     // backgroundImage.src = "./img/player/red-evo-2.png"; //x619 y486
        //     // backgroundImage.src = "./img/player.png";

        //     let cutFromX = 0,
        //         cutFromY = 0,
        //         cutWidth = 387,
        //         cutHeight = 354,
        //         canvasStartX = this.x - (this.sizeX / 2),
        //         canvasStartY = this.y - (this.sizeY / 2),
        //         canvasWidth = this.sizeX,
        //         canvasHeight = this.sizeY;

        //     if (this.isInmune && this.inmuneBlink) {
        //         this.inmuneBlink = false;
        //     } else {
        //         this.inmuneBlink = true;
        //     }
        //     if (this.inmuneBlink) {
        //         this.ctx.drawImage(backgroundImage,
        //             cutFromX,
        //             cutFromY,
        //             cutWidth,
        //             cutHeight,
        //             canvasStartX,
        //             canvasStartY,
        //             canvasWidth,
        //             canvasHeight
        //         );
        //     }
        //regla de 3: Si mi vida es el 100% de la barra, una vida concreta es.... el x% de la barra
        let percent = (this.sizeX * this.health) / 100;

        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.x - (this.sizeX / 2), this.y + (this.sizeY / 2) + 10, percent, 10);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.x - (this.sizeX / 2), this.y + (this.sizeY / 2) + 10, this.sizeX, 10);
        this.ctx.fillStyle = "black";
    }

    update() {
        this.x = this.x + (this.speed * this.direction);
    }

    checkCollisions() { //Wall collisions
        if (this.x + this.sizeX / 2 >= this.canvas.width) {
            this.x = this.canvas.width - (this.sizeX / 2) - 1;
        }
        if (this.x - (this.sizeX / 2) <= 0) {
            this.x = (this.sizeX / 2) + 1;
        }
    }

    shoot() {
        this.game.bullets.push(new Bullet(this.canvas, this));
    }

    inmune() {
        this.isInmune = true;
        this.inmuneBlink = true;
        setTimeout(() => {
            this.isInmune = false;
        }, 2000);
    }

    getDamage(damage) {
        if (!this.isInmune) {
            this.health = (this.health - damage <= 0) ? 0 : this.health - damage;
            if (this.health <= 0) {
                this.loseLife();
            }
        }
    }

    loseLife() {
        this.lifes--;

        if (this.lifes < 1) {
            this.game.explosions.push(new Explosion(this));
            this.game.gameOver(this);
        } else {
            this.inmune();
        }

        this.health = 100;
        // this.game.screen.gameUpdateTitle(this.lifes);
    }



}
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
        this.y = this.game.canvas.height - this.theme[this.evo].evo[0].yOffset;
        this.sizeX = this.theme[this.evo].evo[0].sizeX;
        this.sizeY = this.theme[this.evo].evo[0].sizeY;
    }

    draw() {
        // this.ctx.fillRect(this.x - (this.sizeX / 2), this.y - (this.sizeY / 2), this.sizeX, this.sizeY);

        const shipImg = new Image();
        shipImg.src = this.theme[this.evo].evo[0].path;

        let cutFromX = this.theme[this.evo].evo[0].cutFromX,
            cutFromY = this.theme[this.evo].evo[0].cutFromY,
            cutWidth = this.theme[this.evo].evo[0].cutWidth,
            cutHeight = this.theme[this.evo].evo[0].cutHeight,
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
        // this.game.bullets.push(new Bullet(this));
        let bullets = this.theme[this.evo].evo[0].bullets;
        for (let i = 0; i < bullets.length; i++) {
            this.game.bullets.push(new Bullet(this, bullets[i])); //le paso todas las bullets que tiene el tema actual con sus props
        }
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
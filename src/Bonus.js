class Bonus {

    constructor(game) {
        this.game = game;
        this.canvas = game.canvas;
        this.ctx = game.ctx;

        this.y = -40;
        this.sizeX = 50;
        this.sizeY = 50;

        this.outOfCanvas = false;
        this.inCollision = false;

        this.healthItemSrc = "./img/Items/HP_Bonus.png"; //300 x 300 pixels
        this.evoItemSrc = "./img/Items/Evolution_Bonus.png";

        this.imgSizeX = 300;
        this.imgSizeY = 300;

        this.x = this.generateX();
        this.item = this.newItem();
    }

    generateX() {
        return Math.random() * (this.canvas.width - this.sizeX) > 0 ? (Math.random() * this.canvas.width) - this.sizeX : generateX();
    }

    //YES, DO WHILE EXISTS!
    randomPos() {
        var pos;
        do {
            pos = Math.random() * this.game.screen.canvasWidth;
        } while (pos > (this.sizeX / 2) && pos < this.game.screen.canvasWidth - (this.sizeY / 2));

        this.x = pos;
    }

    newItem() {
        const rand = Math.floor(Math.random() * 2);
        if (rand == 1) {
            return "Health";
        } else {
            return "Evolution";
        }
    }

    checkCollisions() {
        let players = this.game.players;
        players.forEach(function (player) {
            let conditionIn1 = player.x - (player.sizeX / 2) < this.x - (this.sizeX / 2);
            let conditionIn2 = player.x + (player.sizeX / 2) > this.x + (this.sizeX / 2);
            let conditionIn3 = player.y - (player.sizeY / 2) < this.y - (this.sizeY / 2);
            let conditionIn4 = player.y + (player.sizeY / 2) > this.y + (this.sizeY / 2);

            if ((conditionIn1 && conditionIn2 && conditionIn3 && conditionIn4)) {
                this.inCollision = true;

                if (this.item === "Health") {
                    player.getLife();
                } else if (this.item === "Evolution") {
                    player.getEvo();
                }
                
            }

        }.bind(this));
    }

    draw() {
        var bonusImg = new Image();
        if (this.item == "Health") bonusImg.src = this.healthItemSrc;
        if (this.item == "Evolution") bonusImg.src = this.evoItemSrc;

        let cutFromX = 0,
            cutFromY = 0,
            cutWidth = this.imgSizeX,
            cutHeight = this.imgSizeY,
            canvasStartX = this.x - (this.sizeX / 2),
            canvasStartY = this.y - (this.sizeY / 2),
            canvasWidth = this.sizeX,
            canvasHeight = this.sizeY;

        this.ctx.drawImage(bonusImg,
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

    update() {
        this.y += 2;
        this.outOfCanvas = this.y - (this.sizeY / 2) > this.canvas.height;
    }


}
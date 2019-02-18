'use strict'

class Ship {

    static getData(theme) {
        const playerPath = "./img/Player/";
        const bulletPath = "./img/Effects/Bullet/"
        // let cutFromX = 0,
        // cutFromY = 0,
        // cutWidth = 387,
        // cutHeight = 354,
        // canvasStartX = this.x - (this.sizeX / 2),
        // canvasStartY = this.y - (this.sizeY / 2),
        // canvasWidth = this.sizeX,
        // canvasHeight = this.sizeY;


        switch (theme) {
            case "red":
                return [{
                    name: "red",
                    evo: [{
                        evo: 0,
                        path: playerPath + "red-evo-0.png", //348 x 377 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 348,
                        cutHeight: 377,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 120,
                        sizeY: 135,
                        yOffset: 90,
                        bulletOffset: [{
                            x: 0,
                            y: -40,
                            strength: 40
                        }]
                    },
                    {
                        evo: 1,
                        path: playerPath + "red-evo-1.png",
                        bulletOffset: [{
                            x: 0,
                            y: -40,
                            strength: 40
                        }]
                    },
                    {
                        evo: 2,
                        path: playerPath + "red-evo-2.png",
                        bulletOffset: [{
                            x: 0,
                            y: -40,
                            strength: 40
                        }]
                    },
                    {
                        evo: 3,
                        path: playerPath + "red-evo-3.png",
                        bulletOffset: [{
                            x: 0,
                            y: -40,
                            strength: 40
                        }]
                    }]
                }];
                break;
        }
    }

}
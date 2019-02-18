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
                        sizeX: 121,
                        sizeY: 135,
                        yOffset: 90,
                        bullets: [{
                            x: -54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        },
                        {
                            x: 54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        }]
                    }]
                },
                {
                    name: "red",
                    evo: [{
                        evo: 1,
                        path: playerPath + "red-evo-1.png", //383 x 331 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 383,
                        cutHeight: 331,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 121,
                        sizeY: 135,
                        yOffset: 90,
                        bullets: [{
                            x: -54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        },
                        {
                            x: 54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        }]
                    }]
                },
                {
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
                        sizeX: 121,
                        sizeY: 135,
                        yOffset: 90,
                        bullets: [{
                            x: -54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        },
                        {
                            x: 54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        }]
                    }]
                },
                {
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
                        sizeX: 121,
                        sizeY: 135,
                        yOffset: 90,
                        bullets: [{
                            x: -54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        },
                        {
                            x: 54,   //from player x
                            y: -10, //from player y
                            sizeX: 10,
                            sizeY: 24,
                            strength: 40,
                            velocity: 8,
                            path: bulletPath + "BlueSpin__000.png"
                        }]
                    }]
                }];
        }
    }

}


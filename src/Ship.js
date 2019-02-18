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
                    evo: [{//0
                        evo: 0,
                        path: playerPath + "red-evo-0.png", //348 x 377 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 348,
                        cutHeight: 377,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 121,
                        sizeY: 131,
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
                        }]//348 x 377 pixels
                    }]
                },
                {//1
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
                        sizeX: 156,
                        sizeY: 135,
                        yOffset: 90,
                        bullets: [{//60 x 131 pixels
                            x: -27,   //from player x
                            y: -80, //from player y
                            sizeX: 15,
                            sizeY: 40,
                            strength: 50,
                            velocity: 9,
                            path: bulletPath + "BlueBlast__001.png"
                        },
                        {//60 x 131 pixels
                            x: 27,   //from player x
                            y: -80, //from player y
                            sizeX: 15,
                            sizeY: 40,
                            strength: 50,
                            velocity: 9,
                            path: bulletPath + "BlueBlast__001.png"
                        }]
                    }]
                },
                {//2
                    name: "red",
                    evo: [{
                        evo: 2,
                        path: playerPath + "red-evo-3.png", //619 x 486 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 619,
                        cutHeight: 486,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 180,
                        sizeY: 141,
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
                {//3
                    name: "red",
                    evo: [{
                        evo: 3,
                        path: playerPath + "red-evo-0.png", //884 x 595 pixels
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


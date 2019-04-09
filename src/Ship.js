'use strict'

class Ship {

    static getData(theme) {

        //routes
        const playerPath = "./img/Player/";

        //spins
        const blueSpinImg = "./img/Effects/Bullet/BlueSpin__000.png";
        const spinDamage = 40;
        const spinSpeedX = 0;
        const spinSpeedY = 8;
        const spinSizeX = 10;
        const spinSizeY = 24;

        //blasts
        const blueBlastImg = "./img/Effects/Bullet/BlueBlast__001.png";
        const blastDamage = 60;
        const blastSpeedX = 0;
        const blastSpeedY = 8;
        const blastSizeX = 15;
        const blastSizeY = 40;

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
                        yOffset: 110,
                        bullets: [{
                            x: -54,   //from player x
                            y: -10, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 54,   //from player x
                            y: -10, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
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
                        yOffset: 110,
                        bullets: [{//60 x 131 pixels
                            x: -27,   //from player x
                            y: -85, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {//60 x 131 pixels
                            x: 27,   //from player x
                            y: -85, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                },
                {//2
                    name: "red",
                    evo: [{
                        evo: 2,
                        path: playerPath + "red-evo-2.png", //619 x 486 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 619,
                        cutHeight: 486,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 180,
                        sizeY: 141,
                        yOffset: 110,
                        bullets: [{
                            x: -68,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: -54,     //from player x
                            y: -40,     //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 54,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 68,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]
                    }]
                },
                {//3
                    name: "red",
                    evo: [{
                        evo: 3,
                        path: playerPath + "red-evo-3.png", //884 x 595 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 884,
                        cutHeight: 595,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 230,
                        sizeY: 185,
                        yOffset: 130,
                        bullets: [{
                            x: -48,   //from player x
                            y: -110, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -36,   //from player x
                            y: -110, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -2,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: 32,   //from player x
                            y: -110, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: 44,   //from player x
                            y: -110, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                }];
                break;


            case "green":
                return [{
                    name: "green",
                    evo: [{//0
                        evo: 0,
                        path: playerPath + "green-evo-0.png", //471 x 342 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 471,
                        cutHeight: 342,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 121,
                        sizeY: 131,
                        yOffset: 110,
                        bullets: [{
                            x: -6,   //from player x
                            y: -75, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 6,   //from player x
                            y: -75, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]//348 x 377 pixels
                    }]
                },
                {//1
                    name: "green",
                    evo: [{
                        evo: 1,
                        path: playerPath + "green-evo-1.png", //517 x 379 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 517,
                        cutHeight: 379,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 156,
                        sizeY: 135,
                        yOffset: 110,
                        bullets: [{//60 x 131 pixels
                            x: -28,   //from player x
                            y: -80, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {//60 x 131 pixels
                            x: 28,   //from player x
                            y: -80, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                },
                {//2
                    name: "green",
                    evo: [{
                        evo: 2,
                        path: playerPath + "green-evo-2.png", //554 x 496 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 554,
                        cutHeight: 496,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 180,
                        sizeY: 141,
                        yOffset: 110,
                        bullets: [{
                            x: -50,   //from player x
                            y: -30, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: -31,   //from player x
                            y: -85, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 32,   //from player x
                            y: -85, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 51,   //from player x
                            y: -30, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]
                    }]
                },
                {//3
                    name: "green",
                    evo: [{
                        evo: 3,
                        path: playerPath + "green-evo-3.png", //808 x 528 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 808,
                        cutHeight: 528,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        // sizeX: 250,
                        // sizeY: 224,
                        sizeX: 190,
                        sizeY: 150,
                        yOffset: 150,
                        bullets: [{
                            x: -61,   //from player x
                            y: -45, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -47,   //from player x
                            y: -45, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -14,   //from player x
                            y: -95, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 14,   //from player x
                            y: -95, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 45,   //from player x
                            y: -45, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: 59,   //from player x
                            y: -45, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                }];
                break;


            case "blue":
                return [{
                    name: "blue",
                    evo: [{//0
                        evo: 0,
                        path: playerPath + "blue-evo-0.png", //387 x 354 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 387,
                        cutHeight: 354,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 121,
                        sizeY: 131,
                        yOffset: 110,
                        bullets: [{
                            x: -19,   //from player x
                            y: -77, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 20,   //from player x
                            y: -77, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]//348 x 377 pixels
                    }]
                },
                {//1
                    name: "blue",
                    evo: [{
                        evo: 1,
                        path: playerPath + "blue-evo-1.png", //546 x 379 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 546,
                        cutHeight: 379,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 156,
                        sizeY: 135,
                        yOffset: 110,
                        bullets: [{//60 x 131 pixels
                            x: -22,   //from player x
                            y: -90, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {//60 x 131 pixels
                            x: 23,   //from player x
                            y: -90, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                },
                {//2
                    name: "blue",
                    evo: [{
                        evo: 2,
                        path: playerPath + "blue-evo-2.png", //677 x 469 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 677,
                        cutHeight: 469,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 180,
                        sizeY: 141,
                        yOffset: 110,
                        bullets: [{
                            x: -76,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: -62,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.4,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 62,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.4,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 76,   //from player x
                            y: -40, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]
                    }]
                },
                {//3
                    name: "blue",
                    evo: [{
                        evo: 3,
                        path: playerPath + "blue-evo-3.png", //925 x 477 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 925,
                        cutHeight: 477,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 230,
                        sizeY: 185,
                        yOffset: 130,
                        bullets: [{
                            x: -103,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -84,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY + 1,
                            path: blueBlastImg
                        },
                        {
                            x: -49,   //from player x
                            y: -120, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.3,
                            velocityY: spinSpeedY + 1.5,
                            path: blueSpinImg
                        },
                        {
                            x: 49,   //from player x
                            y: -120, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.3,
                            velocityY: spinSpeedY + 1.5,
                            path: blueSpinImg
                        },
                        {
                            x: 84,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY + 1,
                            path: blueBlastImg
                        },
                        {
                            x: 103,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                }];
                break;

            case "orange":
                return [{
                    name: "orange",
                    evo: [{//0
                        evo: 0,
                        path: playerPath + "orange-evo-0.png", //459 x 399 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 459,
                        cutHeight: 399,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 121,
                        sizeY: 131,
                        yOffset: 110,
                        bullets: [{
                            x: -13,   //from player x
                            y: -80, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 13,   //from player x
                            y: -80, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]//348 x 377 pixels
                    }]
                },
                {//1
                    name: "orange",
                    evo: [{
                        evo: 1,
                        path: playerPath + "orange-evo-1.png", //558 x 368 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 558,
                        cutHeight: 368,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 156,
                        sizeY: 135,
                        yOffset: 110,
                        bullets: [{//60 x 131 pixels
                            x: -7,   //from player x
                            y: -85, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {//60 x 131 pixels
                            x: 8,   //from player x
                            y: -85, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                },
                {//2
                    name: "orange",
                    evo: [{
                        evo: 2,
                        path: playerPath + "orange-evo-2.png", //450 x 382 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 450,
                        cutHeight: 382,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 180,
                        sizeY: 141,
                        yOffset: 110,
                        bullets: [{
                            x: -79,   //from player x
                            y: -26, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: -60,     //from player x
                            y: -30,     //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX + 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 60,   //from player x
                            y: -30, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX - 0.3,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 79,   //from player x
                            y: -30, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: spinDamage,
                            velocityX: spinSpeedX,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        }]
                    }]
                },
                {//3
                    name: "orange",
                    evo: [{
                        evo: 3,
                        path: playerPath + "orange-evo-3.png", //751 x 528 pixels
                        cutFromX: 0,
                        cutFromY: 0,
                        cutWidth: 751,
                        cutHeight: 528,
                        // canvasStartX = this.x - (this.sizeX / 2),
                        // canvasStartY = this.y - (this.sizeY / 2),
                        sizeX: 230,
                        sizeY: 185,
                        yOffset: 130,
                        bullets: [{
                            x: -68,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -46,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: -20,   //from player x
                            y: -100, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: blastDamage,
                            velocityX: spinSpeedX + 0.4,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 22,   //from player x
                            y: -100, //from player y
                            sizeX: spinSizeX,
                            sizeY: spinSizeY,
                            strength: blastDamage,
                            velocityX: spinSpeedX - 0.4,
                            velocityY: spinSpeedY,
                            path: blueSpinImg
                        },
                        {
                            x: 46,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        },
                        {
                            x: 68,   //from player x
                            y: -100, //from player y
                            sizeX: blastSizeX,
                            sizeY: blastSizeY,
                            strength: blastDamage,
                            velocityX: blastSpeedX,
                            velocityY: blastSpeedY,
                            path: blueBlastImg
                        }]
                    }]
                }];
                break;

        }
    }

}


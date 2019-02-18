class EnemyShip {


    static getData(theme) {

        //routes
        const enemyPath = "./img/Enemy/";

        //Exahaust
        const exhaust = enemyPath + "Ufo/Bullets/Exhaust_1_001.png";
        const exhaustDamage = 40;
        const exhaustSpeedX = 0;
        const exhaustSpeedY = 8;
        const exhaustSizeX = 50;
        const exhaustSizeY = 20;

        //Shot_02
        const shot = enemyPath + "Ufo/Bullets/Shot_002.png";
        const shotDamage = 50;
        const shotSpeedX = 0;
        const shotSpeedY = 8;
        const shotSizeX = 30;
        const shotSizeY = 30;

        switch (theme) {
            case "ufo":
                return [{
                    name: "ufo",
                    score: 50,
                    path: enemyPath + "Ufo/Ship_01.png", //592 x 726 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 592,
                    cutHeight: 726,
                    sizeX: 100,
                    sizeY: 123,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: exhaustSizeX,
                        sizeY: exhaustSizeY,
                        strength: exhaustDamage,
                        velocityX: exhaustSpeedX,
                        velocityY: exhaustSpeedY,
                        path: exhaust
                    }]
                },
                {
                    name: "ufo",
                    score: 50,
                    path: enemyPath + "Ufo/Ship_02.png", //470 x 1064 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 470,
                    cutHeight: 1064,
                    sizeX: 80,
                    sizeY: 181,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: shotSizeX,
                        sizeY: shotSizeY,
                        strength: shotDamage,
                        velocityX: shotSpeedX,
                        velocityY: shotSpeedY,
                        path: shot
                    }]
                },
                {
                    name: "ufo",
                    score: 50,
                    path: enemyPath + "Ufo/Ship_03.png", //662 x 984 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 662,
                    cutHeight: 984,
                    sizeX: 90,
                    sizeY: 134,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: exhaustSizeX,
                        sizeY: exhaustSizeY,
                        strength: exhaustDamage,
                        velocityX: exhaustSpeedX,
                        velocityY: exhaustSpeedY,
                        path: exhaust
                    }]
                },
                {
                    name: "ufo",
                    score: 50,
                    path: enemyPath + "Ufo/Ship_04.png", //630 x 890 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 630,
                    cutHeight: 890,
                    sizeX: 100,
                    sizeY: 141,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: exhaustSizeX,
                        sizeY: exhaustSizeY,
                        strength: exhaustDamage,
                        velocityX: exhaustSpeedX,
                        velocityY: exhaustSpeedY,
                        path: exhaust
                    }]
                },
                {
                    name: "ufo",
                    score: 50,
                    path: enemyPath + "Ufo/Ship_05.png", //1126 x 822 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1126,
                    cutHeight: 822,
                    sizeX: 100,
                    sizeY: 73,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: exhaustSizeX,
                        sizeY: exhaustSizeY,
                        strength: exhaustDamage,
                        velocityX: exhaustSpeedX,
                        velocityY: exhaustSpeedY,
                        path: exhaust
                    }]
                },
                {
                    name: "ufo",
                    score: 50,
                    path: enemyPath + "Ufo/Ship_06.png", //1646 x 888 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1646,
                    cutHeight: 888,
                    sizeX: 100,
                    sizeY: 54,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: exhaustSizeX,
                        sizeY: exhaustSizeY,
                        strength: exhaustDamage,
                        velocityX: exhaustSpeedX,
                        velocityY: exhaustSpeedY,
                        path: exhaust
                    }]
                }]
        }
    }
}
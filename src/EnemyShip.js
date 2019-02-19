class EnemyShip {


    static getData(theme) {

        //routes
        const enemyPath = "./img/Enemy/";

        //Ufo Exahaust
        const ufoExhaust = enemyPath + "Ufo/Bullets/Exhaust_1_001.png";
        const ufoExhaustDamage = 40;
        const ufoExhaustSpeedX = 0;
        const ufoExhaustSpeedY = 8;
        const ufoExhaustSizeX = 50;
        const ufoExhaustSizeY = 20;
        //Ufo Shot_02
        const ufoShot = enemyPath + "Ufo/Bullets/Shot_002.png";
        const ufoShotDamage = 50;
        const ufoShotSpeedX = 0;
        const ufoShotSpeedY = 8;
        const ufoShotSizeX = 35;
        const ufoShotSizeY = 35;

        //Ufo boss Shoot
        const ufoBossShotDamage = 50;
        const ufoBossShotSpeedX = 0;
        const ufoBossShotSpeedY = 8;
        const ufoBossShotSizeX = 35;
        const ufoBossShotSizeY = 35;
        const ufoBossShot = enemyPath + "UfoBoss/Effects/Shot_02.png";
        //Ufo boss Missile
        const ufoBossMissileDamage = 80;
        const ufoBossMissileSpeedX = 1;
        const ufoBossMissileSpeedY = 14;
        const ufoBossMissileSizeX = 22;
        const ufoBossMissileSizeY = 45;
        const ufoBossMissile = enemyPath + "UfoBoss/Effects/Missile.png";

        //Alien Exahaust
        const alienExhaust = enemyPath + "Alien/Bullets/Exhaust_1_002.png";
        const alienExhaustDamage = 40;
        const alienExhaustSpeedX = 0;
        const alienExhaustSpeedY = 8;
        const alienExhaustSizeX = 60;
        const alienExhaustSizeY = 20;
        //Alien Shot_02
        const alienShot = enemyPath + "Alien/Bullets/Exhaust_2_009.png";
        const alienShotDamage = 50;
        const alienShotSpeedX = 0;
        const alienShotSpeedY = 8;
        const alienShotSizeX = 40;
        const alienShotSizeY = 40;

        //Alien boss Shoot
        const AlienBossShotDamage = 50;
        const AlienBossShotSpeedX = 0;
        const AlienBossShotSpeedY = 8;
        const AlienBossShotSizeX = 40;
        const AlienBossShotSizeY = 40;
        const AlienBossShot = enemyPath + "AlienBoss/Effects/Shot_04.png";
        //AlieAlienoss Missile
        const AlienBossMissileDamage = 80;
        const AlienBossMissileSpeedX = 1;
        const AlienBossMissileSpeedY = 14;
        const AlienBossMissileSizeX = 20;
        const AlienBossMissileSizeY = 75;
        const AlienBossMissile = enemyPath + "AlienBoss/Effects/Ship_Exhaust.png";

        switch (theme) {
            case "ufo":
                return [{
                    name: "ufo",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Ufo/Ship_01.png", //592 x 726 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 592,
                    cutHeight: 726,
                    sizeX: 100,
                    sizeY: 123,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: ufoExhaustSizeX,
                        sizeY: ufoExhaustSizeY,
                        strength: ufoExhaustDamage,
                        velocityX: ufoExhaustSpeedX,
                        velocityY: ufoExhaustSpeedY,
                        path: ufoExhaust
                    }]
                },
                {
                    name: "ufo",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Ufo/Ship_02.png", //470 x 1064 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 470,
                    cutHeight: 1064,
                    sizeX: 80,
                    sizeY: 181,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: ufoShotSizeX,
                        sizeY: ufoShotSizeY,
                        strength: ufoShotDamage,
                        velocityX: ufoShotSpeedX,
                        velocityY: ufoShotSpeedY,
                        path: ufoShot
                    }]
                },
                {
                    name: "ufo",
                    health: 300,
                    score: 50,
                    path: enemyPath + "Ufo/Ship_03.png", //662 x 984 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 662,
                    cutHeight: 984,
                    sizeX: 90,
                    sizeY: 134,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: ufoExhaustSizeX,
                        sizeY: ufoExhaustSizeY,
                        strength: ufoExhaustDamage,
                        velocityX: ufoExhaustSpeedX,
                        velocityY: ufoExhaustSpeedY,
                        path: ufoExhaust
                    }]
                },
                {
                    name: "ufo",
                    health: 150,
                    score: 50,
                    path: enemyPath + "Ufo/Ship_04.png", //630 x 890 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 630,
                    cutHeight: 890,
                    sizeX: 100,
                    sizeY: 141,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: ufoShotSizeX,
                        sizeY: ufoShotSizeY,
                        strength: ufoShotDamage,
                        velocityX: ufoShotSpeedX,
                        velocityY: ufoShotSpeedY,
                        path: ufoShot
                    }]
                },

                {
                    name: "ufo",
                    health: 200,
                    score: 1000,
                    path: enemyPath + "Ufo/Ship_05.png", //1126 x 822 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1126,
                    cutHeight: 822,
                    sizeX: 100,
                    sizeY: 73,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: ufoExhaustSizeX,
                        sizeY: ufoExhaustSizeY,
                        strength: ufoExhaustDamage,
                        velocityX: ufoExhaustSpeedX,
                        velocityY: ufoExhaustSpeedY,
                        path: ufoExhaust
                    }]
                },
                {
                    name: "ufo",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Ufo/Ship_06.png", //1646 x 888 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1646,
                    cutHeight: 888,
                    sizeX: 100,
                    sizeY: 54,
                    speedY: 2,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: ufoExhaustSizeX,
                        sizeY: ufoExhaustSizeY,
                        strength: ufoExhaustDamage,
                        velocityX: ufoExhaustSpeedX,
                        velocityY: ufoExhaustSpeedY,
                        path: ufoExhaust
                    }]
                }];


            case "ufoBoss":
                return [{
                    name: "ufo boss",
                    health: 5000,
                    score: 50,
                    path: enemyPath + "UfoBoss/Boss_Full.png", //1080 x 1164 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1080,
                    cutHeight: 1164,
                    sizeX: 300,
                    sizeY: 323,
                    speedY: 0.5,
                    // yOffset: 110,
                    bullets: [{
                        x: -40,     //from player x
                        y: 120,       //from player y
                        sizeX: ufoBossShotSizeX,
                        sizeY: ufoBossShotSizeY,
                        strength: ufoBossShotDamage,
                        velocityX: ufoBossShotSpeedX,
                        velocityY: ufoBossShotSpeedY,
                        path: ufoBossShot
                    },
                    {
                        x: 20,     //from player x
                        y: 120,       //from player y
                        sizeX: ufoBossMissileSizeX,
                        sizeY: ufoBossMissileSizeY,
                        strength: ufoBossMissileDamage,
                        velocityX: ufoBossMissileSpeedX - (ufoBossMissileSpeedX * 2),
                        velocityY: ufoBossMissileSpeedY,
                        path: ufoBossMissile
                    },
                    {
                        x: 0,           //from player x
                        y: 120,         //from player y
                        sizeX: ufoBossMissileSizeX,
                        sizeY: ufoBossMissileSizeY,
                        strength: ufoBossMissileDamage,
                        velocityX: ufoBossMissileSpeedX,
                        velocityY: ufoBossMissileSpeedY,
                        path: ufoBossMissile
                    },
                    {
                        x: -20,         //from player x
                        y: 120,         //from player y
                        sizeX: ufoBossMissileSizeX,
                        sizeY: ufoBossMissileSizeY,
                        strength: ufoBossMissileDamage,
                        velocityX: ufoBossMissileSpeedX - (ufoBossMissileSpeedX * 2),
                        velocityY: ufoBossMissileSpeedY,
                        path: ufoBossMissile
                    },
                    {
                        x: 40,      //from player x
                        y: 120,       //from player y
                        sizeX: ufoBossShotSizeX,
                        sizeY: ufoBossShotSizeY,
                        strength: ufoBossShotDamage,
                        velocityX: ufoBossShotSpeedX,
                        velocityY: ufoBossShotSpeedY,
                        path: ufoBossShot
                    }]
                }];


            case "alien":
                return [{
                    name: "alien",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Alien/Ship_01.png", //813 x 768 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 813,
                    cutHeight: 768,
                    sizeX: 100,
                    sizeY: 94,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: alienExhaustSizeX,
                        sizeY: alienExhaustSizeY,
                        strength: alienExhaustDamage,
                        velocityX: alienExhaustSpeedX,
                        velocityY: alienExhaustSpeedY,
                        path: alienExhaust
                    }]
                },
                {
                    name: "alien",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Alien/Ship_02.png", //598 x 800 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 598,
                    cutHeight: 800,
                    sizeX: 90,
                    sizeY: 120,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: alienExhaustSizeX,
                        sizeY: alienExhaustSizeY,
                        strength: alienExhaustDamage,
                        velocityX: alienExhaustSpeedX,
                        velocityY: alienExhaustSpeedY,
                        path: alienExhaust
                    }]
                },
                {
                    name: "alien",
                    health: 300,
                    score: 50,
                    path: enemyPath + "Alien/Ship_03.png", //868 x 698 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 868,
                    cutHeight: 698,
                    sizeX: 100,
                    sizeY: 80,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: alienExhaustSizeX,
                        sizeY: alienExhaustSizeY,
                        strength: alienExhaustDamage,
                        velocityX: alienExhaustSpeedX,
                        velocityY: alienExhaustSpeedY,
                        path: alienExhaust
                    }]
                },
                {
                    name: "alien",
                    health: 150,
                    score: 50,
                    path: enemyPath + "Alien/Ship_04.png", //1006 x 780 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1006,
                    cutHeight: 780,
                    sizeX: 100,
                    sizeY: 78,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: alienShotSizeX,
                        sizeY: alienShotSizeY,
                        strength: alienShotDamage,
                        velocityX: alienShotSpeedX,
                        velocityY: alienShotSpeedY,
                        path: alienShot
                    }]
                },

                {
                    name: "alien",
                    health: 200,
                    score: 1000,
                    path: enemyPath + "Alien/Ship_05.png", //834 x 1030 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 834,
                    cutHeight: 1030,
                    sizeX: 100,
                    sizeY: 124,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: alienShotSizeX,
                        sizeY: alienShotSizeY,
                        strength: alienShotDamage,
                        velocityX: alienShotSpeedX,
                        velocityY: alienShotSpeedY,
                        path: alienShot
                    }]
                },
                {
                    name: "alien",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Alien/Ship_06.png", //572 x 800 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 572,
                    cutHeight: 800,
                    sizeX: 100,
                    sizeY: 140,
                    speedY: 2,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: alienShotSizeX,
                        sizeY: alienShotSizeY,
                        strength: alienShotDamage,
                        velocityX: alienShotSpeedX,
                        velocityY: alienShotSpeedY,
                        path: alienShot
                    }]
                }];

            case "alienBoss":
                return [{
                    name: "alien boss",
                    health: 5000,
                    score: 50,
                    path: enemyPath + "AlienBoss/Boss_Full.png", //1080 x 546 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1080,
                    cutHeight: 546,
                    sizeX: 400,
                    sizeY: 202,
                    speedY: 0.5,
                    // yOffset: 110,
                    bullets: [{
                        x: -110,     //from player x
                        y: 50,       //from player y
                        sizeX: AlienBossShotSizeX,
                        sizeY: AlienBossShotSizeY,
                        strength: AlienBossShotDamage,
                        velocityX: AlienBossShotSpeedX,
                        velocityY: AlienBossShotSpeedY,
                        path: AlienBossShot
                    },
                    {
                        x: -15,     //from player x
                        y: 50,       //from player y
                        sizeX: AlienBossMissileSizeX,
                        sizeY: AlienBossMissileSizeY,
                        strength: AlienBossMissileDamage,
                        velocityX: AlienBossMissileSpeedX - (AlienBossMissileSpeedX * 3),
                        velocityY: AlienBossMissileSpeedY,
                        path: AlienBossMissile
                    },
                    {
                        x: 0,           //from player x
                        y: 50,         //from player y
                        sizeX: AlienBossMissileSizeX,
                        sizeY: AlienBossMissileSizeY,
                        strength: AlienBossMissileDamage,
                        velocityX: AlienBossMissileSpeedX - AlienBossMissileSpeedX,
                        velocityY: AlienBossMissileSpeedY,
                        path: AlienBossMissile
                    },
                    {
                        x: 15,         //from player x
                        y: 50,         //from player y
                        sizeX: AlienBossMissileSizeX,
                        sizeY: AlienBossMissileSizeY,
                        strength: AlienBossMissileDamage,
                        velocityX: AlienBossMissileSpeedX + (AlienBossMissileSpeedX),
                        velocityY: AlienBossMissileSpeedY,
                        path: AlienBossMissile
                    },
                    {
                        x: 110,      //from player x
                        y: 50,       //from player y
                        sizeX: AlienBossShotSizeX,
                        sizeY: AlienBossShotSizeY,
                        strength: AlienBossShotDamage,
                        velocityX: AlienBossShotSpeedX,
                        velocityY: AlienBossShotSpeedY,
                        path: AlienBossShot
                    }]
                }];


                
            default:
                break;


        }
    }
}

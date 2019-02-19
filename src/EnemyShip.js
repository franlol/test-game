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
        const ufoBossShot = enemyPath + "UfoBoss/Bullets/Shot_02.png";
        //Ufo boss Missile
        const ufoBossMissileDamage = 80;
        const ufoBossMissileSpeedX = 0;
        const ufoBossMissileSpeedY = 14;
        const ufoBossMissileSizeX = 22;
        const ufoBossMissileSizeY = 45;
        const ufoBossMissile = enemyPath + "UfoBoss/Bullets/Missile.png";

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
        const AlienBossShot = enemyPath + "AlienBoss/Bullets/Shot_04.png";
        //Alien Boss Missile
        const AlienBossMissileDamage = 80;
        const AlienBossMissileSpeedX = 1;
        const AlienBossMissileSpeedY = 14;
        const AlienBossMissileSizeX = 20;
        const AlienBossMissileSizeY = 75;
        const AlienBossMissile = enemyPath + "AlienBoss/Bullets/Ship_Exhaust.png";

        //Pirate
        const pirateShotDamage = 50;
        const pirateShotSpeedX = 0;
        const pirateShotSpeedY = 8;
        const pirateShotSizeX = 20;
        const pirateShotSizeY = 57;
        const pirateShot = enemyPath + "Pirate/Bullets/Exhaust_2_008.png";
        //Pirate 
        const pirateMissileDamage = 80;
        const pirateMissileSpeedX = 0;
        const pirateMissileSpeedY = 8;
        const pirateMissileSizeX = 20;
        const pirateMissileSizeY = 20;
        const pirateMissile = enemyPath + "Pirate/Bullets/Fire_Shot_006.png";

        //Pirate boss fireBall
        const pirateBossShotDamage = 50;
        const pirateBossShotSpeedX = 0;
        const pirateBossShotSpeedY = 8;
        const pirateBossShotSizeX = 40;
        const pirateBossShotSizeY = 40;
        const pirateBossShot = enemyPath + "PirateBoss/Bullets/Shot_04.png";
        //Pirate Boss Shoot
        const pirateBossShot2Damage = 80;
        const pirateBossShot2SpeedX = 0;
        const pirateBossShot2SpeedY = 14;
        const pirateBossShot2SizeX = 30;
        const pirateBossShot2SizeY = 57;
        const pirateBossShot2 = enemyPath + "PirateBoss/Bullets/Shot_02.png";
        //Pirate Boss Misile
        const pirateBossMissileDamage = 80;
        const pirateBossMissileSpeedX = 0;
        const pirateBossMissileSpeedY = 14;
        const pirateBossMissileSizeX = 20;
        const pirateBossMissileSizeY = 57;
        const pirateBossMissile = enemyPath + "PirateBoss/Bullets/Missile.png";

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
                        velocityX: ufoBossShotSpeedX - 2,
                        velocityY: ufoBossShotSpeedY,
                        path: ufoBossShot
                    },
                    {
                        x: 20,     //from player x
                        y: 120,       //from player y
                        sizeX: ufoBossMissileSizeX,
                        sizeY: ufoBossMissileSizeY,
                        strength: ufoBossMissileDamage,
                        velocityX: ufoBossMissileSpeedX - 0.8,
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
                        velocityX: ufoBossMissileSpeedX + 0.8,
                        velocityY: ufoBossMissileSpeedY,
                        path: ufoBossMissile
                    },
                    {
                        x: 40,      //from player x
                        y: 120,       //from player y
                        sizeX: ufoBossShotSizeX,
                        sizeY: ufoBossShotSizeY,
                        strength: ufoBossShotDamage,
                        velocityX: ufoBossShotSpeedX + 2,
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


            case "pirate":
                return [{
                    name: "pirate",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Pirate/Ship_01.png", //724 x 1120 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 724,
                    cutHeight: 1120,
                    sizeX: 100,
                    sizeY: 155,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: pirateMissileSizeX,
                        sizeY: pirateMissileSizeY,
                        strength: pirateMissileDamage,
                        velocityX: pirateMissileSpeedX,
                        velocityY: pirateMissileSpeedY,
                        path: pirateMissile
                    }]
                },
                {
                    name: "pirate",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Pirate/Ship_02.png", //370 x 659 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 370,
                    cutHeight: 659,
                    sizeX: 100,
                    sizeY: 178,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: pirateMissileSizeX,
                        sizeY: pirateMissileSizeY,
                        strength: pirateMissileDamage,
                        velocityX: pirateMissileSpeedX,
                        velocityY: pirateMissileSpeedY,
                        path: pirateMissile
                    }]
                },
                {
                    name: "pirate",
                    health: 300,
                    score: 50,
                    path: enemyPath + "Pirate/Ship_03.png", //647 x 676 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 647,
                    cutHeight: 676,
                    sizeX: 100,
                    sizeY: 104,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: pirateMissileSizeX,
                        sizeY: pirateMissileSizeY,
                        strength: pirateMissileDamage,
                        velocityX: pirateMissileSpeedX,
                        velocityY: pirateMissileSpeedY,
                        path: pirateMissile
                    }]
                },
                {
                    name: "pirate",
                    health: 150,
                    score: 50,
                    path: enemyPath + "Pirate/Ship_04.png", //850 x 604 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 850,
                    cutHeight: 604,
                    sizeX: 100,
                    sizeY: 71,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: pirateShotSizeX,
                        sizeY: pirateShotSizeY,
                        strength: pirateShotDamage,
                        velocityX: pirateShotSpeedX,
                        velocityY: pirateShotSpeedY,
                        path: pirateShot
                    }]
                },
                {
                    name: "pirate",
                    health: 200,
                    score: 1000,
                    path: enemyPath + "Pirate/Ship_05.png", //714 x 1044 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 714,
                    cutHeight: 1044,
                    sizeX: 85,
                    sizeY: 124,
                    speedY: 2, //speed in -Y (movement)
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: pirateShotSizeX,
                        sizeY: pirateShotSizeY,
                        strength: pirateShotDamage,
                        velocityX: pirateShotSpeedX,
                        velocityY: pirateShotSpeedY,
                        path: pirateShot
                    }]
                },
                {
                    name: "pirate",
                    health: 200,
                    score: 50,
                    path: enemyPath + "Pirate/Ship_06.png", //606 x 836 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 606,
                    cutHeight: 836,
                    sizeX: 100,
                    sizeY: 138,
                    speedY: 2,
                    // yOffset: 110,
                    bullets: [{
                        x: 0,   //from player x
                        y: 0, //from player y
                        sizeX: pirateShotSizeX,
                        sizeY: pirateShotSizeY,
                        strength: pirateShotDamage,
                        velocityX: pirateShotSpeedX,
                        velocityY: pirateShotSpeedY,
                        path: pirateShot
                    }]
                }];


            case "pirateBoss":
                return [{
                    name: "pirate boss",
                    health: 5000,
                    score: 50,
                    path: enemyPath + "PirateBoss/Boss_Full.png", //1080 x 638 pixels
                    cutFromX: 0,
                    cutFromY: 0,
                    cutWidth: 1080,
                    cutHeight: 638,
                    sizeX: 400,
                    sizeY: 236,
                    speedY: 0.5,
                    // yOffset: 110,
                    bullets: [{
                        x: -10,     //from player x
                        y: 120,       //from player y
                        sizeX: pirateBossMissileSizeX,
                        sizeY: pirateBossMissileSizeY,
                        strength: pirateBossMissileDamage,
                        velocityX: pirateBossMissileSpeedX,
                        velocityY: pirateBossMissileSpeedY,
                        path: pirateBossMissile
                    },
                    {
                        x: -65,     //from player x
                        y: 50,       //from player y
                        sizeX: pirateBossShotSizeX,
                        sizeY: pirateBossShotSizeY,
                        strength: pirateBossShotDamage,
                        velocityX: pirateBossShotSpeedX - 1,
                        velocityY: pirateBossShotSpeedY,
                        path: pirateBossShot
                    },
                    {
                        x: -100,           //from player x
                        y: 50,         //from player y
                        sizeX: pirateBossShot2SizeX,
                        sizeY: pirateBossShot2SizeY,
                        strength: pirateBossShot2Damage,
                        velocityX: pirateBossShot2SpeedX - 3,
                        velocityY: pirateBossShot2SpeedY,
                        path: pirateBossShot2
                    },
                    {
                        x: 100,         //from player x
                        y: 50,         //from player y
                        sizeX: pirateBossShot2SizeX,
                        sizeY: pirateBossShot2SizeY,
                        strength: pirateBossShot2Damage,
                        velocityX: pirateBossShot2SpeedX + 3,
                        velocityY: pirateBossShot2SpeedY,
                        path: pirateBossShot2
                    },
                    {
                        x: 65,         //from player x
                        y: 50,         //from player y
                        sizeX: pirateBossShotSizeX,
                        sizeY: pirateBossShotSizeY,
                        strength: pirateBossShotDamage,
                        velocityX: pirateBossShotSpeedX + 1,
                        velocityY: pirateBossShotSpeedY,
                        path: pirateBossShot
                    },
                    {
                        x: 10,      //from player x
                        y: 120,       //from player y
                        sizeX: pirateBossMissileSizeX,
                        sizeY: pirateBossMissileSizeY,
                        strength: pirateBossMissileDamage,
                        velocityX: pirateBossMissileSpeedX,
                        velocityY: pirateBossMissileSpeedY,
                        path: pirateBossMissile
                    }]
                }];



            default:
                break;


        }
    }
}

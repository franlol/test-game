# Space LoL

## Description

Space ships battle game developed in pure Html5 and JS.

A & D kyes to move. Spacebar to shoot. Ez.

## MVP

The game is based in canvas. There are 3 basic elements; The player, the enemies and the shooted bullets by both.

The idea is that a player have to kill enemies shooting bullets. When bullets collision with enemies, they loose health and finally dies.

Player have lives, when collides with a bullet dies.

Enemies have 1 life. When collides with bullets from player, enemy dies.

There are 2 differents bullets; 1 shooteds by enemies and another 1 shooteds by the player. So I can check the correct collision.


## Backlog

- Sprites.
- Help screen.
- Player name.
- Health bar.
- Record (puntuations).
- Enemy explosion, throwing bullets (shooting)
- Boss?
- next level

## Class structure

| Screen |
| --- |
| -canvasWidth:Number |
| -canvasHeight:Number |
| +buildDom() |
| +splashScreen() |
| +gameScreen() |
| +gameOverScreen() |

| Character |
|---|
| -canvas:(Canvas) |
| -x:Number |
| -y:Number |
| -direction:Number |
| -sizeX:Number |
| -sizeY:Number |
| +constructor(canvas:Canvas) |
| +draw(canvas:Canvas) |
| +move() |
| +checkCollisions(canvas:Canvas) |
| +shoot() |
| +receiveDamage() |
| +loseLife() |
| +die() |

| Enemy extends Character |
|---|
| +constructor() |
| +update() |
| +destroy() |
| +die() |
| +@checkCollisions() |

| Player extends Character |
|---|
| +constructor() |
| +update() |
| +@checkCollisions() |
| +@die() |

| Bullet extends Character |
|---|
| +constructor() |
| ? |

| Game |
|---|
| -players:Array(Player) |
| -bullets:Array(Bullets) |
| -playerLives:Number |
| -canvas:Object(canvas) |
| -isGameOver:Boolean |
| +constructor() |
| +start() |
| +loop() |
| +gameOver() |
| +update() |
| +draw() |
| +checkCollisions() |
| +clearCanvas() |

## States Transitions

* Game transitions:
  - Splash Screen
  - Game Screen
  - Game Over Screen


## Task

- [x] Screen transitions.
- [x] Create canvas
- [x] Game loop
- [x] Add player
- [x] Make player moving
- [x] Add enemies
- [x] Make enemies moving
- [x] Player shoot
- [x] Player bullets collisions with enemies
- [x] Enemies shoot
- [x] Enemies bullets collisions with player
- [x] Backlog.

## Links

[https://code.visualstudio.com/] (Code editor)

[https://github.com/necolas/normalize.css/] (Css reset)

[https://paypal.com/] (Donations)

### Git

[https://github.com/franlol/space-lol.git] (github)

[https://github.com/franlol/space-lol.git] (deploy)

## Game instructions

Arrows to move.

Spacebar to shoot.

Dodge and shoot.

~enjoy.

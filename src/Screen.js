'use strict'

class Screen {

    constructor() {
        this.canvasWidth = 600;
        this.canvasHeight = 600;
        this.game;
    }

    buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
    }

    splashScreen = () => {
        const screen = this.buildDom(`
        <section class="splash-section">
            <h1>Space LoL</h1>
            <ul>
                <li>Enter your name:</li>
                <li><input type="text"></li>
                <li>
                    <label id="radio-low">Low <input id="diff-low" type="radio"></label>
                    <label id="radio-med">Med <input id="diff-med" checked type="radio"></label>
                    <label id="radio-hard">Hard <input id="diff-hard" type="radio"></label>
                </li>
                <li><button id="splash-button-start">START</button></li>
                <li><button>Start as Developer</button></li>
                <li><button>Records</button></li>
                <li><button>HELP</button></li>
            </ul>
        </section>
        <footer>made with love by franlol</footer>
        `);
        const button = document.getElementById("splash-button-start");
        button.addEventListener("click", this.gameScreen);
    }

    gameScreen = () => {
        const screen = this.buildDom(`
        <section class="game-section">
            <h1 id="game-title"></h1>
            <ul>
                <li><button id="game-button-game-over">Game Over</button></li>
                <li><canvas>Your browser does not support canvas.</canvas></li>
            </ul>
        </section>
        <footer>made with love by franlol</footer>
        `);
        const canvasId = document.querySelector("canvas")
        const button = document.getElementById("game-button-game-over");

        this.canvasConstruct(canvasId);
        this.gameUpdateTitle(this.game.playerLives); //se hace aqui, pq hasta que no se construye el canvas, no recivimos el objeto Game

        button.addEventListener("click", () => {
            this.game.isGameOver = true;
            this.gameOverScreen;
        });

        let keyLeftPushed = false;
        let keyRightPushed = false;
        document.addEventListener("keypress", (e) => {
            if (this.game.players.length > 0) {
                switch (e.code) {
                    case "KeyA":
                        this.game.players[0].direction = (keyRightPushed) ? 0 : -1;
                        keyLeftPushed = true;
                        break;
                    case "KeyD":
                        this.game.players[0].direction = (keyLeftPushed) ? 0 : 1;
                        keyRightPushed = true;
                        break;
                    case "Space":
                        this.game.players[0].shoot();
                        break;
                }
            }
        });
        document.addEventListener("keyup", (e) => {
            if (this.game.players.length > 0) {
                switch (e.code) {
                    case "KeyA":
                        this.game.players[0].direction = (keyRightPushed) ? 1 : 0;
                        keyLeftPushed = false;
                        break;
                    case "KeyD":
                        this.game.players[0].direction = (keyLeftPushed) ? -1 : 0;
                        keyRightPushed = false;
                        break;
                }
            }
        });



    }

    gameUpdateTitle = (lives) => {
        let h1 = document.getElementById("game-title");
        h1.innerHTML = "Lives: " + lives;
    }

    gameOverScreen = () => {
        const screen = this.buildDom(`
        <section class="game-over-section">
            <ul>
                <li><h1>Game Over</h1></li>
                <li><h3>Score: 4793</h3></li>
                <li><button id="game-over-button-restart">Play again!</button></li>
                <li><button id="game-over-button-splash">Main menu</button></li>
            </ul>
        </section>
        <footer>made with love by franlol</footer>
        `);
        const playAgain = document.getElementById("game-over-button-restart");
        const mainMenu = document.getElementById("game-over-button-splash");

        playAgain.addEventListener("click", function() {
            this.gameScreen();
        }.bind(this));
        mainMenu.addEventListener("click", this.splashScreen);
    }

    canvasConstruct = (newCanvas) => {
        newCanvas.height = this.canvasHeight;
        newCanvas.width = this.canvasWidth;

        this.game = new Game(newCanvas, this);
        this.game.startGame();
    }
}

'use strict'

class Screen {

    constructor() {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
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
            <ul>
                <li><h1>Score: </h1></li>
                <li><button id="game-button-game-over">Game Over</button></li>
                <li><canvas></canvas></li>
            </ul>
        </section>
        <footer>made with love by franlol</footer>
        `);
        const canvasId = document.querySelector("canvas")
        const button = document.getElementById("game-button-game-over");

        this.canvasConstruct(canvasId);

        button.addEventListener("click", () => {
            this.game.isGameOver = true;
            this.gameOverScreen;
        });
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
        const playAgain =   document.getElementById("game-over-button-restart");
        const mainMenu =    document.getElementById("game-over-button-splash");

        playAgain.addEventListener("click", this.gameScreen);
        mainMenu.addEventListener("click", this.splashScreen);
    }

    canvasConstruct = (canvasId) => {
        canvasId.height =   this.canvasHeight;
        canvasId.width =    this.canvasWidth;

        this.game = new Game(canvasId);
        this.game.startGame();
    }
}

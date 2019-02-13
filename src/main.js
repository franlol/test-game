'use strict'

const main = () => {

    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
        return main;
    }

    const splashScreen = () => {
        const screen = buildDom(`
        <section class="splash-section">
            <h1>Space LoL</h1>
            <ul>
                <li>Enter your name:</li>
                <li><input type="text"></li>
                <li><button id="splash-button-start">START</button></li>
                <li><button>Start as Developer</button></li>
                <li><button>Records</button></li>
                <li><button>HELP</button></li>
            </ul>
        </section>
        <footer>made with love by franlol</footer>
        `);

        const button = document.getElementById("splash-button-start");
        button.addEventListener("click", gameScreen);
    }

    const gameScreen = () => {
        const screen = buildDom(`
        <section class="game-section">
            <ul>
                <li><h1>Score: </h1></li>
                <li><canvas></canvas></li>
                <li><button id="game-button-game-over">Game Over</button></li>
            </ul>
        </section>
        <footer>made with love by franlol</footer>
        `);
        const button = document.getElementById("game-button-game-over");
        button.addEventListener("click", gameOverScreen);
    }

    const gameOverScreen = () => {
        const screen = buildDom(`
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

        playAgain.addEventListener("click", gameScreen);
        mainMenu.addEventListener("click", splashScreen);
    }

    splashScreen();
}

window.addEventListener("load", main);
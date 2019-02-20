'use strict'

class Screen {

    constructor() {
        this.canvasWidth = 1080;
        this.canvasHeight = innerHeight - 6;
        this.game;

        this.nickname = "";
        this.score = 0;

        this.keyboardBug = true;
        this.theme = "orange";
        this.difficulty = "med";
    }

    buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
    }

    splashScreen = () => {
        const screen = this.buildDom(`
        <section class="splash-section">
            <h1>Space LoL</h1>
            <div class="select-container">
                <input class="radios sel-red" ${this.theme == "red" ? "checked" : ""} id="ship-red" checked type="radio" name="ship-theme">
                <input class="radios sel-blue" ${this.theme == "blue" ? "checked" : ""} id="ship-blue" type="radio" name="ship-theme">
                <input class="radios sel-orange" ${this.theme == "orange" ? "checked" : ""} id="ship-orange" type="radio" name="ship-theme">
                <input class="radios sel-green" ${this.theme == "green" ? "checked" : ""} id="ship-green" type="radio" name="ship-theme">
            </div>
            <div class="img-wrap">
                <div class="img-container">
                    <div style="width: 100%"><img width="200" src="./img/Player/red-evo-0.png"></div>
                    <div style="width: 100%"><img width="200" src="./img/Player/blue-evo-0.png"></div>
                    <div style="width: 100%"><img width="200" src="./img/Player/orange-evo-0.png"></div>
                    <div style="width: 100%"><img width="200" src="./img/Player/green-evo-0.png"></div>
                </div>
            </div>
            <input class="input-nickname" type="text" placeholder="nickname">
            <button id="splash-button-start">START</button>

            <footer>
                <div class="footer-info"><a href="https://github.com/franlol"><i class="fab fa-github-alt"></i></a>&nbsp;&nbsp;<a href="#"><i class="fab fa-paypal"></i></a></div>
            </footer>
        </section>
        `);

        let radioButtons = document.querySelectorAll(".radios");
        let img = document.querySelector(".img-container");

        radioButtons[0].addEventListener("click", function() {
            img.classList.add("slide-red");
            img.classList.remove("slide-blue");
            img.classList.remove("slide-orange");
            img.classList.remove("slide-green");
        })
        radioButtons[1].addEventListener("click", function() {
            img.classList.add("slide-blue");
            img.classList.remove("slide-red");
            img.classList.remove("slide-orange");
            img.classList.remove("slide-green");
        })
        radioButtons[2].addEventListener("click", function() {
            img.classList.remove("slide-red");
            img.classList.remove("slide-orange");
            img.classList.remove("slide-green");
            img.classList.add("slide-orange");
        })
        radioButtons[3].addEventListener("click", function() {
            img.classList.remove("slide-blue");
            img.classList.remove("slide-orange");
            img.classList.remove("slide-red");
            img.classList.add("slide-green");
        })

        const button = document.getElementById("splash-button-start");
        button.addEventListener("click", () => {
            if (document.getElementById("ship-red").checked) {
                this.theme = "red";
            } else if (document.getElementById("ship-green").checked) {
                this.theme = "green";
            } else if (document.getElementById("ship-orange").checked) {
                this.theme = "orange";
            } else if (document.getElementById("ship-blue").checked) {
                this.theme = "blue";
            } else {

            }
            this.nickname = document.querySelector(".input-nickname").value;
            this.gameScreen()
        });
    }

    gameScreen = () => {
        const screen = this.buildDom(`
        <section class="game-section">
            <!--<h1 id="game-title"></h1>-->
            <!--<ul>-->
                <canvas id ="canvas">Your browser does not support canvas.</canvas>
                <button id="game-button-game-over">Game Over</button>
            <!--</ul>-->
        </section>
        `);

        const canvasId = document.querySelector("canvas")
        const button = document.getElementById("game-button-game-over");

        this.canvasConstruct(canvasId);

        button.addEventListener("click", () => {
            // this.game.isGameOver = true;
            // this.gameOverScreen;
            this.game.gameOver(this.game.players[0])
        });

        let keyLeftPushed = false;
        let keyRightPushed = false;
        if (this.keyboardBug) {
            let keypress = document.addEventListener("keypress", (e) => {
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
            const keyup = document.addEventListener("keyup", (e) => {
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
            this.keyboardBug = false;
        }
    }

    gameUpdateTitle = (lives) => {
        let h1 = document.getElementById("game-title");
        h1.innerHTML = "Lives: " + lives;
    }

    gameOverScreen = () => {
        const screen = this.buildDom(`
        <section class="game-over-section">
            <h1>Game Over</h1>
            <h3>GZ ${this.nickname}! Score: ${this.score}</h3>
            <br>
            <button id="game-over-button-restart">Play again!</button>
            <button id="game-over-button-splash">Main menu</button>
        </section>
        <footer>
            <div class="footer-info"><a href="https://github.com/franlol"><i class="fab fa-github-alt"></i></a>&nbsp;&nbsp;<a href="#"><i class="fab fa-paypal"></i></a></div>
        </footer>
        `);
        const playAgain = document.getElementById("game-over-button-restart");
        const mainMenu = document.getElementById("game-over-button-splash");

        playAgain.addEventListener("click", function () {
            this.gameScreen();
        }.bind(this));
        mainMenu.addEventListener("click", this.splashScreen);
    }

    canvasConstruct = (canvas) => {
        canvas.height = this.canvasHeight;
        canvas.width = this.canvasWidth;
        this.canvas = canvas;

        this.game = new Game(this);
        this.game.startGame();
    }
}


// <section class="splash-section">
// <h1>Space LoL</h1>
// <div class="select-container">
//     <input class="radios" ${this.theme == "red" ? "checked" : ""} id="ship-red" checked type="radio" name="ship-theme">
//     <input class="radios" ${this.theme == "green" ? "checked" : ""} id="ship-green" type="radio" name="ship-theme">
//     <input class="radios" ${this.theme == "orange" ? "checked" : ""} id="ship-orange" type="radio" name="ship-theme">
//     <input class="radios" ${this.theme == "blue" ? "checked" : ""} id="ship-blue" type="radio" name="ship-theme">
// </div>
//     <!--<li>DIFFICULTY:
//         <label id="radio-low">Low <input id="diff-low" ${this.difficulty == "low" ? "checked" : ""} type="radio" name="difficult"></label>
//         <label id="radio-med">Med <input id="diff-med" ${this.difficulty == "med" ? "checked" : ""} type="radio" name="difficult"></label>
//         <label id="radio-hard">Hard <input id="diff-hard" ${this.difficulty == "hard" ? "checked" : ""} type="radio" name="difficult"></label>
//     </li>-->
    
//     <!--<form>SPACE-SHIP: 
//             <label name="red-ship">Red <input ${this.theme == "red" ? "checked" : ""} id="ship-red" checked type="radio" name="ship-theme"></label>
//             <label name="ship-blue">Green <input ${this.theme == "green" ? "checked" : ""} id="ship-green" type="radio" name="ship-theme"></label>
//             <label name="orange-ship">Orange <input ${this.theme == "orange" ? "checked" : ""} id="ship-orange" type="radio" name="ship-theme"></label>
//             <label name="blue-ship">Blue <input ${this.theme == "blue" ? "checked" : ""} id="ship-blue" type="radio" name="ship-theme"></label>
//         </form>-->
//     <div class="img-wrap">
//         <div class="img-container">
//             <img src="./img/Player/red-evo-0.png"/>
//             <img src="./img/Player/blue-evo-0.png"/>
//             <img src="./img/Player/orange-evo-0.png"/>
//             <img src="./img/Player/green-evo-0.png"/>
//         </div>
//     </div>
//     <input type="text" placeholder="nickname">
//     <button id="splash-button-start">START</button>
// <!--</ul>-->


// <footer>
//     <div class="footer-info"><a href="https://github.com/franlol"><i class="fab fa-github-alt"></i></a>&nbsp;&nbsp;<a href="#"><i class="fab fa-paypal"></i></a></div>
// </footer>
// </section>
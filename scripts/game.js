// import * as myModule from 'scripts/CountGameAssets.js';

// const assets = myModule;

class NumberedBox extends createjs.Container {
    constructor(number = 0) {
        //init createjs container logic
        super();
        
        this.game = game;
        this.number = numnber;
        
        //add in instance of NumberBox / enable ability to edit num text / add to stage
        const movieclip = new lib.NumberedBox();
        movieclip.numberText.text = number;

        movieclip.numberText.font = "24px Coda Caption";
        //firefox fix, must manually set y value below
        // movieclip.numberText.textBaseline = "alphabet";
        // movieclip.numberText.x += 2;
        // movieclip.numberText.y = 0;


        new createjs.ButtonHelper(movieclip, 0, 1, 2, false, new lib.RestartButton(), 3);

        this.addChild(movieclip);

        this.setBounds(0, 0, 50, 50);

        //click handler
        this.on('click', this.handleClick.bind(this));
    }

    handleClick() {
        this.game.handleClick(this);
        createjs.Sound.play("filetitlehere");
    }
}

//this class handles all the game data and logic for the game
class GameData {
    constructor() {
        this.amountOfBox = 20;
        this.resetData();
    }

    resetData() {
        this.currentNumber = 1;
    }

    nextNumber() {
        this.currentNumber += 1;
    }

    isCorrectNum(num) {
        return (number === this.currentNumber);
    }

    gameWin() {
        return (this.currentNumber > this.amountOfBox);
    }
}


class Game {
    constructor() {
        console.log(`Welcome to the game. Version ${this.version()}`);

        this.loadSound();

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        this.stage.width = this.canvas.width;  
        this.stage.height = this.canvas.height;

        this.stage.enableMouseOver();

        window.debugStage = this.stage;

        //touch support
        createjs.Touch.enable(this.stage);

        //enable retina display support
        this.retinalScale();

        createjs.Ticker.setFPS(60);

        this.restartGame();

        //game related initialize
        this.gameData = new GameData();

        //redraw stage at 60fps
        createjs.Ticker.on("tick", this.stage);

        
    }

    version() {
        return '1.0.0';
    }

    loadSound() {
        createjs.Sound.registerSound("soundfx/filenamehere", "filetitlehere");
        createjs.Sound.registerSound("soundfx/filenamehere", "filetitlehere");
        createjs.Sound.alternateExtensions = ["ogg", "wave"];
    }

    restartGame() {
        // this.gameData.resetData();
        this.stage.removeAllChildren();

        //background
        this.stage.addChild(new lib.Background());

        //add instances of numbered box to the stage
        this.generateMultiBoxes(this.gameData.amountOfBox);
    }

    //method to create a certain number of boxes based on amount var
    generateMultiBoxes(amount = 10) {
        for (let i = amount; i > 0; i--) {
            let movieclip = new NumberedBox(this, i);
            this.stage.addChild(movieclip);
        }

        //random pos for boxes
        movieclip.x = Math.random() * (this.stage.width - movieclip.getBounds().width);
        movieclip.y = Math.random() * (this.stage.height - movieclip.getBounds().height);
    }

    handleClick(numberedBox) {
        if (this.gameData.isCorrectNum(numberedBox.number)) {
            this.removeChild(numberedBox);
            this.gameData.nextNumber();
        
        
            //game over
            if (this.gameData.gameWin()) {
                createjs.Sound.play("filetitlehere");

                const gameOverScreen = new lib.GameOverView();
                this.stage.addChild(gameOverScreen);

                gameOverScreen.restartGame.on('click', (function() {
                    createjs.Sound.play("filetitlehere");
                    this.restartGame();
                }).bind(this));
            }
        }
    }

    retinalScale() {
        this.stage.width = this.canvas.width;  
        this.stage.height = this.canvas.height;

        let ratio = window.devicePixelRatio;

        if (ratio === undefined) {
            return;
        }

        this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
        this.canvas.setAttribute('height', Math.round(this.stage.height * ratio));
        
        this.stage.scaleX = this.stage.scaleY = ratio;

        //Set CSS style
        this.canvas.style.width = this.stage.width + "px";
        this.canvas.style.height = this.stage.height + "px";
    }
}

const game = new Game();
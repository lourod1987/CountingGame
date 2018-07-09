// import * as myModule from 'scripts/CountGameAssets.js';

// const assets = myModule;

class NumberedBox extends createjs.Container {
    constructor(number = 0) {
        //init createjs container logic
        super();
        
        //add in instance of NumberBox / enable ability to edit num text / add to stage
        const movieclip = new lib.NumberedBox();
        movieclip.numberText.text = number;
        this.addChild(movieclip);

        //random pos
        movieclip.x = Math.random() * 200;
        movieclip.x = Math.random() * 200;
    }
}


class Game {
    constructor() {
        console.log(`Welcome to the game. Version ${this.version()}`);

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        window.debugStage = this.stage;

        createjs.Ticker.setFPS(60);
        //redraw stage at 60fps
        createjs.Ticker.on("tick", this.stage);

        //background
        // this.stage.addChild(new lib.Background());

        //add instance of numbered box to the stage
        this.stage.addChild(new NumberedBox(65));
    }

    version() {
        return '1.0.0';
    }
}

const game = new Game();
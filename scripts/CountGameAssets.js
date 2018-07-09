// export {default} from 'anim';

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBPIAAiKIg0AAIAAgTIB8AAIAAATIg1AAIAACKg");
	this.shape.setTransform(98,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBPIgVghIgPgWQgGgHgDgDQgFgDgFgBIgLgBIgZAAIAABGIgUAAIAAidIBEAAQAVAAALAFQALAEAHAKQAGALAAANQAAARgKALQgLALgXADIANAIQAJAIAIANIAbArgAgwgIIAtAAQANAAAJgDQAIgDAEgHQAEgGAAgIQAAgLgIgHQgIgHgSAAIgxAAg");
	this.shape_1.setTransform(84,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyBPIgSgwIhBAAIgRAwIgXAAIA9idIAVAAIBBCdgAgKgfIgRAtIA0AAIgQgrQgIgTgCgNQgDAPgGAPg");
	this.shape_2.setTransform(68,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBPIAAiKIg0AAIAAgTIB8AAIAAATIg1AAIAACKg");
	this.shape_3.setTransform(54,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBLQgPgGgIgMQgIgNAAgQIATgCQACAMAFAIQAFAHAKAFQALAFAMAAQANAAAIgEQAKgDAEgGQAEgHAAgHQAAgHgEgGQgEgFgKgEQgGgDgVgFQgVgFgJgEQgMgGgFgIQgGgJAAgLQAAgMAHgKQAHgLANgFQANgFAQAAQAQAAAOAFQANAGAHALQAIALAAAOIgUABQgCgPgJgHQgJgIgSAAQgSAAgJAHQgJAHABAKQAAAIAFAGQAHAFAYAGQAaAGAJAEQAOAFAGAKQAHAKAAAMQgBANgGALQgIALgNAGQgOAGgRAAQgUAAgOgGg");
	this.shape_4.setTransform(39.8,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_5.setTransform(25.5,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBPIgVghIgPgWQgGgHgDgDQgFgDgFgBIgLgBIgZAAIAABGIgUAAIAAidIBEAAQAVAAALAFQALAEAHAKQAGALAAANQAAARgKALQgLALgXADIANAIQAJAIAIANIAbArgAgwgIIAtAAQANAAAJgDQAIgDAEgHQAEgGAAgIQAAgLgIgHQgIgHgSAAIgxAAg");
	this.shape_6.setTransform(10.7,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AoSDNIAAmZIQlAAIAAGZg");
	this.shape_7.setTransform(53.1,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AoSDNIAAmZIQlAAIAAGZg");
	this.shape_8.setTransform(53.1,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3300").s().p("AoSDNIAAmZIQlAAIAAGZg");
	this.shape_9.setTransform(53.1,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.9,41);


(lib.NumberBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.numberText = new cjs.Text("98", "12px 'Arial'");
	this.numberText.name = "numberText";
	this.numberText.lineHeight = 15;
	this.numberText.lineWidth = 15;
	this.numberText.parent = this;
	this.numberText.setTransform(11.3,12.9,2.866,2.866);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(1));

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(0,0,0,0.6)"],[0,1],0,0,0,0,0,45.8).s().p("AlCFDIAAqFIKFAAIAAKFg");
	this.shape.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AlCFDIAAqFIKFAAIAAKFg");
	this.shape_1.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberBox, new cjs.Rectangle(0,0,64.7,64.7), null);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRCBIAAgkIAjAAIAAAkgAgJBBIgJiIIAAg5IAmAAIAAA5IgKCIg");
	this.shape.setTransform(240.6,169.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABDCBIiHjKIAADKIggAAIAAkBIAjAAICGDJIAAjJIAgAAIAAEBg");
	this.shape_1.setTransform(222.5,169.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhAB0QgdgSgPgeQgOgeAAgjQAAg/AigkQAjglA1AAQAkAAAcASQAdARAPAeQAPAfAAAlQAAAogQAfQgQAegdAQQgdAQghABQgkAAgcgSgAg9hOQgaAZAAA5QAAAuAZAcQAZAaAlAAQAmAAAZgbQAZgbAAgyQAAgegLgXQgKgYgVgNQgUgNgaAAQgjAAgaAZg");
	this.shape_2.setTransform(195.6,169.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA+CBIg2jEIgIgeIgHAeIg2DEIgjAAIhFkBIAjAAIAoCoQAGAbAFAaIALgwIAxitIAoAAIAlCBQAOAxAGArIANg4IAoilIAiAAIhGEBg");
	this.shape_3.setTransform(164.6,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag6B2QgXgMgKgXQgJgZAAgoIAAiUIAiAAIAACUQAAAhAGAQQAGAQAPAIQAQAJAWAAQAkAAAQgRQAQgRAAgwIAAiUIAiAAIAACUQAAAngJAXQgIAWgXAPQgXAOglAAQgkAAgXgNg");
	this.shape_4.setTransform(124.5,169.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhAB0QgdgSgPgeQgOgeAAgjQAAg/AigkQAjglA1AAQAkAAAcASQAdARAPAeQAPAfAAAlQAAAogQAfQgQAegdAQQgdAQghABQgkAAgcgSgAg9hOQgaAZAAA5QAAAuAZAcQAZAaAlAAQAmAAAZgbQAZgbAAgyQAAgegLgXQgKgYgVgNQgUgNgaAAQgjAAgaAZg");
	this.shape_5.setTransform(97.6,169.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSCBIAAhtIhjiUIApAAIAzBOIAZArIAcgtIAyhMIAoAAIhnCUIAABtg");
	this.shape_6.setTransform(71.5,169.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF66").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_7.setTransform(150,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOverView, new cjs.Rectangle(0,0,300,400), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339999").s().p("A3ifXMAAAg+tMAvFAAAMAAAA+tg");
	this.shape.setTransform(150.7,200.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,301.5,401.3), null);


// stage content:
(lib.CountGameAssets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.restartButton = new lib.RestartButton();
	this.restartButton.name = "restartButton";
	this.restartButton.parent = this;
	this.restartButton.setTransform(152,264.9,1,1,0,0,0,53.5,20.4);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2);

	this.instance = new lib.GameOverView();
	this.instance.parent = this;
	this.instance.setTransform(150,200.7,1,1,0,0,0,150,200);

	this.instance_1 = new lib.NumberBox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(416.1,-65.2,1,1,0,0,0,32.3,32.3);

	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(509,177.6,0.995,0.997,0,0,0,150.7,200.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.restartButton}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,102.5,659.1,498.2);
// library properties:
lib.properties = {
	id: '6020074A60FB3F408E4DBEF637AF25A6',
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6020074A60FB3F408E4DBEF637AF25A6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
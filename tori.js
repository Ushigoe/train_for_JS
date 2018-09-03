var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("B95CC71BD6D846258BA1159BA9853658");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.tori();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(true,'both',true,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}


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


(lib.左足 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AgKHBIgMgCIgJgFIgGgGIgIgKIgIgTQgKgbgFgpQgFgegDgjIgCgcIgVAOQgSANgKAGQggAUghAHQgUAFgQAAQgWABgTgIQgKgDgLgKIgJgKIgGgOQgDgKAAgEIAAgOIADgNIAFgLIALgTIAMgQIAbgZQAugoBBgmQAqgYA0gYIAEhaIAJh4QAGhDAGg1IAOhsIAEgQIA0gLIA8gKIASgDIAYEWIAHB/IAEBnIA2AxQAOAOAMAPQAYAgAOAeQARAnAHAgQAFAcgCATIgBAJIgDALQgGARgQAMIgLAHIgHACIgNADIgRAAIgYgFIgTgGQgUgIgOgIQgigTgagXIgCgCIgbA1IgOAdQgOAagGAHIgHAJIgKAJQgDADgEABIgJAEIgKACIgBgBgAg6DTQAEADACAEIADAFIABAIIAAAEIAAAEQABALADAUQAEAgAIAeQAKAlAKAUIACACIAIgYIAJgfIAnh8IAbhPIAyBLQAXAiAyAXIgKgTQgPgbgNgQIgQgSIhVhQIABgWQABhAADg/IAHh/IAJiAQACgfAEghIAFguIgcgDIg5gGIAHAbIAMBaQAHBEADA0QAEBEACA1QACA2AABBIAAAbIiLBFQhXAsgXANIgYAPIgNAMIgDAEQgEAFgCAFIgBABIABADQADADADACQAJAGANABQALACARgCQAagCAegQQAOgHAngcIAJgFIAHgCIAFAAQAGAAAEACg");
	this.shape.setTransform(30.9,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeF4QgWhMAAhCQAAgMgJADIgaASQg1AmgqAIQg/AMgUgfQgUggA2gsQAvglBlg0QAzgbAogSQAGljgCh9IBugFIAAH9IBBA8QAuAqAZBFQAYBCgUAIQgWAIg5geQg+ghgYgtIg8CWQgTAvgRAAQgQAAgPgyg");
	this.shape_1.setTransform(29.8,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.左足, new cjs.Rectangle(0,0,61.8,89.9), null);


(lib.地面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ABRkYQBpAKBpALQUeCMN/GZQAEACAEACEgm/AEmQAEgCAEgCQAbgOAagNQA8gfJKjhQHci2MNhUQC1gUDFgOQALACBEAGQBDAGAygDQAGAAAGAAQANAAANACQBVAFBWAH");
	this.shape.setTransform(249.6,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAAIANAAQALAAANABQgTAAgSgBg");
	this.shape_1.setTransform(255.7,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.地面, new cjs.Rectangle(-1.5,-1.6,503,61.9), null);


(lib.右足 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AAAHAQgEgBgFgDIgHgEIgKgJIgHgJIgUghIgOgcIgbg2IgCACQgbAYghASQgLAGgXAKIgTAGIgYAFQgHABgKgBIgNgDIgHgCIgLgHQgQgLgGgSIgDgLIgBgJQgCgTAFgcQAHghARglQAQghAWgeQAPgSALgLIA2gxIAEhnIAHh/IAJiAQACgeAEgiIAKhVIARACQAiAFAaAFIA0ALIAEAQIABAJIABAFIAMBeQAHA8AFA8QAGA8ADA8IAEBaQA0AYAqAYQBBAmAuAoIAbAaIASAYIAKAVIADAMIAAAPIgDAOQgCAGgEAIIgJAKQgLAJgKAFQgTAHgWgBQgQAAgUgEQgegIgjgUIgcgSIgVgPIgCAbIgHBCQgHAtgJAXQgDAKgFAJIgEAFIgEAFIgGAGIgJAEQgEACgIACIgLgCgAgtDUIAnB8IAJAfIAJAYIABgCQALgVAJgkQAIgdAEghIAEgfIAAgEIAAgEIABgHIADgGQACgEAEgDQAGgEAJACIAHACIAJAGIAbATIAaAQQAdAOAbAEQARACALgCQANgCAJgGQAEgCACgEIABgCIgBgBIgGgKIgDgEIgEgDIghgYQgPgJhfgwIiLhFIAAgbQAAhCACg1QACg2AEhCQAEg+AGg7IAHg8IAFgfIADgMQADgHABgHIg5AGIgcADIAFAuQAEAiACAeIAJCAQAEA5ADBGQADA/ABBAIABAWIgSAQIgtArIgmAnQgNAQgPAbIgKATQAWgKATgPQAVgPALgRIAyhLg");
	this.shape.setTransform(30.9,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkF7Ig8iWQgYAtg+AhQg5AegWgIQgVgIAZhCQAZhFAugqIBBg8IAAn9IBuAFQgDB9AHFjIBbAtQBlA0AvAmQA3ArgVAgQgVAfg+gMQgqgIg1gmQgVgPgFgCQgJgEAAAMQAABCgXBMQgOAygRAAQgQAAgTgvg");
	this.shape_1.setTransform(32,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.右足, new cjs.Rectangle(0,0,61.8,89.9), null);


(lib.右翼 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AiYRlQAKgjAAgnQABgfgGgrQgIg5gahZQgSg3ghhWQgZg/gjhLIh9kPIC+DoQA/BMBrCYQA7BVAVAbQAVAbAVAYIAWAWQARAPAFADIADADIABgBIACgeQACgugKhXQgJhBgQhHQgShLgXg3QgHgTgHgMIgRgdIgHgMIgBgCIgBgJQACgOATgDQAKADgBABIACACIAmArIBcBqQByB/BRBJQA+A4AuAdQAkAVAQgBQAHgBAFgFQAFgIAEgNQAGgYgBgmQgBgkgEgfQgEgegGgmIgNhEQgMg9gRhLIghiHQgfh7gsiRIgsiEQgghfgOgkQg0iOgxh1Qg/iUg0hpIgfg+IgOgaIgSgXQghglhEgpQg0gfhGggQg9gchDgYQhLgcg5gSQgggLgjgKIgigJQgZgHgIgBIAAgKIAkACIBpAQQBMAPA/AQQCdAoByA4QAlASAbASQAfAVAeAbIAcAfQANAQAJASIAjA+QBHCAA6B+QB1ECBMEUQAiB4AiCcQAMA3AQBUQARBdAGAvQAKBMACBEQACAngCAiQgEAvgKAfQgJAZgPAPQgLAMgNAEQgNAGgOgBQgVgBgXgMQgOgHgTgOQgogdhEhCQg+g+iDiQIgjgnQAOAiAQAsQAYBHAQBDQATBRACBBQABAXgCASIgEAWQgCANgHAOIgMAQQgHAIgNAGQgMAGgOAAIgMgBIgKgCIgEgBIgCgBIgCgBIgPgHQgGgDgNgIIghgaIgbgbQgYgagYggQgZgig5hTIgLgQIAKAtQAQBQACBLQAAAngGAoQgHAtgQAeg");
	this.shape.setTransform(60.8,112.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApPxkQASAABXAVQBtAaBlAhQEvBmBAB2QChElB2FNQBoElBAE2QAtDXAHBmQAODThggmQhYgjjokAIh/iPIgZgbQgEgCAQAXQAhAvAgBiQAeBcARBhQARBlgGA4QgHA/gkgOQg8gYhhiKQh/i8hVhuQA8CMAhB1QA+DhgtBsg");
	this.shape_1.setTransform(59.2,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.右翼, new cjs.Rectangle(0,0,121.6,225.7), null);


(lib.シンボル9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AksRHQgJgCgHgEQgNgHgKgOQgKgNgGgWQgEgOgBgOQgDghAEg7QAHhMAThdIAPhFIhuCkQgPAWgRANQgKAIgNAFIgPAEIgPABQgZgDgXgXQgZgcgRg0QgYhQAChZQACgxAGgkQAEgYAOg6QAniaA3inQAWhBAihcQAfhQAhhLQBEibBUiPQAnhFAwhLIAwhGIA1hDIBZhcIAggdQA1grAOgKIAkgYIAkgWQBLgqBQgbQAkgMAtgLIApgKQAXgGAPgHIAFAJIgJAGQgGAEgEABIgTAJIhxAxQhCAghKAyIghAYIgfAaQgNAKgRAQIgdAcIgcAdIhOBbIguBBIgrBFQgsBIgmBGQhRCThJCPIhKCTQgpBUgcBBQhOCzglCCQgQA8gDATQgHAoAAApQgBApAGAnQAFAqANAkQAQArAVAVQAMALAMABQALAAAMgLQAKgIAMgTIA9hrQA0hiAbgxIAig4IAPgRIAFgEIALgGQADgCAIgBQAKgBAJAEQAJAEAHAIIAGALIADALIABAEIgBATIgEAYIgIAoQgXB6gGAoQgPBigEA+QgCAhACAaIAWgaIDHkIQAiguASgWIASgTIAMgKIAPgHQAKgEAJABQATAAAPAMQAMAKAEANQAEALAAAKQABAFgCAJIgFAUIgOAhIglBLQguBdgVA1QgPArgEAbIgBAKIAOgFIAigPIAlgRQARgHATgLQBQgpA9gnQBFgtBBgxQCFhnBsh4IAHAFQhWCHiBB6Qg+A6hDAzQhFA1hIAqIglAWQgWANgPAHIgoAUIgZAJQgNAEgQABQgYABgUgLQgNgIgHgKQgGgHgHgOQgFgNgCgWIABgcQACgTAHgaIgKAMIg0BCQgRAUgOAOIgTASIgZARIgSAIIgMADIgPABQgJAAgIgDg");
	this.shape.setTransform(62.6,109.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrOXQAVg5AuhiQAphVACgLQAGgfg7BMQhvCWhpCHQiGCsATjtQAKiAA3jtQAShPhFByIiVD1QgkA1glgJQgigJgYg4QgZg4gGhPQgGhVAShPQAsjEBxkQQCKlKC5ktQCnkSDsh+QBFgmBYgdQBPgbAKgGIBaZxQhvCUijCBQifB/inBMQggAOgUAAQhCAAA6iZg");
	this.shape_1.setTransform(63.2,107.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル9, new cjs.Rectangle(0,0,125.2,219.6), null);


(lib.シンボル8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AjMCUIgYgGIAKgWQAKgVAWgcIAlgqQAogpAoghQAhgbA1gmIAugeQAKgHANgGIANgGQAJgDAGABQArALAdAmQAaAkAKAvQAFAUACAYQABAbgFAVQgBAIgDAIIgEAGIgDAEIgHAHQgHAHgOAJQgSALgYAKQgwATgoAFQgnAEgvABIgWAAQhdAAg7gOgABZiVQgHADgRAKQgRAMgZAVQggAdgsAvQgtAvgaAfQgPARgRAZIgMATQA7AGBMgHQAhgDAwgJQAegGAqgSQAYgKALgGIAOgIIAAAAIABgCQADgKAFgaQAEgUAAgSQACgugOgfQgRgogpgNIgDAAQgIAAgMAGg");
	this.shape.setTransform(22.9,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjJCKQAdhDCAhyQB9hxAeAJQBJAVAPBhQAFAhgEAjQgDAegGAJQgKAPgvAUQgvAUgkAFQg1AIg5ACIgfABQhBAAgugLg");
	this.shape_1.setTransform(23.1,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル8, new cjs.Rectangle(0,0,45.8,32.5), null);


(lib.胴体 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.シンボル8();
	this.instance.parent = this;
	this.instance.setTransform(56.9,95.2,1,1,0,0,0,22.9,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.7},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:11.2},0).wait(1).to({rotation:15,x:56.8},0).wait(1).to({rotation:10,x:56.9},0).wait(1).to({rotation:5,x:56.8},0).wait(1).to({rotation:0,x:56.9},0).wait(1).to({rotation:-5,x:56.8},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-15},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:0,x:56.9},0).wait(1).to({rotation:5,x:56.8},0).wait(1).to({rotation:10,x:56.9},0).wait(1).to({rotation:15,x:56.8},0).wait(1).to({rotation:9.9},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:-0.2,x:56.9},0).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYCsQgNgLgGgJQgNgVgIgcQgPgvgDg3QgBgcACgXQAEgeAHgWQAKgfANgSQAHgMANgJQAPgKAPAAQAOAAAPAKQANAKAHALQANASAJAgQAJAkABBCIgCA0QgDAdgGAWQgIAfgNASQgGAJgOAMQgOAJgPAAQgOgBgNgKgAgPibQgKAJgFAHQgNAQgJAbQgPAqgEA3QgBAeACAVQAEAcAIAVQAIAaAQASQAFAHAMAJQAKAFAKAAQAIAAALgHIAIgHIAIgJQAMgRALgaQAKgXAFgZQAFgYAAgbQAAgagFgYQgFgZgKgXQgKgagOgQQgGgIgKgIQgLgGgHAAQgJABgJAFg");
	this.shape.setTransform(93.3,56.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231916").s().p("Ag4B7QgXgzAAhIQAAhHAXgyQAXgzAhAAQAhAAAYAzQAXAyAABHQAABIgXAzQgYAyghAAQghAAgXgyg");
	this.shape_1.setTransform(93.6,56.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZCsQgNgLgFgJQgNgUgJgdQgOgvgDg3QgBgdACgWQADgbAHgZQAKgfAOgSQAGgLAOgKQAPgKAOAAQAPAAAPAKQAOALAGAKQANASAIAgQAJAkABBCQgBBDgJAkQgHAdgPAUQgGALgOAKQgOAJgPAAQgNgBgOgKgAgPibQgKAIgGAIQgMAQgKAbQgPArgDA2QgBAeACAVQADAaAIAXQAKAcAPAQQAGAIALAIQAKAFAJAAQAJAAAKgHIAJgHIAEgEIADgFQAOgSAKgZQALgbAEgVQAEgXABgcQgBgcgEgWQgFgZgKgXQgLgZgNgRQgHgJgKgHQgKgGgIAAQgJABgIAFg");
	this.shape_2.setTransform(48,56.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231916").s().p("Ag4B7QgXgzAAhIQAAhHAXgyQAYgzAgAAQAhAAAYAzQAXAyAABHQAABIgXAzQgYAyghAAQggAAgYgyg");
	this.shape_3.setTransform(48.2,56.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231916").s().p("ArVDtIAEhiQACgXAKhLQAThqAghXQAlhhA6hTQA+hXBPg+QBVhDBdghIAwgQIAxgLIAygIQAQgDAigCQBggGBkAQQAqAGA2ASQAsAQAuAZQBaA1BCBFQBJBLAuBWQAuBVAbBkQAZBZALBoQALBggEBkQgEBpgSBYIgKgBIgWi+QgNhpgRhRQgRhbgbhZQgehfghhOQgMgdgbg3QgZgwgWgfQg5hShKgvQgrgagogOIgigKIg5gKQgwgEgtADQgkACg3AKQhbAThSApQhSAohCA7QhCA7gxBMQguBHgkBZQgeBLgZBiIgTBbIgIAuIgSCMIgEAvIgJCPIgEBgIgKABQgri9ADjGg");
	this.shape_4.setTransform(72.6,62.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Am/mZQB4h8CpgxQCOgqCXARQEOAeCbExQCbEvgUHNI1jB4QhDrEEwk5g");
	this.shape_5.setTransform(73.1,63.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231916").s().p("Al4EjQhWgMhBg4Qg+gzgkhQQgghHgIhPQgHhNAMhKIAJgBQAbBnANAmQAWBFAiA4QAkA8AwAmQAxAmBAAUIAgAIIAQAEIAPACQAeAEAegLQA6gWAuhBQBIhoAXikIAWidIAmCfQAIAgAMAeQAKAbAQAfQAfA9AmApQAqAuAzAWQAWAKAeAGIAbADIAOABIALAAQAYgDAXgLQAYgMAYgTQAWgSAWgZQAUgVAWgcQBGhcBIiKIAJADQgGA9gZBMQgWBFghA+QgRAhgVAeQgXAhgZAZQggAgggASQgoAYgrAGIgsACQgWgCgTgDQgogIgmgSQhFgig0hEQgvg8gZhIIgLghIgPAgQgmBPgiA1QgZAlgVAYQgeAigfATQgmAZgrAEQgMACgeAAIgCAAQgLAAgcgDg");
	this.shape_6.setTransform(79.2,310.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ak1DrIgmgEQiOgVhRh5QhTh4gGjLIUnAUQgZBjhKB9QhyDDh/AAQiJAAhfh8QhQhmgRiFQgWBkgxBiQheC/h/AAIgIAAg");
	this.shape_7.setTransform(79.6,313.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,340.1);


(lib.左翼 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル9();
	this.instance.parent = this;
	this.instance.setTransform(62.6,109.8,1,1,0,0,0,62.6,109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.2,219.6);


(lib.シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.胴体();
	this.instance.parent = this;
	this.instance.setTransform(73,170.1,1,1,0,0,0,73,170.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル6, new cjs.Rectangle(0,0,146,340.1), null);


(lib.シンボル4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.左翼();
	this.instance.parent = this;
	this.instance.setTransform(62.6,109.7,1,1,0,0,0,62.6,109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:109.8,rotation:7,x:45.6,y:105.4},0).wait(1).to({rotation:14,x:28.6,y:100.9},0).wait(1).to({rotation:9.3,x:40,y:103.8},0).wait(1).to({rotation:4.7,x:51.3,y:106.9},0).wait(1).to({rotation:0,x:62.6,y:109.8},0).wait(1).to({rotation:15,x:36.1,y:89.8},0).wait(1).to({rotation:30,x:9.5,y:69.8},0).wait(1).to({rotation:15,x:36.1,y:89.8},0).wait(1).to({rotation:0,x:62.6,y:109.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.2,219.6);


(lib.シンボル3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.左足();
	this.instance.parent = this;
	this.instance.setTransform(30.9,45,1,1,0,0,0,30.9,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル3, new cjs.Rectangle(0,0,61.8,89.9), null);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.右足();
	this.instance.parent = this;
	this.instance.setTransform(30.9,45,1,1,0,0,0,30.9,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル2, new cjs.Rectangle(0,0,61.8,89.9), null);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AB6DxQgugJgpgcQgegUgfgtQgSgagGgLQgIgPgIgbQgQgvgXgcQgJgLgWgSQgYgUgJgKQgOgPgJgVQgJgVgFgSQgGgYgCgSIgBgWIABgOIACAAIADgBIACgBIABgCIgBAAIgKgDIAAgCQgBgCAEgDQADgDAEACIAEABIATALIASAOQAOAMAQATQAOATAJAPQAMAUAFARIAHAqQAFAaAHAOQAQAiAmAZIAiAXIAfAYIAeAXIAcAXQATAPAjAhQAPAOAxAoIgCAJQgaANghAAQgRAAgSgDg");
	this.shape.setTransform(24.3,201.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhgYQgjg5gwhgIgUgkIGfG8QikgSiUjtgAjWjkQACgHAMAWg");
	this.shape_1.setTransform(24.5,201.4);

	this.instance = new lib.右翼();
	this.instance.parent = this;
	this.instance.setTransform(60.8,112.8,1,1,0,0,0,60.8,112.8);

	this.instance_1 = new lib.右翼();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.8,113.4,1,1,0,0,0,60.8,112.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,121.6,226.2), null);


(lib.シンボル7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル3();
	this.instance.parent = this;
	this.instance.setTransform(30.9,46.9,1,1,0,0,0,30.9,45);

	this.instance_1 = new lib.シンボル2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.7,45,1,1,0,0,0,30.9,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル7, new cjs.Rectangle(0,0,133.6,91.8), null);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.シンボル1();
	this.instance.parent = this;
	this.instance.setTransform(60.8,113.1,1,1,0,0,0,60.8,113.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15,x:84.9,y:96.1},0).wait(1).to({rotation:-30,x:108.9,y:79.1},0).wait(1).to({rotation:-20,x:92.9,y:90.4},0).wait(1).to({rotation:-10,x:76.9,y:101.8},0).wait(1).to({rotation:0,x:60.8,y:113.1},0).wait(1).to({rotation:-21.6,x:98.8,y:78.7},0).wait(1).to({rotation:-43.1,x:136.7,y:44.1},0).wait(1).to({rotation:-21.6,x:98.8,y:78.7},0).wait(1).to({rotation:0,x:60.8,y:113.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.6,226.2);


// stage content:
(lib.tori = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 右翼
	this.instance = new lib.シンボル5();
	this.instance.parent = this;
	this.instance.setTransform(766.5,352.5,1,1,0,0,0,60.8,113.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:127.6,regY:73.1,x:833.3,y:304.5},0).wait(1).to({y:296.5},0).wait(1).to({y:288.5},0).wait(1).to({y:280.5},0).wait(1).to({y:272.5},0).wait(1).to({y:282.5},0).wait(1).to({y:292.5},0).wait(1).to({y:302.5},0).wait(1).to({y:312.5},0).wait(1).to({y:306.5},0).wait(1).to({y:300.5},0).wait(1).to({y:294.5},0).wait(1).to({y:288.5},0).wait(1).to({y:282.5},0).wait(1).to({y:288.5},0).wait(1).to({y:294.5},0).wait(1).to({y:300.5},0).wait(1).to({y:306.5},0).wait(1).to({y:312.5},0).wait(1));

	// 左翼
	this.instance_1 = new lib.シンボル4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(514.5,364.6,1,1,0,0,0,62.6,109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:12.8,regY:82.9,x:464.7,y:329.7},0).wait(1).to({y:321.7},0).wait(1).to({y:313.7},0).wait(1).to({y:305.7},0).wait(1).to({y:297.7},0).wait(1).to({y:307.7},0).wait(1).to({y:317.7},0).wait(1).to({y:327.7},0).wait(1).to({y:337.7},0).wait(1).to({y:331.7},0).wait(1).to({y:325.7},0).wait(1).to({y:319.7},0).wait(1).to({y:313.7},0).wait(1).to({y:307.7},0).wait(1).to({y:313.7},0).wait(1).to({y:319.7},0).wait(1).to({y:325.7},0).wait(1).to({y:331.7},0).wait(1).to({y:337.7},0).wait(1));

	// 胴体
	this.instance_2 = new lib.シンボル6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(637.5,301.6,1,1,0,0,0,73,170.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:170,y:293.5},0).wait(1).to({y:285.5},0).wait(1).to({y:277.5},0).wait(1).to({y:269.5},0).wait(1).to({y:261.5},0).wait(1).to({y:271.5},0).wait(1).to({y:281.5},0).wait(1).to({y:291.5},0).wait(1).to({y:301.5},0).wait(1).to({y:295.5},0).wait(1).to({y:289.5},0).wait(1).to({y:283.5},0).wait(1).to({y:277.5},0).wait(1).to({y:271.5},0).wait(1).to({y:277.5},0).wait(1).to({y:283.5},0).wait(1).to({y:289.5},0).wait(1).to({y:295.5},0).wait(1).to({y:301.5},0).wait(1));

	// 足
	this.instance_3 = new lib.シンボル7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(638.9,511.5,1,1,0,0,0,66.8,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:503.5},0).wait(1).to({y:495.5},0).wait(1).to({y:487.5},0).wait(1).to({y:479.5},0).wait(1).to({y:471.5},0).wait(1).to({y:481.5},0).wait(1).to({y:491.5},0).wait(1).to({y:501.5},0).wait(1).to({y:511.5},0).wait(1).to({y:505.5},0).wait(1).to({y:499.5},0).wait(1).to({y:493.5},0).wait(1).to({y:487.5},0).wait(1).to({y:481.5},0).wait(1).to({y:487.5},0).wait(1).to({y:493.5},0).wait(1).to({y:499.5},0).wait(1).to({y:505.5},0).wait(1).to({y:511.5},0).wait(1));

	// 地面
	this.instance_4 = new lib.地面();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640.5,623.5,1,1,0,0,0,250,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1029,515.5,503,523);
// library properties:
lib.properties = {
	id: 'B95CC71BD6D846258BA1159BA9853658',
	width: 1280,
	height: 768,
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
an.compositions['B95CC71BD6D846258BA1159BA9853658'] = {
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
//establishes WWT Global variable (Class)
// Establishes contents of WWT
var WWT = {};
		healthText: null
		healthNum: null
		foodText: null
		foodNum: null
		energyText: null
		energyNum: null
		timeText: null
		timeNum: null
		anonymityText: null
		anonymityNum: null
		arrowUp: null
		upText: null
		arrowLeft: null
		leftText: null
		arrowRight: null
		rightText: null
		background: null
		Text: null
		UI: null
		music: null

//Initiate Boot Function
WWT.Boot = function() {};
WWT.Boot.prototype = {
		init: function() {
				console.log('Boot: init');
		},
		// Create Title Screen
		preload: function() {
				console.log('Boot: preload');
				var text1 = this.add.text(0, 0, 'World War Trail\n', {fontSize: '50px', fill: 'black'});
				var text2 = this.add.text(0, 0, 'Press Space to Start\n', {fontSize: '50px', fill: 'black'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,250,1000,100);
		},
		// Background Color
		create: function() {
				this.stage.backgroundColor = '#859994';
		},
		//start Instructions.js
		update: function() {
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Instructions');
				}
		}
};
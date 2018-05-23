/*function Boot() {};

Boot.prototype = {
		preload: function() {

		},
		create: function() {
				this.game.state.start('preload');
		}
};*/

function Boot() {};
Boot.prototype = {
		init: function() {
				console.log('Boot: init');
		},
		preload: function() {
				console.log('Boot: preload');
				var text1 = this.add.text(0, 0, 'The Best Game\n', {fontSize: '50px', fill: 'black'});
				var text2 = this.add.text(0, 0, 'Press Space to Start\n', {fontSize: '50px', fill: 'black'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,250,1000,100);
		},
		create: function() {
				this.stage.backgroundColor = '#859994';
		},
		update: function() {
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Preloader');
				}
		}
};
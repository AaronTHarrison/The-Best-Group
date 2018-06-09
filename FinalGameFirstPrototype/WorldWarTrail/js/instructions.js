WWT.Instructions = function() {
		var text1;
		var text2;
};

// tell player how to play, then move on to first scenario
WWT.Instructions.prototype = {
		init: function() {
				console.log('Instructions: init');
		},
		preload: function() {
				console.log('Instructions: preload');
				text1 = this.add.text(0, 0, 'You are a WW2 paratrooper who has crashed behind enemy lines. And man, does it suck. You must choose your actions wisely to survive.\n', {fontSize: '30px', fill: 'black', wordWrap : true, wordWrapWidth: 1000});
				text2 = this.add.text(0, 0, 'Press space to proceed, then press the arrow corresponding to your choice.\nGood luck...', {fontSize: '30px', fill: 'black'});
				text1.setTextBounds(0,600,1000,100);
				text2.setTextBounds(0,720,1000,100);
		},
		create: function() {
				this.stage.backgroundColor = '#859994';
		},
		update: function() {
				// make the text move up the screen, fade out when spacebar pressed
				text1.position.y -= 1;
				text2.position.y -= 1;
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						game.camera.fade(0x000000, 1000);
						game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Preloader')});
				}
		}
};
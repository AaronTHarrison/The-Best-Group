Gameover = function() {};
Gameover.prototype = {
		preload: function() {
				console.log('Gameover: preload');
				var text1 = this.add.text(0,25, 'You failed, soldier.', {fontsize: '50px', fill: 'white'});
				var text2 = this.add.text(0,50, 'Press spacebar to hopefully do better', {fontsize: '40px', fill: 'white'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,250,1000,100);
		},
		create: function() {
				console.log('Gameover: create');
				this.stage.backgroundColor = '#000000';
		},
		update: function() {
				console.log('Gameover: update');
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Preloader');
				}
		}
};
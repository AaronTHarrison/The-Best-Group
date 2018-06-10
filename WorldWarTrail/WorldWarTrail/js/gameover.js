WWT.Gameover = function() {};
WWT.Gameover.prototype = {
		preload: function() {
				console.log('Gameover: preload');
				var text1 = this.add.text(0,25, 'You failed, soldier.', {fontSize: '50px', fill: 'white'});
				var text2 = this.add.text(0,50, 'Press spacebar to hopefully do better', {fontSize: '40px', fill: 'white'});
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

WWT.YouWin = function() {};
WWT.YouWin.prototype = {
		preload: function(){
				console.log('YouWin: preload');
				var text1 = this.add.text(0,25, 'After a gripping journey you have successfully escaped from behind \nenemy lines! Congratulations!', {fontSize: '60px', fill: 'white'});
				var text2 = this.add.text(0,100, 'press spacebar to play again', {fontSize: '30px', fill: 'white'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,200,1000,100);
		},
		create: function(){
				console.log('YouWin: create');
				this.stage.backgroundColor = '#000000';
		},
		update: function(){
				console.log('YouWin: update');
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Preloader');
				}
		}
}
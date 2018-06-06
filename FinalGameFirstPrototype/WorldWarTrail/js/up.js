function Up() {};
Up.prototype = {
		preload: function() {
				console.log('Up: preload');
				var text1 = this.add.text(0,-50, 'You move forward to investigate the scout, unfortunately\nscouts are good at seeing things so he spots you and shoots you', {fontsize: '50px', fill: 'white'});
				var text2 = this.add.text(0,50, 'Press spacebar to not get shot horribly again', {fontsize: '40px', fill: 'white'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,250,1000,100);
		},
		create: function() {
				console.log('Up: create');
				this.stage.backgroundColor = '#000000';
		},
		update: function() {
				console.log('Up: update');
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Preloader');
				}
		}
};
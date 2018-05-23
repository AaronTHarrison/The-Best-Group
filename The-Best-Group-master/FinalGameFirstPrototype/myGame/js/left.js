function Left() {};
Left.prototype = {
		preload: function() {
				console.log('Left: preload');
				var text1 = this.add.text(0,-50, 'You avoid the enemy scout and after a gruesome journey encountering many \nfoes you finally made it back home, truly it was because you choose \nthe left path you masterful player!', {fontsize: '50px', fill: 'black'});
				var text2 = this.add.text(0,50, 'Press spacebar to challenge yourself again', {fontsize: '40px', fill: 'black'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,250,1000,100);
		},
		create: function() {
				console.log('Left: create');
				this.stage.backgroundColor = '#d5e5e4';
		},
		update: function() {
				console.log('Left: update');
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Preloader');
				}
		}
};
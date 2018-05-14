var Gooey = { };

Gooey.Boot = function() {};
Gooey.Boot.prototype = {
		inti: function() {
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

Gooey.Preloader = function() {};
Gooey.Preloader.prototype = {
		preload: function() {			//preload assets
				console.log('GamePlay: preload');
				this.load.path = 'assets/audio/';
				this.load.audio('footsteps', ['footsteps.ogg']);
		},
		create: function() {
				console.log('Preloader: create');
				this.stage.backgroundColor = '#859994';
		},
		update: function() {
				if(this.cache.isSoundDecoded('footsteps')){
						this.state.start('Start');		// go to next state
				}
		}
};

Gooey.Start = function() {
		var resources;
		var health;
		var ammo;
		var stamina;
		var time;
		var anonymity;
		var forwardArrow;
		var leftArrow;
		var rightArrow;
};
Gooey.Start.prototype = {
		preload: function() {
				console.log('Play: preload');
		},
		create: function() {
				console.log('Play: create');

				// resource box to contain resource meters
				resources = game.add.graphics(0, 0);
				resources.beginFill(0x0c342a, 1);
				resources.drawRect(5, 5, 300, 210);
				window.graphics = resources;

				health = game.add.graphics(0, 0);
				health.beginFill(0xff0000, 1);
				health.drawRect(10, 30, 280, 10);
				window.graphics = health;

				ammo = game.add.graphics(0, 0);
				ammo.beginFill(0xff0000, 1);
				ammo.drawRect(10, 70, 280, 10);
				window.graphics = ammo;

				stamina = game.add.graphics(0, 0);
				stamina.beginFill(0xff0000, 1);
				stamina.drawRect(10, 110, 280, 10);
				window.graphics = stamina;

				time = game.add.graphics(0, 0);
				time.beginFill(0xff0000, 1);
				time.drawRect(10, 150, 280, 10);
				window.graphics = time;

				anonymity = game.add.graphics(0, 0);
				anonymity.beginFill(0xff0000, 1);
				anonymity.drawRect(10, 190, 280, 10);
				window.graphics = anonymity;

				this.add.text(10,0, 'Health', {fontsize: '12px', fill: 'white'});
				this.add.text(10,40, 'Ammo', {fontsize: '12px', fill: 'white'});
				this.add.text(10,80, 'Stamina', {fontsize: '12px', fill: 'white'});
				this.add.text(10,120, 'Time', {fontsize: '12px', fill: 'white'});
				this.add.text(10,160, 'Anonymity', {fontsize: '12px', fill: 'white'});

				forwardArrow = game.add.graphics(0, 0);
				forwardArrow.beginFill(0xdee5df);
				forwardArrow.moveTo(500, 450);
				forwardArrow.lineTo(520, 490);
				forwardArrow.lineTo(510, 490);
				forwardArrow.lineTo(510, 520);
				forwardArrow.lineTo(490, 520);
				forwardArrow.lineTo(490, 490);
				forwardArrow.lineTo(480, 490);
				forwardArrow.lineTo(500, 450);
				forwardArrow.endFill();

				leftArrow = game.add.graphics(0, 0);
				leftArrow.beginFill(0xdee5df);
				leftArrow.moveTo(400, 550);
				leftArrow.lineTo(440, 530);
				leftArrow.lineTo(440, 540);
				leftArrow.lineTo(470, 540);
				leftArrow.lineTo(470, 560);
				leftArrow.lineTo(440, 560);
				leftArrow.lineTo(440, 570);
				leftArrow.lineTo(400, 550);
				leftArrow.endFill();

				rightArrow = game.add.graphics(0, 0);
				rightArrow.beginFill(0xdee5df);
				rightArrow.moveTo(600, 550);
				rightArrow.lineTo(560, 530);
				rightArrow.lineTo(560, 540);
				rightArrow.lineTo(530, 540);
				rightArrow.lineTo(530, 560);
				rightArrow.lineTo(560, 560);
				rightArrow.lineTo(560, 570);
				rightArrow.lineTo(600, 550);
				rightArrow.endFill();

				//game.camera.onFadeComplete.add(resetFade, this);

		},
		/*resetFade: function() {
				game.camera.resetFX();
		},*/
		update: function() {
				var cursors = this.input.keyboard.createCursorKeys();
				var feet = this.add.audio('footsteps');
				if(cursors.up.isDown) {
						feet.play('', 0, 0.25, false);
						game.camera.fade(0x000000, 1000);
						game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Up')});
				}
				if(cursors.left.isDown) {
						feet.play('', 0, 0.25, false);
						game.camera.fade(0x000000, 1000);
						game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Left')});
				}
				if(cursors.right.isDown) {
						feet.play('', 0, 0.25, false);
						game.camera.fade(0x000000, 1000);
						game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Right')});						
				}
		}
		
};

Gooey.Up = function() {};
Gooey.Up.prototype = {
		preload: function() {
				console.log('Up: preload');
				var text1 = this.add.text(0,0, 'You went forward and got shot...', {fontsize: '50px', fill: 'white'});
				var text2 = this.add.text(0,0, 'Press space to try again', {fontsize: '40px', fill: 'white'});
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

Gooey.Left = function() {};
Gooey.Left.prototype = {
		preload: function() {
				console.log('Left: preload');
				var text1 = this.add.text(0,0, 'You went left and survived!', {fontsize: '50px', fill: 'black'});
				var text2 = this.add.text(0,0, 'Press space to go again', {fontsize: '40px', fill: 'black'});
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

Gooey.Right = function() {};
Gooey.Right.prototype = {
		preload: function() {
				console.log('Right: preload');
				var text1 = this.add.text(0,0, 'You went right and got shot...', {fontsize: '50px', fill: 'white'});
				var text2 = this.add.text(0,0, 'Press space to try again', {fontsize: '40px', fill: 'white'});
				text1.setTextBounds(0,200,1000,100);
				text2.setTextBounds(0,250,1000,100);
		},
		create: function() {
				console.log('Right: create');
				this.stage.backgroundColor = '#000000';
		},
		update: function() {
				console.log('Right: update');
				if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						this.state.start('Preloader');
				}
		}
}

var game = new Phaser.Game(1000, 600, Phaser.AUTO);
game.state.add('Boot', Gooey.Boot);
game.state.add('Preloader', Gooey.Preloader);
game.state.add('Start', Gooey.Start);
game.state.add('Up', Gooey.Up);
game.state.add('Left', Gooey.Left);
game.state.add('Right', Gooey.Right);
game.state.start('Boot');
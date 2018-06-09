function Start() {
		var resources;
		var health;
		var ammo;
		var stamina;
		var time;
		var anonymity;
		var forwardArrow;
		var leftArrow;
		var rightArrow;
		var background;
		var scoutText;
};
Start.prototype = {
		preload: function() {
				console.log('Play: preload');
				this.load.image('scout', 'assets/img/Scout.png');
		},
		create: function() {
				console.log('Play: create');
				background = this.add.sprite(0, 0, 'scout');
				background.scale.setTo(1.3, 1.2);

				//scoutText = this.add.text(300, 200, 'Enemy Scout spotted', {font: '45px Arial', fill: '#999'});
				//this.add.text(20, 10, 'scoutText', {fontsize: '12px', fill: 'white'});

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

				scoutText = this.add.text(550, 40, 'Enemy Scout', {fontsize: '24px', fill: 'red'});
				scoutText.anchor.set(0.5, 0.5);

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
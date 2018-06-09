WWT.Scenario1 = function() {};
WWT.Scenario1.prototype = {
		preload: function(){
				console.log("Scenario1: preload");
		},
		create: function(){
				// first scenario in all runs: scout
				this.background = this.add.sprite(0, 0, 'scout');
				this.background.scale.setTo(0.3, 0.3);

				resources = game.add.graphics(0, 0);
				resources.beginFill(0x0c342a, 1);
				resources.drawRect(5, 5, 220, 160);
				window.graphics = resources;

				// set values
				WWT.healthNum = 5;
				WWT.energyNum = 5;
				WWT.foodNum = 5;
				WWT.timeNum = 5;
				WWT.anonymityNum = 5;

				// add text for values
				WWT.healthText = this.add.text(10, 10, 'Health: ' + WWT.healthNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.energyText = this.add.text(10, 40, 'Energy: ' + WWT.energyNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.foodText = this.add.text(10, 70, 'Food: ' + WWT.foodNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.anonymityText = this.add.text(10, 100, 'Anonymity: ' + WWT.anonymityNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.timeText = this.add.text(10, 130, 'Time: ' + WWT.timeNum + "/5", {fontsize: '12px', fill: 'white'});

				//this.energy = this.add.sprite(10, 60, 'energy-5');
				//this.food = this.add.sprite(10, 110, 'food-5');
				//this.time = this.add.sprite(10, 160, 'time-5');
				//this.anonymity = this.add.sprite(10, 210, 'anonymity-5');

				// create arrows
				WWT.arrowUp = this.add.sprite(470, 450, 'arrowUp');
				WWT.arrowLeft = this.add.sprite(370, 500, 'arrowLeft');
				WWT.arrowRight = this.add.sprite(570, 500, 'arrowRight');

				WWT.Text = this.add.text(270, 10, 'As you leave your landing site, you spot movement in the distance. Enemy scout spotted!', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
				WWT.upText = this.add.text(0, 0, 'Sneak past', {fontSize: '10px', fill: 'black'});
				WWT.upText.setTextBounds(440, 430, 50, 10);
				WWT.leftText = this.add.text(0, 0, 'OPEN FIRE!', {fontSize: '10px', fill: 'black'});
				WWT.leftText.setTextBounds(350, 470, 50, 10);
				WWT.rightText = this.add.text(0, 0, 'Stand still and wait for him to pass', {fontSize: '10px', fill: 'black'});
				WWT.rightText.setTextBounds(580, 470, 50, 10);
		},
		update: function(){		// create cursor objects, update text, check for key input, adjust variable values accordingly, go to next state
			    //console.log(WWT.healthNum);
				var cursors = this.input.keyboard.createCursorKeys();
				var feet = this.add.audio('footsteps');

				// update text for values
				WWT.healthText.text = 'Health: ' + WWT.healthNum + '/5';
				WWT.energyText.text = 'Energy: ' + WWT.energyNum + '/5';
				WWT.foodText.text = 'Food: ' + WWT.foodNum + '/5';
				WWT.anonymityText.text = 'Anonymity: ' + WWT.anonymityNum + '/5';
				WWT.timeText.text = 'Time: ' + WWT.timeNum + '/5';
				if(cursors.up.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						WWT.Text = this.add.text(270, 10, 'You were spotted! The scout ran away, probably to call for backup.\n-2 anonymity', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.anonymity.destroy();
						WWT.anonymityNum -= 2;
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						if(WWT.healthNum == 0 || WWT.energyNum == 0 || WWT.foodNum == 0 || WWT.timeNum == 0 || WWT.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario2')});

						}
				}
				if(cursors.left.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						WWT.Text = this.add.text(270, 10, 'You are wounded during the firefight, but you manage to kill the Nazi bastard!\n-1 anonymity -1 health', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.anonymity.destroy();
						WWT.anonymityNum -= 1;
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-4');
						//this.health.destroy();
						WWT.healthNum -= 1;
						//this.health = this.add.sprite(10, 10, 'health-2');
						if(WWT.healthNum == 0 || WWT.energyNum == 0 || WWT.foodNum == 0 || WWT.timeNum == 0 || WWT.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
				if(cursors.right.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						WWT.Text = this.add.text(270, 10, 'After some time the scout eventually leaves.\n-1 time', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//WWT.time.destroy();
						WWT.timeNum -= 1;
						//WWT.anonymity = this.add.sprite(10, 210, 'time-4');
						if(WWT.healthNum == 0 || WWT.energyNum == 0 || WWT.foodNum == 0 || WWT.timeNum == 0 || WWT.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
		}
};

WWT.Scenario2 = function() {};
WWT.Scenario2.prototype = {
		preload: function(){
				console.log("Scenario2: preload");
		},
		create: function(){
				// second scenario in all runs
				this.background = this.add.sprite(0, 0, 'minefield');
				this.background.scale.setTo(1.5, 1.5);

				// recreate all of the UI text and images
				resources = game.add.graphics(0, 0);
				resources.beginFill(0x0c342a, 1);
				resources.drawRect(5, 5, 220, 160);
				window.graphics = resources;

				WWT.healthText = this.add.text(10, 10, 'Health: ' + WWT.healthNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.energyText = this.add.text(10, 40, 'Energy: ' + WWT.energyNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.foodText = this.add.text(10, 70, 'Food: ' + WWT.foodNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.anonymityText = this.add.text(10, 100, 'Anonymity: ' + WWT.anonymityNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.timeText = this.add.text(10, 130, 'Time: ' + WWT.timeNum + "/5", {fontsize: '12px', fill: 'white'});

				//if(this.health.parent){
			    //		this.add.existing(this.health);
			    //}

				this.Text = this.add.text(270, 10, 'As you leave your landing site, you spot movement in the distance. Enemy scout spotted!', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'Sneak past', {fontSize: '10px', fill: 'white'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'OPEN FIRE!', {fontSize: '10px', fill: 'white'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Stand still and wait for him to pass', {fontSize: '10px', fill: 'white'});
				this.rightText.setTextBounds(580, 470, 50, 10);
		},
		update: function(){		// create cursor objects, update text, check for key input, adjust variable values accordingly, go to next state
				var cursors = this.input.keyboard.createCursorKeys();
				var feet = this.add.audio('footsteps');

				// update variable values
				WWT.healthText.text = 'Health: ' + WWT.healthNum + '/5';
				WWT.energyText.text = 'Energy: ' + WWT.energyNum + '/5';
				WWT.foodText.text = 'Food: ' + WWT.foodNum + '/5';
				WWT.anonymityText.text = 'Anonymity: ' + WWT.anonymityNum + '/5';
				WWT.timeText.text = 'Time: ' + WWT.timeNum + '/5';

				if(cursors.up.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'You were spotted! The scout ran away, probably to call for backup.\n-2 anonymity', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.anonymity.destroy();
						this.anonymityNum -= 2;
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario2')});

						}
				}
				if(cursors.left.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'You are wounded during the firefight, but you manage to kill the Nazi bastard!\n-1 anonymity -1 health', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						this.anonymityNum -= 1;
						this.healthNum -= 1;
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
				if(cursors.right.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'After some time the scout eventually leaves.\n-1 time', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.time.destroy();
						this.timeNum -= 1;
						//this.anonymity = this.add.sprite(10, 210, 'time-4');
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
		}
};

WWT.Scenario3 = function() {};
WWT.Scenario3.prototype = {
		preload: function(){
				console.log("Scenario3: preload");
		},
		create: function(){
				// second scenario in all runs
				this.background = this.add.sprite(0, 0, 'minefield');
				this.background.scale.setTo(1.5, 1.5);

				// recreate all of the UI text and images
				resources = game.add.graphics(0, 0);
				resources.beginFill(0x0c342a, 1);
				resources.drawRect(5, 5, 220, 160);
				window.graphics = resources;

				WWT.healthText = this.add.text(10, 10, 'Health: ' + WWT.healthNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.energyText = this.add.text(10, 40, 'Energy: ' + WWT.energyNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.foodText = this.add.text(10, 70, 'Food: ' + WWT.foodNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.anonymityText = this.add.text(10, 100, 'Anonymity: ' + WWT.anonymityNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.timeText = this.add.text(10, 130, 'Time: ' + WWT.timeNum + "/5", {fontsize: '12px', fill: 'white'});

				//if(this.health.parent){
			    //		this.add.existing(this.health);
			    //}

				this.Text = this.add.text(270, 10, 'As you leave your landing site, you spot movement in the distance. Enemy scout spotted!', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'Sneak past', {fontSize: '10px', fill: 'white'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'OPEN FIRE!', {fontSize: '10px', fill: 'white'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Stand still and wait for him to pass', {fontSize: '10px', fill: 'white'});
				this.rightText.setTextBounds(580, 470, 50, 10);
		},
		update: function(){		// create cursor objects, update text, check for key input, adjust variable values accordingly, go to next state
				var cursors = this.input.keyboard.createCursorKeys();
				var feet = this.add.audio('footsteps');

				// update variable values
				WWT.healthText.text = 'Health: ' + WWT.healthNum + '/5';
				WWT.energyText.text = 'Energy: ' + WWT.energyNum + '/5';
				WWT.foodText.text = 'Food: ' + WWT.foodNum + '/5';
				WWT.anonymityText.text = 'Anonymity: ' + WWT.anonymityNum + '/5';
				WWT.timeText.text = 'Time: ' + WWT.timeNum + '/5';

				if(cursors.up.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'You were spotted! The scout ran away, probably to call for backup.\n-2 anonymity', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.anonymity.destroy();
						this.anonymityNum -= 2;
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario2')});

						}
				}
				if(cursors.left.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'You are wounded during the firefight, but you manage to kill the Nazi bastard!\n-1 anonymity -1 health', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						this.anonymityNum -= 1;
						this.healthNum -= 1;
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
				if(cursors.right.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'After some time the scout eventually leaves.\n-1 time', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.time.destroy();
						this.timeNum -= 1;
						//this.anonymity = this.add.sprite(10, 210, 'time-4');
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
		}
};

WWT.Scenario4 = function() {};
WWT.Scenario4.prototype = {
		preload: function(){
				console.log("Scenario4: preload");
		},
		create: function(){
				// second scenario in all runs
				this.background = this.add.sprite(0, 0, 'minefield');
				this.background.scale.setTo(1.5, 1.5);

				// recreate all of the UI text and images
				resources = game.add.graphics(0, 0);
				resources.beginFill(0x0c342a, 1);
				resources.drawRect(5, 5, 220, 160);
				window.graphics = resources;

				WWT.healthText = this.add.text(10, 10, 'Health: ' + WWT.healthNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.energyText = this.add.text(10, 40, 'Energy: ' + WWT.energyNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.foodText = this.add.text(10, 70, 'Food: ' + WWT.foodNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.anonymityText = this.add.text(10, 100, 'Anonymity: ' + WWT.anonymityNum + "/5", {fontsize: '12px', fill: 'white'});
				WWT.timeText = this.add.text(10, 130, 'Time: ' + WWT.timeNum + "/5", {fontsize: '12px', fill: 'white'});

				//if(this.health.parent){
			    //		this.add.existing(this.health);
			    //}

				this.Text = this.add.text(270, 10, 'As you leave your landing site, you spot movement in the distance. Enemy scout spotted!', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'Sneak past', {fontSize: '10px', fill: 'white'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'OPEN FIRE!', {fontSize: '10px', fill: 'white'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Stand still and wait for him to pass', {fontSize: '10px', fill: 'white'});
				this.rightText.setTextBounds(580, 470, 50, 10);
		},
		update: function(){		// create cursor objects, update text, check for key input, adjust variable values accordingly, go to next state
				var cursors = this.input.keyboard.createCursorKeys();
				var feet = this.add.audio('footsteps');

				// update variable values
				WWT.healthText.text = 'Health: ' + WWT.healthNum + '/5';
				WWT.energyText.text = 'Energy: ' + WWT.energyNum + '/5';
				WWT.foodText.text = 'Food: ' + WWT.foodNum + '/5';
				WWT.anonymityText.text = 'Anonymity: ' + WWT.anonymityNum + '/5';
				WWT.timeText.text = 'Time: ' + WWT.timeNum + '/5';

				if(cursors.up.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'You were spotted! The scout ran away, probably to call for backup.\n-2 anonymity', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.anonymity.destroy();
						this.anonymityNum -= 2;
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario2')});

						}
				}
				if(cursors.left.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'You are wounded during the firefight, but you manage to kill the Nazi bastard!\n-1 anonymity -1 health', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						this.anonymityNum -= 1;
						this.healthNum -= 1;
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
				if(cursors.right.isDown) {
						feet.play('', 0, 0.25, false);
						this.Text.destroy();
						this.Text = this.add.text(270, 10, 'After some time the scout eventually leaves.\n-1 time', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						//this.time.destroy();
						this.timeNum -= 1;
						//this.anonymity = this.add.sprite(10, 210, 'time-4');
						if(this.healthNum == 0 || this.energyNum == 0 || this.foodNum == 0 || this.timeNum == 0 || this.anonymityNum == 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario2')});
						}
				}
		}
};
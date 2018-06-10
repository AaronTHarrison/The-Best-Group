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
						var rand = Math.floor(Math.random()*2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You were spotted! The scout ran away, probably to call for backup.\n-3 anonymity', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							//this.anonymity.destroy();
							WWT.anonymityNum -= 3;
					    }else{
					    	WWT.Text = this.add.text(270, 10, 'You managed to sneak away from the spy undetected, well done!', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
					    }
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
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
						var rand = Math.floor(Math.random()*2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You are wounded during the fierce firefight, but you manage to kill the Nazi bastard!\n-2 to health, -1 to energy', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							//this.anonymity.destroy();
							WWT.energyNum -= 1;
							//this.anonymity = this.add.sprite(10, 210, 'anonymity-4');
							//this.health.destroy();
							WWT.healthNum -= 2;
						}else{
							WWT.Text = this.add.text(270, 10, 'You are wounded during the fierce firefight, and the nazi bastard escapes! Crap!\n-3 to health, -3 to anonymity, -2 to energy', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							WWT.healthNum -= 3;
							WWT.anonymityNum -= 3;
							WWT.energyNum -= 2;
						}
						//this.health = this.add.sprite(10, 10, 'health-2');
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
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
						var rand = Math.floor(Math.random()*2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'After some time the scout eventually leaves.\n-1 time, -1 to food', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							//WWT.time.destroy();
							WWT.timeNum -= 1;
							WWT.foodNum -= 1;
						}else{
							WWT.Text = this.add.text(270, 10, 'As you wait the scout spots you and leaves... You need to get a move on now...\n-3 to anonymity', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							WWT.anonymityNum -= 3;
						}
						//WWT.anonymity = this.add.sprite(10, 210, 'time-4');
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
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
				this.background = this.add.sprite(0, 0, 'campsite');
				this.background.scale.setTo(0.4, 0.32);

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
			    //create arrow keys
			    WWT.arrowUp = this.add.sprite(470, 450, 'arrowUp');
				WWT.arrowLeft = this.add.sprite(370, 500, 'arrowLeft');
				WWT.arrowRight = this.add.sprite(570, 500, 'arrowRight');

				WWT.Text = this.add.text(270, 10, 'After that stressful encounter with the scout you need to sit down and camp out. What are you going to be?', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'Get some shut eye', {fontSize: '10px', fill: 'white'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'Start a fire', {fontSize: '10px', fill: 'white'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Go hunting', {fontSize: '10px', fill: 'white'});
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

				if(cursors.up.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You get to experience a wonderful sleep on a terrible bed you put together from the natural world, it is as wonderful as you think.\n-1 to energy, -1 to food, -1 to time', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							//this.anonymity.destroy();
							WWT.energyNum -= 1;
							WWT.foodNum -= 1;
							WWT.timeNum -= 1;
						}else{
							WWT.Text = this.add.text(270, 10, 'You manage to get some good quality sleep \n-1 to food, -1 to time, +1 to energy', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							WWT.foodNum -= 1;
							WWT.timeNum -= 1;
							WWT.energyNum += 1;
						}
						//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario3')});

						}
				}
				if(cursors.left.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'After struggle you light a fire and get some comfort, of course the smoke will draw people closer. \n-2 to anonymity, -1 to time, -2 to energy', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							WWT.anonymityNum -= 2;
							WWT.timeNum -= 1;
							WWT.energyNum -= 2;
							//WWT.foodNum -= 1;
						}else{
							WWT.Text = this.add.text(270, 10, 'You light a raging fire!, So raging that it actually burns your hands. \n-2 to anonymity, -2 to health, -1 to time', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});	
							WWT.anonymityNum -= 2;
							WWT.healthNum -= 2;
							WWT.timeNum -= 1;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario3')});
						}
				}
				if(cursors.right.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You muster your energy and manage to hunt and gather some food for the night. \n+1 to health, -2 to energy, +1 to food, -1 to time', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							//this.time.destroy();
							WWT.healthNum += 1;
							WWT.energyNum -= 2;
							WWT.timeNum -= 1;
							WWT.foodNum += 1;
						}else{
							WWT.Text = this.add.text(270, 10, 'You unsuccessfully hunt... Now you are hungry\n-1 to time, -2 to energy, -1 to food', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							WWT.timeNum -= 1;
							WWT.energyNum -= 2;
							WWT.foodNum -= 1;
						}
						//this.anonymity = this.add.sprite(10, 210, 'time-4');
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario3')});
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
				this.background = this.add.sprite(0, 0, 'river');
				this.background.scale.setTo(0.5, 0.5);

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
			    WWT.arrowUp = this.add.sprite(470, 450, 'arrowUp');
				WWT.arrowLeft = this.add.sprite(370, 500, 'arrowLeft');
				WWT.arrowRight = this.add.sprite(570, 500, 'arrowRight');

				WWT.Text = this.add.text(270, 10, 'You come across a great river, the water looking particularly dangerous, to the side you can spot a old broken looking boat\nwhat do you do?', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'I got this, lets swim!', {fontSize: '10px', fill: 'black'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'We should go around', {fontSize: '10px', fill: 'black'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Boat adventure!', {fontSize: '10px', fill: 'black'});
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

				if(cursors.up.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You swim through the water and barely make it to the opposite shore, that was exhausitng and took a while!\n-3 to energy, -1 to time', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							//this.anonymity.destroy();
							WWT.energyNum -= 3;
							WWT.timeNum -= 1;
							//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						}else{
							WWT.Text = this.add.text(270, 10, 'Somehow swimming through the river has spontaneously given you dysentery', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							WWT.healthNum -= 10;
							WWT.energyNum -= 10;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario4')});

						}
				}
				if(cursors.left.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'Seriously that river looks dangerous! Of course moving away takes a long time and when you were not looking some ants got into your food!\n-2 to time, -2 to food,', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							WWT.timeNum -= 2;
							WWT.foodNum -= 2;
						}else{
							WWT.Text = this.add.text(270, 10, 'As you run around the outskirts of the river you find an old bridge crossing safely, you have made good time and made the right choice!\n-1 to energy +1 to time', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							WWT.energyNum -= 1;
							WWT.timeNum += 1;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario4')});
						}
				}
				if(cursors.right.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You climb into the boat and set off, halfway through the boat breaks forcing you to scamper to the shore! In your rush you left some of your rations in the boat \n-1 to energy, -2 to food', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							//this.time.destroy();
							WWT.energyNum -= 1;
							WWT.foodNum -= 2;
						}else{
							WWT.Text = this.add.text(270, 10, 'You climb into the boat and make it to the opposite shore, well done!', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
						}
						//this.anonymity = this.add.sprite(10, 210, 'time-4');
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario4')});
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
				this.background = this.add.sprite(0, 0, 'town');
				this.background.scale.setTo(0.35, 0.4);

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
			    WWT.arrowUp = this.add.sprite(470, 450, 'arrowUp');
				WWT.arrowLeft = this.add.sprite(370, 500, 'arrowLeft');
				WWT.arrowRight = this.add.sprite(570, 500, 'arrowRight');

				WWT.Text = this.add.text(270, 10, 'You have come across a german town near the border, you are so close to returning home! Now would be a terrible time to draw attention to yourself but the things you could get here could save your life...', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'Walk straight through the town', {fontSize: '12px', fill: 'black'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'Explore some of the shops', {fontSize: '12px', fill: 'white'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Eavesdrop on the locals', {fontSize: '12px', fill: 'white'});
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

				if(cursors.up.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'Trying to draw as little attention to yourself as possible you travel through town and leave before dark, looks like it is going to be another dark and cold night...\n                  -2 to food, -2 to energy', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
							//this.anonymity.destroy();
							WWT.energyNum -= 2;
							WWT.foodNum -= 2;
							//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						}else{
							WWT.Text = this.add.text(270, 10, 'As you pass through town someone spots you and reports you to the police. After a chase scene you manage to escape. \n                            -2 to energy, -1 to health, -1 to food', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
							WWT.energyNum -= 2;
							WWT.healthNum -= 1;
							WWT.foodNum -= 1;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Scenario5')});

						}
				}
				if(cursors.left.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'You spend time exploring some of the local shops and even manage to find a good deal on some bread! Unfortunately your accent and clothes made you stand out and you have undoubtedly been reported\n+1 to food, -1 to anonymity, -1 to time', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
							WWT.timeNum -= 1;
							WWT.foodNum += 1;
							WWT.anonymityNum -= 1;
						}else{
							WWT.Text = this.add.text(270, 10, 'You blend in and procure some resources and get out of town unseen\n                         +1 anonymity, +1 food, -1 time', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
							WWT.anonymityNum += 1;
							WWT.foodNum += 1;
							WWT.timeNum -= 1;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario5')});
						}
				}
				if(cursors.right.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand == 1){
							WWT.Text = this.add.text(270, 10, 'you eavesdrop and find out about the secret mission that is not in the game yet', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
							//this.time.destroy();
							//WWT.energyNum -= 1;
							//WWT.foodNum -= 2;
							//this.anonymity = this.add.sprite(10, 210, 'time-4');
						}else{
							WWT.Text = this.add.text(270, 10, 'As you eavesdrop someone notices and gets the police on you, better run!\n               -2 to energy', {fontSize: '20px', fill: 'red', wordWrap: true, wordWrapWidth: 700});
							WWT.energyNum -= 2;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Scenario5')});
						}
				}

		}
};

WWT.Scenario5 = function() {};
WWT.Scenario5.prototype = {
		preload: function(){
				console.log("Scenario5: preload");
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
			    //create arrow keys
			    WWT.arrowUp = this.add.sprite(470, 450, 'arrowUp');
				WWT.arrowLeft = this.add.sprite(370, 500, 'arrowLeft');
				WWT.arrowRight = this.add.sprite(570, 500, 'arrowRight');

				WWT.Text = this.add.text(270, 10, 'this is it the final step... just past this minefield is freedom, you could try a mad dash through the mine infested field. You could attempt to run around but that would take a few days! Finally there is a narrow path with no mines but you can hear gunfire in the distance...\n What will you do?', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'YOLO', {fontSize: '10px', fill: 'white'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'Go around the minefield', {fontSize: '10px', fill: 'white'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Walk carefully through the open path', {fontSize: '10px', fill: 'white'});
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

				if(cursors.up.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand = 1){
							WWT.Text = this.add.text(270, 10, 'As you franticly run through the minefield, predictably you set off a chain explosion of mines.\n-3 health, -1 to energy', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							//this.anonymity.destroy();
							WWT.healthNum -= 3;
							WWT.energyNum -= 1;
							//this.anonymity = this.add.sprite(10, 210, 'anonymity-3');
						}else{
							WWT.Text = this.add.text(270, 10, 'As you franticly run through the minefield a bomb sets off right in front of you', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							WWT.healthNum -= 10;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('Gameover')});

						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 5, function() { game.state.start('YouWin')});

						}
				}
				if(cursors.left.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand = 1){
							WWT.Text = this.add.text(270, 10, 'You make a choice to walk around the minefield, hopefully you will not run out of time... \n-3 to time -1 to food', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							WWT.timeNum -= 3;
							WWT.foodNum -= 1;
						}else{
							WWT.Text = this.add.text(270, 10, 'As you walk around the minefield you encounter and enemy patrol who start shooting, luckily you have friends nearby who help you take care of them. \n-2 to health, -2 to energy', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							WWT.healthNum -= 2;
							WWT.energyNum -= 2;
						}	
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('YouWin')});
						}
				}
				if(cursors.right.justDown) {
						feet.play('', 0, 0.25, false);
						WWT.Text.destroy();
						var rand = Math.floor(Math.random() * 2);
						if(rand = 1){
							WWT.Text = this.add.text(270, 10, 'You carefully navigate your way through the maze of mines while gunfire races around you. The mental preasure is intense and a single lapse of judgement will end in certain death...\n-1 to time, -2 to energy', {fontSize: '20px', fill: 'white', wordWrap: true, wordWrapWidth: 700});
							//this.time.destroy();
							WWT.timeNum -= 1;
							WWT.energyNum -= 2;
							//this.anonymity = this.add.sprite(10, 210, 'time-4');
						}else{
							WWT.Text = this.add.text(270, 10, 'Either through lapse of judgement or misfortune a mine goes off right next to you \n-2 to health, -1 to time, -1 to energy', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
							WWT.healthNum -= 2;
							WWT.timeNum -= 1;
							WWT.energyNum -= 1;
						}
						if(WWT.healthNum <= 0 || WWT.energyNum <= 0 || WWT.foodNum <= 0 || WWT.timeNum <= 0 || WWT.anonymityNum <= 0){		// gameover conditions
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('Gameover')});
						}else{
								game.time.events.add(Phaser.Timer.SECOND * 2, function() { game.camera.fade(0x000000, 1000) });
								game.time.events.add(Phaser.Timer.SECOND * 3, function() { game.state.start('YouWin')});
						}
				}
		}
};
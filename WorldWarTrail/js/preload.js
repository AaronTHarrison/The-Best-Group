Preloader = function() {};
Preloader.prototype = {
		preload: function() {			//preload assets
				console.log('Preloader: preload');
				this.load.audio('footsteps', ['assets/audio/footsteps.ogg']);
				this.load.path = '../WorldWarTrail/assets/img/';
				this.load.image('scout', 'Scout.png');
				this.load.image('river', 'River.png');
				this.load.image('town', 'Town.png');
				this.load.image('camping', 'Camping.png');
				this.load.image('campsite', 'Campsite.png');

				this.load.image('anonymity-1', 'Anonymity-1.png');
				this.load.image('anonymity-2', 'Anonymity-2.png');
				this.load.image('anonymity-3', 'Anonymity-3.png');
				this.load.image('anonymity-4', 'Anonymity-4.png');
				this.load.image('anonymity-5', 'Anonymity-5.png');

				this.load.image('energy-1', 'Energy-1.png');
				this.load.image('energy-2', 'Energy-2.png');
				this.load.image('energy-3', 'Energy-3.png');
				this.load.image('energy-4', 'Energy-4.png');
				this.load.image('energy-5', 'Energy-5.png');

				this.load.image('food-1', 'Food-1.png');
				this.load.image('food-2', 'Food-2.png');
				this.load.image('food-3', 'Food-3.png');
				this.load.image('food-4', 'Food-4.png');
				this.load.image('food-5', 'Food-5.png');

				this.load.image('health-1', 'Health-1.png');
				this.load.image('health-2', 'Health-2.png');
				this.load.image('health-3', 'Health-3.png');

				this.load.image('time-1', 'Time-1.png');
				this.load.image('time-2', 'Time-2.png');
				this.load.image('time-3', 'Time-3.png');
				this.load.image('time-4', 'Time-4.png');
				this.load.image('time-5', 'Time-5.png');

				this.load.image('arrowUp', 'ArrowUp.png');
				this.load.image('arrowLeft', 'ArrowLeft.png');
				this.load.image('arrowRight', 'ArrowRight.png');

		},
		create: function() {
				console.log('Preloader: create');
				this.stage.backgroundColor = '#859994';
		},
		update: function() {
				if(this.cache.isSoundDecoded('footsteps')){
						this.state.start('Scenarios');		// go to next state
				}
		}
};
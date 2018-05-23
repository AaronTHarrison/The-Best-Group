/*Preload.prototype = {
		preload: function() {

		},
		create: function() {
				this.game.state.start('main-menu');
		}
};*/

Preloader = function() {};
Preloader.prototype = {
		preload: function() {			//preload assets
				console.log('GamePlay: preload');
				//this.load.path = 'assets/audio/';
				this.load.audio('footsteps', ['assets/audio/footsteps.ogg']);
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
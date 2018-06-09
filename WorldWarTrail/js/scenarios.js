function Scenarios() {
		// global variables
		var resources;
		var health;
		var food;
		var energy;
		var time;
		var anonymity;
		var arrowUp;
		var upText;
		var arrowLeft;
		var leftText;
		var arrowRight;
		var rightText;
		var background;
		var Text;
};
Scenarios.prototype = {
		preload: function(){
				console.log("Play: preload");
		},
		create: function(){
				// first scenario in all runs: scout
				this.background = this.add.sprite(0, 0, 'scout');
				this.background.scale.setTo(0.3, 0.3);

				this.health = this.add.sprite(10, 10, 'health-3');
				this.energy = this.add.sprite(10, 60, 'energy-5');
				this.food = this.add.sprite(10, 110, 'food-5');
				this.time = this.add.sprite(10, 160, 'time-5');
				this.anonymity = this.add.sprite(10, 210, 'anonymity-5');

				this.arrowUp = this.add.sprite(470, 450, 'arrowUp');
				this.arrowLeft = this.add.sprite(370, 500, 'arrowLeft');
				this.arrowRight = this.add.sprite(570, 500, 'arrowRight');

				this.Text = this.add.text(270, 10, 'As you leave your landing site, you spot movement in the distance. Enemy scout spotted!', {fontSize: '20px', fill: 'black', wordWrap: true, wordWrapWidth: 700});
				this.upText = this.add.text(0, 0, 'Sneak past', {fontSize: '10px', fill: 'black'});
				this.upText.setTextBounds(440, 430, 50, 10);
				this.leftText = this.add.text(0, 0, 'OPEN FIRE!', {fontSize: '10px', fill: 'black'});
				this.leftText.setTextBounds(350, 470, 50, 10);
				this.rightText = this.add.text(0, 0, 'Stand still and wait for him to pass', {fontSize: '10px', fill: 'black'});
				this.rightText.setTextBounds(580, 470, 50, 10);
		},
		update: function(){
				
		}
};
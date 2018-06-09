var game = new Phaser.Game(1000, 600, Phaser.AUTO);
game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('Instructions', Instructions);
game.state.add('Scenarios', Scenarios);
game.state.add('Gameover', Gameover);
game.state.start('Boot');
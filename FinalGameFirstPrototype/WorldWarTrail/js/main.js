var game = new Phaser.Game(1000, 600, Phaser.AUTO);


game.state.add('Boot', WWT.Boot);
game.state.add('Preloader', WWT.Preloader);
game.state.add('Instructions', WWT.Instructions);
game.state.add('Scenario1', WWT.Scenario1);
game.state.add('Scenario2', WWT.Scenario2);
game.state.add('Gameover', WWT.Gameover);
game.state.start('Boot');
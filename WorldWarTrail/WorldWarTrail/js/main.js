var game = new Phaser.Game(1000, 600, Phaser.AUTO);


game.state.add('Boot', WWT.Boot);
game.state.add('Preloader', WWT.Preloader);
game.state.add('Instructions', WWT.Instructions);
game.state.add('Scenario1', WWT.Scenario1);
game.state.add('Scenario2', WWT.Scenario2);
game.state.add('Scenario3', WWT.Scenario3);
game.state.add('Scenario4', WWT.Scenario4);
game.state.add('Scenario5', WWT.Scenario5);
game.state.add('Gameover', WWT.Gameover);
game.state.add('YouWin', WWT.YouWin);
game.state.start('Boot');
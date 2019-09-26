// create a new scene named "Game"
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {
  
}

// load asset files for our game
gameScene.preload = function() {

  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/ground.png');
  this.load.image('dude', 'assets/dude.png');
  this.load.image('dude-gun', 'assets/dude-gun.png');
  this.load.audio('song', 'assets/lassolady.ogg');

};

// executed once, after assets were loaded
gameScene.create = function() {
  this.sound.pauseOnBlur = false;

  this.add.image(400, 300, 'sky');
  this.add.image(400, 350, 'ground').setScale(2);
  

  player = this.add.image(50, 170, 'dude');
  player.setOrigin(0, 0);
  player.setScale(1.2);


  var song = this.sound.add('song', { loop: true, volume: 0.5 });
  song.play();

};

// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 360,
  scene: gameScene,
  title: 'El Drifterado',
  pixelArt: true,
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);

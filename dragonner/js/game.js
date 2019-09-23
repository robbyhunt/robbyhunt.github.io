// Create a new scene
var gameScene = new Phaser.Scene('Game');


// initiate scene parameters
gameScene.init = function(){
    
    //player speed
    this.playerSpeed = 3;

    //enemy speed
    this.enemyMinSpeed = 1;
    this.enemyMaxSpeed = 3;

    //set boundaries
    this.enemyMinY = 80;
    this.enemyMaxY = 280;

    //set end sequence to not ending 
    this.isTerminating = false;
};


// Load assets (preload)
gameScene.preload = function(){

    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
    this.load.image('goal', 'assets/treasure.png');

};


// called once after preload ends
gameScene.create = function(){

    //create bg sprite
    this.bg = this.add.sprite(640/2, 360/2, 'background');

    //create the player sprite
    this.player = this.add.sprite(40, this.sys.game.config.height/2, 'player');
    this.player.setScale(0.5);

    //create treasure
    this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
    this.goal.setScale(0.6);

    //creates enemies
    this.enemies = this.add.group({
        key: 'enemy',
        repeat: 4,
        setXY: {x: 110, y: 100, stepX: 100, stepY: 20}
    });

    //set scale for enemy group
    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.4, -0.4);

    // create action for each child of group
    Phaser.Actions.Call(this.enemies.getChildren(), function(enemy){
        //flip
        enemy.flipX = true;
        //speed
        var dir = Math.random() < 0.5 ? 1 : -1;
        var speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
        enemy.speed = dir * speed;
    }, this);


};


// called up to 60 times per second
gameScene.update = function(){

    //if terminating pause game and dont run rest
    if(this.isTerminating) return;

    //check for active input
    if(this.input.activePointer.isDown) {
        //player walks
        this.player.x += this.playerSpeed;
    }

    //establish bounds for treasure and player
    var playerRect = this.player.getBounds();
    var treasureRect = this.goal.getBounds();

    //check for overlap
    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
        //restart the scene
        return this.gameOver();
    }

    //get enemies
    var enemies = this.enemies.getChildren();
    var numEnemies = enemies.length;

    for(let i = 0; i < numEnemies; i++) {
        //enemy movement
        enemies[i].y += enemies[i].speed;

        if(enemies[i].y <= this.enemyMinY) {
            enemies[i].speed *= -1;
        }
        if(enemies[i].y >= this.enemyMaxY) {
            enemies[i].speed *= -1;
        }
                
        var enemyRect = enemies[i].getBounds();
    
        //check for overlap
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
            //restart the scene
            return this.gameOver();
        }
    
    }
  
};


gameScene.gameOver = function() {

    //intiated game over sequence
    this.isTerminating = true;

    this.cameras.main.shake(500);
    
    this.cameras.main.on('camerashakecomplete', function(camera, effect){
        // fade out
        this.cameras.main.fade(500);
    }, this);

    this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){
        //restart the scene
        this.scene.restart();
    }, this);

}


// set config of game
var config = {
    type: Phaser.AUTO, //will use webgl if available, fallback to canvas
    width: 640,
    height: 360,
    scene: gameScene
};


// create a new game, pass the config to it
var game = new Phaser.Game(config);


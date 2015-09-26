var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});
var background;
function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/bg.png");
  game.load.spritesheet("bird", "assets/bird.png",64,64);
//  game.load.image("pipe," "assets/pipe.png");
}
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  bird = game.add.sprite(100, 245, 'bird');
  bird.smoothed = false;
  bird.animations.add('fly', [0,1,2,3], 10, true);
  bird.play('fly')
  game.physics.arcade.enable(bird);
  bird.body.gravity.y = 1000;
//  pipes = game.add.group(); // Create a group  
//  game.physics.arcade.enable(pipes);  // Add physics to the group  
//  pipes.createMultiple(4, 'pipe'); // Create 20 pipes  
  var spaceKey =
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(jump);
}

function update() {
  if (bird.inWorld == false)
    restart.game();

}

function jump() {
  bird.body.velocity.y = -350;
}

// function addOnePipe() {
//  var pipe = pipes.getFirstDead();
//  pipe.reset(x, y);
//  pipe.body.velocity.x = -200;
//  pipe.checkWorldBounds = true;
//  pipe.outOfBoundsKill = true;
// }

//function addTwoPipes() {
  
//}

//function restartGame() {
//  game.state.start('main');
//}


function render() {

}
        


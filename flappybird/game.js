var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var pipeup;
var uppipes;
var uppipe;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/bg.png");
  game.load.spritesheet("bird", "assets/ayylmao.png",64,64);
  game.load.image("uppipe", "assets/wormup.png");
  game.load.image("downpipe", "assets/wormdown.png");

}
function create() {
  // Add physics and scroll background
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  // Add the bird and set his animation and values
  bird = game.add.sprite(100, 245, 'bird');
  bird.anchor.x = .5;
  bird.anchor.y = .5;
  bird.smoothed = false;
  bird.scale.set(1);
  bird.animations.add('fly', [0,1,2,3], 10, true);
  bird.play('fly');
  game.physics.arcade.enable(bird);
  // Gravity and jump
  bird.body.gravity.y = 1000;
  game.input.onDown.add(jump);
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(jump);
  // Add pipes
  uppipe1 = game.add.sprite(400,30,"uppipe");
  uppipe2 = game.add.sprite(600,30,"uppipe");
  uppipe3 = game.add.sprite(800,205,"uppipe");
  downpipe1 = game.add.sprite(400,205,"downpipe");
  downpipe2 = game.add.sprite(600,205,"downpipe");
  downpipe3 = game.add.sprite(800,205,"downpipe");

  game.physics.arcade.enable(uppipe1);
  game.physics.arcade.enable(uppipe2);
  game.physics.arcade.enable(uppipe3);
  game.physics.arcade.enable(downpipe1);
  game.physics.arcade.enable(downpipe2);
  game.physics.arcade.enable(downpipe3);
  
  uppipe1.body.velocity.x = -100;
  uppipe2.body.velocity.x = -100;
  uppipe3.body.velocity.x = -100
  downpipe1.body.velocity.x = -100;
  downpipe2.body.velocity.x = -100;
  downpipe3.body.velocity.x = -100;
}

function update() {
  if (bird.inWorld == false) {
    bird.x = 100;
    bird.y = 245;
  }
  if (uppipe1.x < -100) {
    addPipeRow(uppipe1,downpipe1);
  }
  if (uppipe2.x < -100) {
    addPipeRow(uppipe2,downpipe2);
  }
  if (uppipe3.x < -100) {
    addPipeRow(uppipe3,downpipe3);
  }
}

function jump() {
  bird.body.velocity.y = -350;
}

function addPipeRow(up,down) {
  var offset = 75;
  var margin = 50;
  var pipey = game.rnd.integerInRange(100, 468);
  up.anchor.x = .5;
  up.anchor.y = 0;
  down.anchor.x = .5;
  down.anchor.y = 1;
  up.x = 550;
  down.x = 550;
  up.y = pipey + offset;
  down.y = pipey - offset;
 }

function addPipeRow2() {
  uppipe2.anchor.x = .5;
  uppipe2.anchor.y = 0;
  uppipe2.x = 185;
  uppipe2.y = Math.floor(Math.random() * (468 - 100 + 1)) + 100;
  downpipe2.x = 185;
  downpipe2.y = pipeup.y + 125
  uppipe2.body.velocity.x = -200;
  downpipe2.body.velocity.x = -200;
 }

function render() {

}
        


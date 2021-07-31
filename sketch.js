var song;
var playButton,pauseButton,stopButton;

function preload(){
  song = loadSound('startmusic.mp3');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
 
  playButton = createImg('play.png');
  playButton.position(width/2-90,height - 90);
  playButton.size(80,80);

  stopButton = createImg('stop.png');
  stopButton.position(width/2+10,height - 90);
  stopButton.size(80,80);

  pauseButton = createImg('pause.png');
  pauseButton.position(width/2-90,height - 90);
  pauseButton.size(80,80);
  pauseButton.hide();

  playButton.mousePressed(toggleSong);
  pauseButton.mousePressed(toggleSong);

  stopButton.mousePressed(stopSong);
  
}

function stopSong(){
  song.stop();
  playButton.show();
  pauseButton.hide();
}

function toggleSong(){

  if(song.isPlaying()){

    song.pause();

    playButton.show();
    pauseButton.hide();

  } else {
    song.play();
    
    playButton.hide();
    pauseButton.show();

  }
}

// function mouseClicked(){
// }

function draw() {
  // put drawing code here
  background(50);

  fill(250,250,200);
  rectMode(CENTER);
  rect(width/2,height-50,width,100);

} 
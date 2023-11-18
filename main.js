function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('game');
	video = createCapture(VIDEO);
	video.size(1130, 560);
	video.parent('camera');
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model loaded successfully");
}

function gotPoses(result){
	if(result.length > 0){
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
	}
}

function draw() {
	game()
}







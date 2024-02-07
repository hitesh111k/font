function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,150);
    canvas = createCanvas(600,550);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#117AA7');
}
 function modelLoaded(){
    console.log('PoseNet Is Initialized');

 }

 function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
 }
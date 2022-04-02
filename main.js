function preload(){
clown_nose = loadImage('https://i.postimg.cc/02kp5B7c/455-4557163-icon-clown-nose-circle-hd-png-download.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("Posenet Is Intialized");
}
function gotposes(results){
   if(results.length>0){
       console.log(results);
       noseX = results[0].pose.nose.x-15;
       noseY = results[0].pose.nose.y-15;
}
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('My_filter_image.png');
}

var song;
var playorpause;
var lable;
var amp;
var per=0;
var col1,col2;
var rains=[];
function setup(){
    createCanvas(400,300);
    song = loadSound("bensound-hey.mp3" , loaded); 
    amp = new p5.Amplitude();
    lable="start";
    playorpause=createButton(lable);
}
function draw(){
    col1=new initialD();
    col2=new initialD();
    background(0,0,0);
if(!song.isPlaying()){
    playorpause.html("start");
}
per=(amp.getLevel()*100)%100;

for(var i=0;i<width;i=i+4){
    if((i<((width/2)-per*4) || i>((width/2)+per*4) ) && song.isPlaying()){
        
        rains.push(new rain(i,per));
}
}

for(var i=0;i<width;i=i+3){
    stroke(10,40,60);
    if(i>((width/2)-per*4) && i<((width/2)+per*4)){
    stroke(col1.r,col1.g,col1.b);
    line(i,200-per+abs(i-200)-50,i,300-per+abs(i-200));
    fill(col2.r,col2.b,col2.g);
    rect(i, height-abs(per+abs(i-200))-40, 3,abs(per+abs(i-200))+40);
}
}
}
function rain(x,l){
    this.r = random(255);
    this.g= random(255);
    this.t = random(255);
    this.b=0;
    this.x=x;
    this.l=l;
    this.show = function(){
        stroke(0,220,0);
        line(this.x,this.b,this.x,this.b+this.l); 
        this.b=this.b+3;
    }
}
function initialD(){
    this.r = random(255);
    this.g= random(255);
    this.b = random(255);
}

function loaded(){
    playorpause.mouseClicked(togglePlay);
}
function togglePlay()
{console.log("hell");
    if(song.isPlaying())
    {
        playorpause.html("start");
        song.stop();
    }
    else
    {playorpause.html("stop");
        song.play();
    }
}
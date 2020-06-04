var bird;
var pipes = [];
var pipeCount=0;
var Score = 0;
function setup(){
    createCanvas(600, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}
function draw(){
    if(pipeCount<1){
    pipes.push(new Pipe());    
}
    background(0);
    bird.show();
    bird.update();
    for(var i=0;i<pipes.length;i++){
        pipes[i].show();
        pipes[i].update();
        pipes[i].check(bird.y,bird.x);    
    }
    fill(255,0,255);
    textSize(32);
    text(Score , 10,30);
}
function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}
function Bird(){
    this.x = width/2;
    this.y = height/2;
    this.gravity = 0.2;
    this.lift = -7; 
    this.velocity = 0;
    this.show = function(){
        this.drawBird();
    }
    this.drawBird = function(){
        fill(0,255,0);
        noStroke();
        ellipse(this.y, this.x, 22, 16);
        fill(77,25,200);
        ellipse(this.y+10, this.x-4, 15, 15);
        stroke(255,255,255);
        line(this.y+12, this.x-4,this.y+12, this.x-8);
        fill(255,0,250);
        stroke(255,0,1);
        line(this.y-10, this.x-10,this.y, this.x);
        line(this.y-5, this.x-10,this.y, this.x);
        line(this.y-5, this.x+10,this.y+2, this.x+4);
        line(this.y-10, this.x+10,this.y+2, this.x+4);
    }
    this.update = function(){
        this.velocity+=this.gravity;
        if(this.velocity < 0){
            this.velocity=constrain(this.velocity,-10, 0);
        }    
        this.x +=this.velocity;
        if(this.x>height){
            this.x=height-5;
            this.velocity=0;
        }
        if(this.x<0){
            this.x=10;
            this.velocity=0; 
        }
    }
    this.up = function(){
        this.velocity += this.lift;
    }

}
function Pipe(){
    this.top = random(height/2-25);
    this.bottom = random(height / 2 - 50);  
    this.x = width;
    this.w = 20;
    this.speed = 5;
    this.next = true;
    this.pipeC= true;
    this.r = random(255);
    this.g= random(255);
    this.b = random(255);
    this.show = function(){
        fill(this.r,this.b,this.g);  
        rect(this.x,0,this.w,this.top);
        rect(this.x,height-this.bottom,this.w,this.bottom);
    }
    this.update =function(){
        this.x -=this.speed;
        if(this.x > width/2 && this.pipeC){pipeCount++; this.pipeC=false;}        
        if(this.x < width/2 && this.next){pipeCount--; this.next=false;}
      
      if(this.x<10){
          pipes.shift();
          Score++;
          console.log(pipes.length+"   ss ");
        }
    }
    this.check = function(x,y){
            if(abs(x-this.x)<5 ){
                if(!(y>this.top && y<(height-this.bottom))){noLoop();
                }
        }
    }
    }
    function mousePressed(){
        location.reload();
    }
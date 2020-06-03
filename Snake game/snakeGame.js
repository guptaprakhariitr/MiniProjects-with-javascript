var s;
var food1,food2,food3,food4,food5;
var scl = 10;
var over=false;
function setup(){
    createCanvas(600,600);
    s = new Snake();
    food1=pickLocation();
    food2=pickLocation();
    food3=pickLocation();
    food4=pickLocation();
    food5=pickLocation();
}
function draw(){
    background(255,22,1);
    s.update();
    s.show();
    if(s.eat(food1)) {
        food1=pickLocation();
    }
    if(s.eat(food2)) {
        food2=pickLocation();
    }
    if(s.eat(food3)) {
        food3=pickLocation();
    }
    if(s.eat(food4)) {
        food4=pickLocation();
    }
    if(s.eat(food5)) {
        food5=pickLocation();
    }
    fill(255,0,255);
    rect(food1.x,food1.y,scl,scl);
    rect(food2.x,food2.y,scl,scl);
    rect(food3.x,food3.y,scl,scl);
    rect(food4.x,food4.y,scl,scl);
    rect(food5.x,food5.y,scl,scl);
    s.check();
    if(over){over=false;
    alert("GAME OVER");
    }
}
function pickLocation(){
    var cols= floor(width/scl);
    var rows= floor(height/scl);
    return createVector(floor(random(cols))*scl,floor(random(rows))*scl);
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        s.dir(0,-1);
    } else if(keyCode === DOWN_ARROW){
        s.dir(0,1);
    } else if(keyCode === RIGHT_ARROW){
        s.dir(1,0);
    } else if(keyCode === LEFT_ARROW){
        s.dir(-1,0);
    }
}

function Snake() {

    this.x = 0;
    this.y = 0;
    this.total = 0;
    this.tail = [];
    this.xspeed = 1;
    this.yspeed = 0;
    this.update = function () {
        if((this.x<(width-scl)*abs(this.xspeed) && this.x>0) || (this.y<(height-scl)*abs(this.yspeed) && this.y>0)){
        for(var i=0;i<this.total-1;i++){
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1]=createVector(this.x,this.y);
    }
    this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    };
    this.show = function () {
        fill(0, 255, 0);
        for(var i=0;i<this.total;i++){
            rect(this.tail[i].x, this.tail[i].y, 10, 10);            
        }
        rect(this.x, this.y, 10, 10);
    
    };
    this.dir = function (x,y) {
        this.xspeed=x;
        this.yspeed=y;
    };
    this.eat = function(pos){
        var d = dist(this.x,this.y,pos.x,pos.y);
        if(d<5) {
            this.total++;
            this.tail[this.total-1]=createVector(this.x,this.y);
            return true;
        }
        else {return false;}
    }
    this.check = function(){
        for(var j=0;j<this.total-1;j++){
            if(this.tail[j].x==this.x && this.tail[j].y==this.y){
                this.tail=[];
                this.total=0;
                this.x=1;
                this.y=1;
                this.xspeed=1;
                this.yspeed=0;
                over=true;
            }   
        }
    }
}

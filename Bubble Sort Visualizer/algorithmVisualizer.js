var values=[];
var valueList=[];
var n ; 
var t=0;
var j=0,k=0;
function setup(){
    createCanvas(650,650);
for(var i=0;i<width-50;i=i+3){
    values[t] = new float();
    t++;
}
for(var i=0;i<values.length;i++){
    values[i].x = random(height);
}
for(var i=0;i<values.length;i++){
    valueList[i] = values[i].x ;
}
n = valueList.length;
}

function draw(){
    background(255,255,10);
    for(var i=0;i<values.length;i++){
        if(i==k || i==k+1 || i>=(values.length-j)){
        stroke(255,0,0);
        fill(255,0,0);
        rect(i*3,height-valueList[i],3,valueList[i]);
    }    
      else {
        stroke(142, 68, 173);
        fill(142, 68, 173 );
        rect(i*3,height-valueList[i],3,valueList[i]);
    }
    }

        if(j<n-1){
            if(k<n-j-1){
                if (valueList[k] > valueList[k+1]) 
                { 
                    var temp = valueList[k]; 
                    valueList[k] = valueList[k+1]; 
                    valueList[k+1] = temp;
                }
            k++;
            }
        if(k==(n-j-1)){
            j++;
        k=0;
        }
        }
    }
function float(){
    this.x;
}
function sorting(j,k){

}
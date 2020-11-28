class dustbin{
    constructor(x,y){
     this.x=x;
     this.y=y;
     this.dustbinHeight=213;
     this.dustbinWidth=200;
     this.wallthickness=20

     this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallthickness,{isStatic:true});

     this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallthickness,{isStatic:true});

     this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y+this.dustbinHeight/2,this.wallthickness,{isStatic:true});

     World.add(world,this.bottomBody);
     World.add(world,this.leftWallBody);
     World.add(world,this.rightWallBody);

    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push()
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop()

        push()
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop()

        push()
        translate(posBottom.x,posBottom.y);
        rectMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS);
        fill(255);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop()



    }
}
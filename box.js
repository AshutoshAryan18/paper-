class Box {
    constructor(x,y){
        var object={
            restitution:1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,150,object);
        this.width=20;
        this.height=150;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop ()
    
    }
    }
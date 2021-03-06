class Junk{

    constructor(x,y,width,height){

        var op={

            restitution:1
            
        }
        
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,op);

        var rand=Math.round(random(1,6));
        this.image=loadImage("images/apple.png");
       

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        //rectMode(CENTER);
        fill(0);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       //rect(0,0,this.width,this.height);
        image(this.image,0,0,this.width,this.height)
        console.log(pos.y);
        pop();
            
    }
    move(){
        
        
    }

    
}
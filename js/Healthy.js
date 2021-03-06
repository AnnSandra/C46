class Healthy{

    constructor(x,y,width,height){

        var op={

            restitution:1
            
        }
        
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height,op);
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
          
            pop();

            if(this.body.speed <=2.5){
                fill(0);
                push();
                translate(pos.x,pos.y);
                rotate(angle);
            //rect(0,0,this.width,this.height);
                image(this.image,0,0,this.width,this.height)
               console.log(this.body.speed)
                pop();
            }
            else{
                World.remove(world, this.body);
                push();
                this.Visiblity = this.Visiblity - 5;
                tint(255,this.Visiblity);
                image(this.image, this.body.position.x, this.body.position.y, 50, 50);
                pop();
            }

            
        
        
            
                    
    }
    disappear(){

        var pos=this.body.position;
        var angle=this.body.angle;
       
       
        
        
    }

    
}
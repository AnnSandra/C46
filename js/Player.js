class Player{

    constructor(){
        
    }


    start() {
        player_sprite= createSprite(200,670);
        player_sprite.addImage(player_img);
        //player_sprite.addAnimation("hello",playan);
    }

    moveLeft(){
       
        if(player_sprite.x<10)
            player_sprite.x=200;
        else{
            player_sprite.x=player_sprite.x-2;
        }
    }

    moveRight(){
        if(player_sprite.x<10)
            player_sprite.x=200;
        else{
            player_sprite.x=player_sprite.x+2;
        }
    }

    jump(){
        
        player_sprite.velocityY=-10;
    }



    
}
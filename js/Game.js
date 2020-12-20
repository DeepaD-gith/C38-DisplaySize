class Game
{
    constructor()
    {        
    }
    
    getState()
    {
       var gameStateRef = database.ref("gameState");
       gameStateRef.on("value",function(data)
        {
            gameState = data.val();
            console.log("getState " + gameState)
        })
    }
    update(state)
    {
        database.ref("/").update({gameState:state})
    }
    
    startGame()
    {
        if(gameState===0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();  
        } 
            car1 = createSprite(100,200);
            car2 = createSprite(300,200);
            car3 = createSprite(500,200);
            car4 = createSprite(700,200);

            cars  = [car1,car2,car3,car4]
        
    }
    Play()
    {
        form.hide();
        // textSize(30);
        // text("GameStart",120,100);
        Player.getPlayerInfo();

        var x = 200;
        var y;
        var index = 1;
       
        if(allPlayers !== undefined)
        {
           
            for(var plr in allPlayers)
            {
                y = height - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                
                if(index ===  player.index)
                {
                    cars[index-1].shapeColor = "red";
                   // camera.position.x = width/2;
                    camera.position.y = cars[index-1].y;
                    console.log(" car y" + cars[index-1].y )
                }
                else
                {
                    cars[index-1].shapeColor ="black";
                }
               
                
                index = index+1;
                x = x+200;
                // textSize(15);
                // text(allPlayers[plr].Name+ ": " + allPlayers[plr].distance,120,display_position)
                // display_position += 20;
            
            }
            
           drawSprites();

        }
       if(keyIsDown(UP_ARROW) && player.index!==null)
       {
           player.distance +=50;
           player.update();
       }
    }

}
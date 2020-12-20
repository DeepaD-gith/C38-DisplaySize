class Player
{
   constructor()
   {
     this.name = null;
     this.distance = 0;
     this.index = null;
   }

   getCount()
   {
       var playerCountRef = database.ref("playerCount")
       playerCountRef.on("value",function(data)
       {
           playerCount = data.val();
       })
    }
      updateCount(count)
      {
        database.ref("/").update({playerCount:count})
        this.index = count;
      }
      update()
      { 
        var playerIndex = "Players/player" + this.index;
        database.ref(playerIndex).set({Name:this.name,
                                       distance:this.distance});
      }
      static getPlayerInfo()
      {
        var playerInforRef = database.ref("Players");
        playerInforRef.on("value",(data)=>{allPlayers = data.val();})

      }
   


}
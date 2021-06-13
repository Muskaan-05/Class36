class Player{
    constructor(){

    }

  getCount(){
      var countInDb=database.ref("gameState");
    countInDb.on("value", readCount);

      function readCount(value){
        count=value.val();
      }
  }

  updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
  }



  updateName(name){
    var playernum="player"+ count;
    database.ref(playernum).set({
        Name: name
    })
  }

}
class Game{
    constructor(){

    }

  getState(){
      var stInDb=database.ref("gameState");
      stInDb.on("value", readState);

      function readState(value){
        state=value.val();
      }
  }

  updateState(state){
    database.ref('/').update({
        gameState:state
    })
  }

  start(){
      if(state===0){
        player= new Player();
        player.getCount();
        
          form=new Form();
          form.display();


      }
  }

}
class Form{
    constructor(){

    }

 display(){
     var title=createElement("h3")
     title.html("Car Racing Game")
     title.position(500,120);
     
     var input=createInput("Enter Your Name");
     input.position(500,170);

     var button=createButton("PLAY");
     button.position(500,200);

     button.mouseClicked(click);

     function click(){
        input.hide();
        button.hide();
        var name=input.value();
        var greeting=createElement("h2");
        greeting.html("Hello "+ name);
        greeting.position(500,250);

        count=count+1;
        player.updateCount(count);
        player.updateName(name);
     }
 }
}


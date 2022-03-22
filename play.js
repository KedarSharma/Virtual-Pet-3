class Play{
    constructor(){
    }
    
    start(){	
		game1 = new Gamestate();
		game1.update(myState);
		mState = game1.getState();

        pet1 = new Pet();
        player1  = new Player();

		form = new Form();
		if(mState == "instructions"){
	    	form.display();
		}
		dogI = loadImage("images/dogImg.png");

		dog = createSprite(200,320);
		dog.addImage(dogI);
		dog.scale = 0.2;
		dog.visible = false;
	}
}
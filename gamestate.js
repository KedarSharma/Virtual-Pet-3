class Gamestate {
    constructor(){
    }

    getState(){
        gameStateRef = database.ref("GameState");
	    gameStateRef.on("value",function(data){
		    gameState = data.val();
	    });
        return gameState;
    }

    update(state){
        database.ref("/").update({
            'GameState' : state
        });
    }
}
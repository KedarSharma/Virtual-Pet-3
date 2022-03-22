class Player{
    constructor(){
    }

	getName(){
        var userNameRef = database.ref("UserName");
        userNameRef.on("value",function(data){
    	    UserName = data.val();
        });
    }

    update(name){
        database.ref("/").update({
            'UserName' : name
        });
    }
}
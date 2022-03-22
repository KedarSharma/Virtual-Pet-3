class Pet{
	constructor(){
	}

	getName(){
		var petNameRef = database.ref("petName");
		petNameRef.on("value",function(data){
			petName = data.val();
		});
	}

	update(name){
		database.ref("/").update({
			'petName' : name
		});
	}
}
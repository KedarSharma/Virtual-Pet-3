function foodReduction(){

    if(food == 10){
        for(var a = 0;a<=9;a++){
            foodshow[a].addImage(nohunger);
        }
    }

    if(food == 9){
        foodshow[9].addImage(hunger);
        for(var a = 0;a<=8;a++){
            foodshow[a].addImage(nohunger);
        }
    }
    if(food == 8){
        for(var a = 9;a>=8;a--){
            foodshow[a].addImage(hunger);
        }
        for(var a = 0;a<=7;a++){
            foodshow[a].addImage(nohunger);
        }
    }
    if(food == 7){
        for(var a = 9;a>=7;a--){
            foodshow[a].addImage(hunger);
        }
        for(var a = 0;a<=6;a++){
            foodshow[a].addImage(nohunger);
        }
    }
    if(food == 6){
        for(var a = 9;a>=6;a--){
            foodshow[a].addImage(hunger);
        }
		for(var a = 0;a<=5;a++){
            foodshow[a].addImage(nohunger);
        }
	}
    if(food == 5){
        for(var a = 9;a>=5;a--){
            foodshow[a].addImage(hunger);
        }
		for(var a = 0;a<=4;a++){
            foodshow[a].addImage(nohunger);
        }
	}

    if(food == 4){
        for(var a = 9;a>=4;a--){
            foodshow[a].addImage(hunger);
        }
		for(var a = 0;a<=3;a++){
            foodshow[a].addImage(nohunger);
        }
	}
    if(food == 3){
        for(var a = 9;a>=3;a--){
            foodshow[a].addImage(hunger);
        }
		for(var a = 0;a<=2;a++){
            foodshow[a].addImage(nohunger);
        }
	}
    if(food == 2){
        for(var a = 9;a>=2;a--){
            foodshow[a].addImage(hunger);
        }
		for(var a = 0;a<=1;a++){
            foodshow[a].addImage(nohunger);
        }
	}
    if(food == 1){
        for(var a = 9;a>=1;a--){
            foodshow[a].addImage(hunger);
        }
		foodshow[0].addImage(nohunger);
	}
    if(food == 0){
        for(var a = 9;a>=0;a--){
            foodshow[a].addImage(hunger);
        }
    }
}

async function getFood(){
	foodRef = database.ref("Food");
	foodRef.on("value",function(data){
		food = data.val();
	});
}
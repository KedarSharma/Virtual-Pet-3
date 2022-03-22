async function getMoney(){
	moneyRef = database.ref("Money");
	moneyRef.on("value",function(data){
		money = data.val();
	});
}
{var database,foodRef,food,gameStateRef,gameState;
var petName = "";
var form,pet1,play,player1;
var dogI,dogII,dog,game1,Food1,room;
var myState = "instructions";
var mState;
var a = 1;
var tis;
var defaultfood = 10;
var nohunger,hunger;
var shopstate = "noshop";
var moneyRef,money;
var foodamount = 0;
var foodshow = [];
var shop,coin,coinIcon;
var shopbutton;
var feedbutton,feedImg;
var dogFoodImg,dogfood;
var costImg,costbutton;
var backbutton,backImg;}

function preload(){
	dogII = loadImage("images/dogImg1.png");
	dogI = loadImage("images/dogImg.png");
	room = loadImage("images/room.jpg");
	nohunger = loadImage("images/fullfood.png");
	hunger = loadImage("images/no food.png");
	shop = loadImage("images/Shop.jpg");
	coin = loadImage("images/coin.png");
	feedImg = loadImage("images/feedbutton.jpg");
	dogFoodImg = loadImage("images/dog food.png");
	costImg = loadImage("./images/Cost.jpg");
	backImg = loadImage("images/Back.jpg")
}

function setup() {
	createCanvas(800, 500);

	for(var a = 0;a <10;a++){
		foodshow[a] = createSprite(750-(25*a),100);
		foodshow[a].addImage(nohunger);
		foodshow[a].scale = 0.09;
	}

	database = firebase.database();

	play = new Play();

	coinIcon = createSprite(630,50);
	coinIcon.addImage(coin);
	coinIcon.scale = 0.03;
	coinIcon.visible=false;

	backbutton = createSprite(400,450);
	backbutton.addImage(backImg);
	backbutton.scale = 0.05;
	backbutton.visible = false;

	dogfood = createSprite(width/2,height/2);
	dogfood.addImage(dogFoodImg);
	dogfood.visible=false;
	dogfood.scale = 0.4;

	dogfood1 = createSprite(width/2,height/2);
	dogfood1.addImage(dogFoodImg);
	dogfood1.visible=false;
	dogfood1.scale = 0.1;

	costbutton = createSprite(width/2,height/2+100);
	costbutton.addImage(costImg);
	costbutton.scale = 0.5;
	costbutton.visible=false;

	shopbutton = createSprite(533,430);
	shopbutton.addImage(shop);
	shopbutton.scale = 0.5
	shopbutton.visible = false;

	feedbutton = createSprite(266,430);
	feedbutton.addImage(feedImg);
	feedbutton.scale = 0.05;
	feedbutton.visible = false;

	play.start();
}

function draw(){
	{getMoney();
	background("black");
	tis = performance.now()/1000;
	mState = game1.getState();
	getFood();}

	if(mState !== "playing"){
		database.ref("/").update({
			"Food" : defaultfood
		});
		shopbutton.visible = false;
		for(var a = 0;a< 10 ; a++){
			foodshow[a].visible = false;
		}
	}

	if(mState == "playing"){
		if(shopstate === "noshop"){
			dog.visible = true;
			dogfood.visible = false;
			dogfood1.visible = true;
			dogfood1.scale = 0.15;
			dogfood1.x = 680;
			dogfood1.y = 50;
			coinIcon.x = 525;
			costbutton.visible=false;
			backbutton.visible = false;
			shopbutton.visible=true;
			feedbutton.visible = true;
			background(room);
			
			for(var a = 0;a< 10 ; a++){
				foodshow[a].visible = true;
			}

			if(mousePressedOver(shopbutton)){
				shopstate = "yesshop";
			}
		}

		if(shopstate =="yesshop"){
			background("grey");
			dog.visible = false;
			costbutton.visible=true;
			dogfood.visible=true;
			shopbutton.visible=false;
			backbutton.visible = true;
			feedbutton.visible = false;
			for(var a = 0;a< 10 ; a++){
				foodshow[a].visible = false;
			}

			if(mousePressedOver(costbutton) && money > 0){
				money = money -5;
				database.ref("/").update({
					"Money" : money
				});
				foodamount = foodamount + 1;
			}

			if(mousePressedOver(backbutton)){
				shopstate = "noshop";
			}

			
		}

		coinIcon.visible=true;

		textSize(35);
		fill("#ff0055");
		text(money,550,65);
		text(foodamount,730,65)

		foodReduction();

		if(mousePressedOver(feedbutton) && food <=9 && foodamount >= 1){
			food=food+1;
			foodamount = foodamount - 1;			
			database.ref("/").update({
				"Food" : food
			});
		}
		else if(mousePressedOver(feedbutton) && food <=9 && foodamount == 0){
			text("Please buy more food for your pet from the store",0,200);
		}

		
	
		if(tis%20 > 0.482 && tis%20 < 0.518 && tis > 1 && food >=1){
			food = food - 1;
			database.ref("/").update({
				"Food" : food
			});

			money = money + 10;
			database.ref("/").update({
				"Money" : money
			});
		}
	
		if(food < 9){
			dog.addImage(dogII);
		}
	
		if(food >=9){
			dog.addImage(dogI);
		}
	}

  	drawSprites();
}

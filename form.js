class Form{
    constructor(){		
    }

    display(){
        {var title = createElement("p");
        title.elt.id = "VP1";
        title.html("Virtual Pet 3");
        title.position(275,-40);

        var heading = document.getElementById("VP1");
        heading.style.color = "#FF0000";
		heading.style.fontSize = "50px";
        heading.style.textDecoration = "underline";}

		{var text1 = createElement("p");
        text1.elt.id = "uName";
		text1.html("Owner Name : ");
		text1.position(10,70);
		document.getElementById("uName").style.fontSize = "37px";
		document.getElementById("uName").style.color = "#FFFF00";}

        {var text2 = createElement("p");
        text2.elt.id = "pName";
		text2.html("Pet Name : ");
		text2.position(10,150);
		document.getElementById("pName").style.fontSize = "40px";
		document.getElementById("pName").style.color = "#FFFF00";}

        {var input1 = createInput("");
		input1.elt.id = "input1"
		document.getElementById("input1").style.fontSize = "30px";
        input1.position(245,110);}

		{var input2 = createInput("");
		input2.elt.id = "input2"
		document.getElementById("input2").style.fontSize = "30px";
        input2.position(200,195);}

        {var button1 = createButton("Continue");
		button1.elt.id = "button1";
        button1.position(150,300);
		document.getElementById("button1").style.fontSize = "20px";}

		{var button2 = createButton("Clear");
		button2.elt.id = "button2";
        button2.position(275,300);
		document.getElementById("button2").style.fontSize = "20px";}

		{var mybutton1 = createButton("Reset Names");
		mybutton1.elt.id = "mybutton1";
        mybutton1.position(10,350);
		document.getElementById("mybutton1").style.fontSize = "20px";}

		{var mybutton2 = createButton("Proceed to play");
		mybutton2.elt.id = "mybutton2";
        mybutton2.position(630,350);
		document.getElementById("mybutton2").style.fontSize = "20px";}

		var ask1 = createElement("p");
		var ask2 = createElement("p");
		print("h");

		mybutton1.hide();
		mybutton2.hide();

        button1.mousePressed(function(){
			if(document.getElementById("input1").value.length >=1 && document.getElementById("input2").value.length >=1){
				{input1.hide();
				input2.hide()
				button1.hide();
				text1.hide();
				text2.hide();
				button2.hide()
				document.getElementById("mybutton1").style.display = "block";
				document.getElementById("mybutton2").style.display = "block";}

				{var uName = input1.value();
				player1.update(uName);

				var pName = input2.value();
				pet1.update(pName);}

				{ask1.elt.id = "ask1";
				ask1.html("Your name is "+ uName);
				document.getElementById("ask1").style.color = "#00EEFFC2";
				document.getElementById("ask1").style.fontSize = "70px"
				ask1.position(20,40);}

				{ask2.elt.id = "ask2";
				ask2.html("Your pet's name is "+ pName);
				document.getElementById("ask2").style.color = "#00EEFFC2";
				document.getElementById("ask2").style.fontSize = "70px"
				ask2.position(20,140);}

				document.getElementById("ask1").style.display = "block";
				document.getElementById("ask2").style.display = "block";
			}
		});

		button2.mousePressed(function(){
			document.getElementById("input1").value = "";
			document.getElementById("input2").value = "";
		})

		mybutton1.mousePressed(function(){
			document.getElementById("uName").style.display = "block";
			document.getElementById("pName").style.display = "block";
			document.getElementById("input1").style.display = "block";
			document.getElementById("input2").style.display = "block";
			document.getElementById("button1").style.display = "block";
			document.getElementById("button2").style.display = "block";
			ask1.hide();
			ask2.hide();
			document.getElementById("mybutton1").style.display = "none";
			document.getElementById("mybutton2").style.display = "none";
		});

		mybutton2.mousePressed(function(){
			myState = "playing"
			game1.update(myState);
			title.hide();
			ask1.hide();
			ask2.hide();
			mybutton1.hide();
			mybutton2.hide();
		});
	}
}
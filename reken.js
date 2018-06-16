window.addEventListener("load",loaded,false);

function loaded(){
	var som = document.getElementById("som");
	var invoer = document.getElementById("invoer");
	var img = document.getElementById("antwoord-img");
	var opgave;
	var zien;

	function randomNumbers(){
		var a = Math.floor(Math.random()*9+1);
		var b = Math.floor(Math.random()*9+1);
		var operators = [" - ", " + ", " / ", " * "];
		var randomOperator = operators[Math.floor(Math.random() * operators.length)];
		
		// Zodat je geen negatieve getallen krijgt (het is namelijk voor kleine kinderen en die werken waarschijnlijk niet met -8)
		if(randomOperator == " - " && a < b) {
			opgave = b + randomOperator + a;
			zien = b + randomOperator + a;
			
		} else if(randomOperator == " * ") { // Verander * naar x omdat het beter is voor de "kinderen"
			opgave = a + randomOperator + b;
			zien = a + " x " + b;
		} else {
			opgave = a + randomOperator + b;
			zien = a + randomOperator + b;
		}
		som.innerHTML = zien;
		invoer.focus();
	}
	function resetall(){
		img.src = "placeholder.png";
		document.getElementById("was").innerHTML = "";
		invoer.value ="";
		randomNumbers();
	}
	
	randomNumbers();
	invoer.addEventListener("keydown",key,false);

	function key(e){
		var code = 13;
		if(e.keyCode == code)
		{
			
			if(eval(opgave) == invoer.value){
				img.src = "good.png";
			} else {
				document.getElementById("was").innerHTML = "Het antwoord is: " + eval(opgave);
				img.src = "bad.png";
			}
			window.setTimeout(resetall,1500);
		}
	}
	
}
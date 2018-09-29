

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function change(event) {
	event.target.parentNode.style.display ="none";

}
var counter=0;
var text = "";
var id ="";
function checkText(event){
	counter++;	
	id = event.target.id;
	
	text+=event.target.innerHTML;
	if(counter == 3){
	if (text=="H2SO4") {
		document.getElementById('first').innerHTML =text.slice(0,2);
		document.getElementById('second').innerHTML =text.slice(2,3);
		document.getElementById('thre').innerHTML =text.slice(3,text.length);

		text="";
		counter=0;	
			
		document.getElementById('s').innerHTML="";	
		event.target.innerHTML="";
	}
	else if(text=="CaCO3"){
		document.getElementById('fou').innerHTML =text.slice(0,2);
		document.getElementById('fiv').innerHTML =text.slice(2,3);
		document.getElementById('si').innerHTML =text.slice(3,text.length);

		text="";
		counter=0;	
		document.getElementById('ca').innerHTML="";	
		event.target.innerHTML="";
	}
	else if(text=="H2CO3"){
		document.getElementById('seve').innerHTML =text.slice(0,2);
		document.getElementById('eight').innerHTML =text.slice(2,3);
		document.getElementById('nine').innerHTML =text.slice(3,text.length);

		text="";
		counter=0;	
		event.target.innerHTML="";	
	}
	else if(text=="NaOH"){
		document.getElementById('ten').innerHTML =text.slice(0,2);
		document.getElementById('eleven').innerHTML =text.slice(2,3);
		document.getElementById('twel').innerHTML =text.slice(3,text.length);

		text="";
		counter=0;	
		document.getElementById('na').innerHTML="";	
		document.getElementById('o').innerHTML="";	
		event.target.innerHTML="";
	}
	else if(text=="H3PO4"){
		document.getElementById('trteen').innerHTML =text.slice(0,2);
		document.getElementById('forteen').innerHTML =text.slice(2, 3);
		document.getElementById('fifteen').innerHTML =text.slice(3,text.length);

		text="";
		counter=0;		
		document.getElementById('h3').innerHTML="";
		document.getElementById('p').innerHTML="";
		event.target.innerHTML="";
	}

	 else if(text=="KNO3"){
		document.getElementById('siteen').innerHTML =text.slice(0,1);
		document.getElementById('sevteen').innerHTML =text.slice(1,2);
		document.getElementById('eighteen').innerHTML =text.slice(2,text.length);

		text="";
		counter=0;	
	
		document.getElementById('k').innerHTML="";
		document.getElementById('n').innerHTML="";
			event.target.innerHTML="";	
	}
	else{
		text = "";
		counter=0;
	}
}
}

function change(event) {
	event.target.parentNode.style.display ="none";

}

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
var counter=0;

var text = "";
var temp = "";
function checkText(event){
	counter++;	
	text+=event.target.innerHTML;
	if(counter > 1){
	if (text=="NaCl") {
		document.getElementById('first').innerHTML =text.slice(0,text.length/2);
		document.getElementById('second').innerHTML =text.slice(text.length/2, text.length);
		text="";
		counter=0;	
		document.getElementById('na').innerHTML="";	
		event.target.innerHTML="";
	}
	else if(text=="Al2O3"){
		document.getElementById('thre').innerHTML =text.slice(0,3);
		document.getElementById('fou').innerHTML =text.slice(3, text.length);
		text="";
		counter=0;	
		document.getElementById('al2').innerHTML="";
		event.target.innerHTML="";
	}
	else if(text=="H2O"){
		document.getElementById('si').innerHTML =text.slice(0,2);
		document.getElementById('seve').innerHTML =text.slice(2, text.length);
		text="";
		counter=0;
		document.getElementById('h2').innerHTML="";	
		event.target.innerHTML="";	
	}
	else if(text=="HCl"){
		document.getElementById('eight').innerHTML =text.slice(0,text.length/2);
		document.getElementById('nine').innerHTML =text.slice(text.length/2, text.length);
		text="";
		counter=0;	
		document.getElementById('h').innerHTML="";	
		event.target.innerHTML="";
	}
	else if(text=="CaO"){
		document.getElementById('ten').innerHTML =text.slice(0,2);
		document.getElementById('eleven').innerHTML =text.slice(2, text.length);
		text="";
		counter=0;	
		document.getElementById('ca').innerHTML="";	
		event.target.innerHTML="";
	}

	 else if(text=="NH3"){
		document.getElementById('twel').innerHTML =text.slice(0,text.length/2);
		document.getElementById('trteen').innerHTML =text.slice(text.length/2, text.length);
		text="";
		counter=0;	
	
		document.getElementById('nnn').innerHTML="";
			event.target.innerHTML="";	
	}
	else if(text=="CH4"){
		document.getElementById('forteen').innerHTML =text.slice(0,text.length/2);
		document.getElementById('fifteen').innerHTML =text.slice(text.length/2, text.length);
		text="";
		counter=0;
		document.getElementById('c').innerHTML="";
		event.target.innerHTML="";	
			

	}
		else if(text=="SO2"){
		document.getElementById('sixteen').innerHTML =text.slice(0,text.length/2);
		document.getElementById('seventeen').innerHTML =text.slice(text.length/2, text.length);
		text="";
		counter=0;
		document.getElementById('s').innerHTML="";
		event.target.innerHTML="";	
		

	}
	else{
		text = "";
		counter=0;
	}
}
}

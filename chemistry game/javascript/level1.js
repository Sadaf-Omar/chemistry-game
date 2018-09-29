		window.onload =function () {

		var element=document.getElementsByClassName('element');
		var array = ['red','#00b386','#ffff66','#ffbf80','#b3b3ff','#00b386','#ffff66','#66e0ff','','#ffdf80',''
		,'#ffdf80','#66e0ff','#ffff80','#ffdf80','#ffff66','#b3b3ff','red','#00b386','#ffbf80',]
		for(var i=0;i<array.length; i++){

			element[i].style.backgroundColor= array[i];
		}

		
		}
		var score=0;

		var id,datasetdrop,datasetdrag;

		function allowDrop(event) {
				event.preventDefault();
		}
		function takeId(event){
			id = event.target.id;
		}
		function drop(event){
			var elemContent = document.getElementById(id);
			datasetdrop= elemContent.dataset.elem;
			datasetdrag= event.target.dataset.elem;
			if(datasetdrag == datasetdrop){
			event.target.innerHTML = elemContent.innerHTML;
			elemContent.style.opacity = "0";
			score+=5;
			document.getElementById('button2').innerHTML="امتیاز"+"      "+score;

		}
	}

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
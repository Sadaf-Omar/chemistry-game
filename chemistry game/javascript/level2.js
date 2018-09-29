var countClicks=0;
var num =0;
var score =0;
var question = [
	[
		"آب",
		"HO<sub>2</sub>","O<sub>2</sub>H","HeO<sub>2</sub>","H<sub>2</sub>O","HO",
		"H<sub>2</sub>O"

	],
	[
		"نمک طعام",
		"NaCl<sub>2</sub>","NaCl","ClNa","CNaO","CO<sub>2</sub>",
		"NaCl"

	],
	[
		"آهک",
		"CaO<sub>2</sub>","ClO","CBr","CNa","CaO",
		"CaO"

	],
	[
		"سنگ چونه",
		"CaO<sub>3</sub>","CaC","CO<sub>3</sub>","CaCO<sub>3</sub>","NaCO<sub>2</sub>",
		"CaCO<sub>3</sub>"

	],
	[
		"کاربن دای اکساید",
		"CO<sub>2</sub>","CaO<sub>2</sub>","NaS","H<sub>2</sub>O","O<sub>2</sub>HC",
		"CO<sub>2</sub>"

	],
	[
		"تیزاب گوگرد",
		"HS<sub>4</sub>O<sub>2</sub>","H<sub>2</sub>SO","CaSO","H<sub>2</sub>SO<sub>4</sub>","O<sub>2</sub>SH<sub>3</sub>",
		"H<sub>2</sub>SO<sub>4</sub>"

	],
	[
		"شکر یا قند",
		"H<sub>12</sub>O<sub>11</sub>C<sub>22</sub>","C<sub>22</sub>O<sub>11</sub>H<sub>12</sub>","C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>","H<sub>2</sub>SO<sub>2</sub>C<sub>22</sub>","S<sub>12</sub>H<sub>22</sub>O<sub>14</sub>",
		"C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>"

	],
	[
		"تیزاب نمک",
		"ClH<sub>2</sub>","ClH","HCl","H<sub>2</sub>Ca","CaO<sub>3</sub>",
		"HCl"

	],
	[
		"سودای نان",
		"NaH<sub>4</sub>O<sub>4</sub>","H<sub>4</sub>O<sub>3</sub>Cl","SO<sub>4</sub>H<sub>3</sub>","NaHCO<sub>3</sub>","NaS<sub>4</sub>O<sub>4</sub>",
		"NaHCO<sub>3</sub>"

	],
	[
		"تیزاب شوره",
		"NOH<sub>3</sub>","HNO<sub>3</sub>","ONaH","H<sub>2</sub>ONa","NaSO<sub>4</sub>",
		"HNO<sub>3</sub>"

	]

];
function _(x){
	return document.getElementById(x);
}
function renderQuestion() {
		animation();

	if(num>=question.length){
		for (var i = 1; i < 6; i++) {	
					
				_("mo"+i).remove();

			}
			_("nameOf").remove();
			_("button").remove();

		_("head").innerHTML = "امتیاز شما است :"+score;
		_("head").style.display="block";
		_("head").style.backgroundColor="rgba(51, 0, 51,0.6)";
		_("head").style.padding="2%";
		_("head").style.width="30%";
		_("head").style.textAlign = "center";
		_("head").style.direction = "rtl";


	}

	_("nameOf").innerHTML = question[num][0];
	_("mo1").innerHTML = question[num][1];
	_("mo2").innerHTML = question[num][2];
	_("mo3").innerHTML = question[num][3];
	_("mo4").innerHTML = question[num][4];
	_("mo5").innerHTML = question[num][5];


	_("mo1").style.backgroundColor="rgba(51, 0, 51,0.6)";
	_("mo2").style.backgroundColor="rgba(51, 0, 51,0.6)";
	_("mo3").style.backgroundColor="rgba(51, 0, 51,0.6)";
	_("mo4").style.backgroundColor="rgba(51, 0, 51,0.6)";
	_("mo5").style.backgroundColor="rgba(51, 0, 51,0.6)";

	for (var i = 1; i < 6; i++) {	
					
				_("mo"+i).setAttribute('onclick','checkAnswer(event)');

			}



	// _("counter").innerHTML = num+1 + " of " + question.length;
}

function checkAnswer(event){
		for (var i = 1; i < 6; i++) {	
					
				_("mo"+i).setAttribute('onclick','null');

			}

	//if(countClicks==0){
	if(event.target.innerHTML ==question[num][6]){
		score +=10;
		_("scores").innerHTML= score;
		event.target.style.backgroundColor= "rgb(102, 255, 217)";
		
	}else if (event.target.innerHTML !=question[num][6]){
		for (var i = 1; i < 6; i++) {
			if(_("mo"+i).innerHTML==question[num][6]){
				_("mo"+i).style.backgroundColor="rgb(102, 255, 217)";
				
			}
			else{
	
				_("mo"+i).style.backgroundColor="rgb(255, 187, 153)";
				_("mo"+i).disabled = true;
			}
		}
		
		
		 }
		//}
		// countClicks++;

	 }

function changepage(){
	num++;
	renderQuestion();
}


function animation() {
				
			_("mo1").style.animation="example 2s linear";
			_("mo2").style.animation="exampl 2s linear";
			_("mo3").style.animation="examp 2s linear";
			_("mo4").style.animation="exam 2s linear";
			_("mo5").style.animation="exa 2s linear";
			}
			// function stopainmation() {
			// _("mo1").style.animationName=none;
			// _("mo2").style.animationName=none;
			// _("mo3").style.animationName=none;
			// _("mo4").style.animationName=none;
			// _("mo5").style.animationName=none;
			// }
			// window.addEventListener("load", animation);

window.addEventListener("load", renderQuestion);


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

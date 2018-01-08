const randomButton = document.getElementById("losuj");
const randomNumberCircle = document.getElementsByClassName("number");
const clearButton = document.getElementById("clear");
var result = [];

function rysuj(){
	 //zerowanie
 	$(".number").remove();
 for (var i = 0; i < result.length; i++) {
 	const newRandomNumber = document.createElement('div');

	newRandomNumber.textContent = result[i];
	newRandomNumber.classList.add("number");
	
	const section = document.querySelector('section');
	section.appendChild(newRandomNumber);
 };
}


function losowanie(){
	if (result.length===6){
		return;
	}
	
	const wynikLosowania = Math.floor(Math.random()*49+1);

	for(let i=0; i<result.length; i++){
		if(wynikLosowania === result[i])
			return losowanie();
	}


	result.push(wynikLosowania);
 	rysuj()
};



randomButton.addEventListener("click", losowanie);
clearButton.addEventListener("click", function(){
	result=[];
	rysuj();
});

const sortButton = document.getElementById('sort');

sortButton.addEventListener('click', function(){
	console.log(result);
	result.sort(function(a,b){
		return a-b;
	});
	rysuj();
});


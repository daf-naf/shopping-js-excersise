var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var addDone = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//here below - instead of console.log... i want it to add a toggle class of "done".
// so far i tried to add after function: li.classList.toggle("done"); BUT IT DOESNT FUCKIN WORKKKKK!! HELP

for (var i=0; i<addDone.length; i++) {
	addDone[i].addEventListener("click", function() {
	console.log("click!");
}
		);
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

const button2= document.querySelector("#button2")
button2.addEventListener("click", window.myClickFunction)
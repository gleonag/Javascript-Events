window.myEventListener = function myEventListener()
{
//	your code here
var element = document.getElementById("firstDiv")
while (element.firstChild){
	element.removeChild(element.firstChild)
}
}



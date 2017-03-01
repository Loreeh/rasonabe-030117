function addMe(){
	var x = document.getElementById('fn').value;
	var y = document.getElementById('sn').value;;
	var sum= parseInt(x) + parseInt(y);
	console.log('x:');
	document.getElementById('sum').innerHTML = "The Sum is: " +sum;
}
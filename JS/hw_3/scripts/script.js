
arr = create_arr(10);
echo_arr()

function create_arr(num) {
	
	var arr = []
	for (var i = 1; i <= num; i++) {
		var string = "item " + i;
		arr.push(string);
	}
	return arr;

}

function echo_arr() {

	var string = "";
	document.getElementById('new').innerHTML = " ";
	for (var i = 0; i < arr.length; i++) {
		string = arr[i] + " || ";
		document.getElementById('new').insertAdjacentText("beforeEnd", "" + string);
	}

}


function edit_arr(act) {

	if (act == "edit") {
		var i = document.getElementById("index").value;
		var value = document.getElementById("string").value;
		arr[i] = value;
	}
	
	if (act == "pop") {
		arr.pop();
	}

	if (act == "shift") {
		arr.shift();
	}

	if (act == "push") {
		var string = document.getElementById("push_par_2").value;
		arr.push(string);
	}

	echo_arr();

}
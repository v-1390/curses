var num = 5; 
var rows = 5;
var matrix_arr = create_matrix_arr(num, rows);

echo_matrix_arr()

function create_matrix_arr(num, rows) {
	
	var matrix_arr = [];
	for(var i=0; i<rows; i++){
		matrix_arr[i] = [];
		for(var j=0; j<num; j++){
			var matrix_arr_item = [];
			for(var n  = 1; n <= num ; n++) {
			var r = i + 1;
			var item = "item " + r + "." + n;
			matrix_arr_item.push(item);
			}
		matrix_arr[i][j] = matrix_arr_item[j];
  		}
	}
	return matrix_arr;
}

function echo_matrix_arr() {
	var strin = "";
	// alert(matrix_arr.lengh)
	document.getElementById('table').innerHTML = "<table id='auto'>";
	for (var r = 0; r < matrix_arr.length; r++) {
		document.getElementById('auto').insertAdjacentHTML("beforeEnd", "<tr id='" + r + "''>");
		for (var n = 0; n < matrix_arr[r].length; n++) {
			strin = "<th>" + matrix_arr[r][n] + "</th>";
			document.getElementById(r).insertAdjacentHTML("beforeEnd", strin);
		}
		document.getElementById('auto').insertAdjacentHTML("beforeEnd", "</tr>");
	}
	document.getElementById('table').insertAdjacentHTML("beforeEnd", "</table>");
	return matrix_arr
}

function edit_arr_2(act) {

	if (act == "edit") {
		var col = document.getElementById("col").value - 1;
		var row = document.getElementById("rows").value - 1;
		var value = document.getElementById("string_2").value;
		matrix_arr[row][col] = value;
	}
	
	if (act == "pop") {
		matrix_arr.pop();
	}

	if (act == "shift") {
		matrix_arr.shift();
	}

	if (act == "push") {
		var string = document.getElementById("push_par_2").value;
		var push_row_ref = matrix_arr.length - 1;
		var push_row =  matrix_arr.length - 1;
		var push_num = matrix_arr[push_row_ref].length;
		if (push_num < num) {
			matrix_arr[push_row].push(string);
		}
		else {
			push_row += 1;
			// push_num = 0;
			matrix_arr[push_row] = [];
			matrix_arr[push_row].push(string);
		}
	}

	echo_matrix_arr();

}
if (typeof(Storage) !== "undefined") {
	console.log("Данный браузер потдерживает LocalStorage");
} else {
	console.log("Данный браузер не потдерживает LocalStorage");
}

//ex.3

if (window.localStorage.arr == undefined) {
	var arr = create_arr(10);
	window.localStorage.arr = JSON.stringify(arr);
}

echo_arr( window.localStorage.arr )

function create_arr(num) {
	
	var arr = []
	for (var i = 1; i <= num; i++) {
		var string = "item " + i;
		arr.push(string);
	}
	return arr;

}
function echo_arr(arr) {
	arr = localStorage.arr ? JSON.parse(localStorage.arr) : [];
	var string = "";
	document.getElementById('new').innerHTML = " ";
	for (var i = 0; i < arr.length; i++) {
		string = arr[i] + " || ";
		document.getElementById('new').insertAdjacentText("beforeEnd", "" + string);
	}

}

var keyw = "";

for (var i = 0; i < localStorage.length; i++) {
	keyw = localStorage.key(i);
	$("#local").append("key:" + ' "' + keyw + '" ' + ", "
						 + "value: " + '"' + localStorage[keyw] + '"' + "</br>");
}
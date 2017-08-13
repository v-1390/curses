function edit_page_style(par) {
	
	if (par == "p") {
		var p = document.getElementsByTagName('p');
		for (var i = 0; i < p.length; i++) {
			p[i].style.background = "red";
		}
	}

	if (par == "img") {
		var img = document.getElementsByTagName('img');
		for (var i = 0; i < img.length; i++) {
			img[i].style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
		}
	}
}

function edit_tag_style(par) {

	var par_link = document.getElementsByTagName(par);
	if (par_link.length != 0) {
		for (var i = 0; i < par_link.length; i++) {
			par_link[i].style.borderBottom = "1px solid black";
		}
	}
	else {
			alert("Введенный вами тег отсутствует на страничке");
	}
}

var cliks = 0;
document.getElementById('cliks').innerText = cliks;

function cliks_counter() {
	
	cliks += 1;
	document.getElementById('cliks').innerText = cliks;
}

function counter() {
	
	var p = document.getElementsByTagName('p');
	var num = document.querySelectorAll('p > div');
	if (num.length == 0){
		for (var i = 0; i < p.length; i++) {
			p[i].insertAdjacentHTML("afterBegin" ,"<div class='p_num'></div>");
		}
	}
	
	var num = document.querySelectorAll('p > div');

	for (var i = 0; i < num.length; i++) {
		num[i].style.display = "inline-block";
		num[i].innerHTML = i + 1 +".";
	}
}

function access(age) {

	var result = "";
	if (age == undefined || age == "") {
		result = "Вы не ввели возраст";
	}
	else if (age < 16) {
		result = "Вы еще молоды";
	}
	else {
		result = "Добро пожаловать";
	}

	return result;
}

function get_arr_lenght(arr) {
	
	return arr.length - 1;
}

function num_edit(num) {
	
	if (num >= 10) {
		return Math.pow(num, 2);
	}
	if (num < 7) {
		return "Введеннле вами число меньше 7"
	}
	if (num == 8 || num == 9) {
		return num - 1;
	}
}

function random_integer(min, max ) {

    var integer = min + Math.random() * (max - min);
    integer = Math.floor(integer);
    return integer;
}

var integer = random_integer(0, 10);
var user_answer_no = 0;

function random_game(user_answer) {

	var result = "";
	if (user_answer == "") {
		result = "";
		user_answer_no--;
	}
	if (user_answer_no <= 3) {
		if (user_answer < integer) {
			result = "Меньше";
		}
		if (user_answer > integer) {
			result = "Больше";
		}
		if (user_answer == integer) {
			result = "Вы выиграли";
		}
	}
	else {
		result = "Превышен лимит попыток"
	}
	user_answer_no++;
	var attempts = 3 - user_answer_no;
	document.getElementById("attempts").innerText = "У вас осталось " + attempts + " попыток.";
	return result;
}
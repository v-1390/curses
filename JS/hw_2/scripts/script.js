
function get_user_age(User_Berth) {


	// var $_GET;
	// var $_GET = window.location.search.split("=");
	// var getVar = $_GET[1].split("=");
	// var User_Berth = $_GET[1];

	// var User_Berth = prompt("В каком году вы родились?", "");
	var dt = new Date();
	var year = dt.getFullYear();
	var User_Berth = +User_Berth;
	// alert(User_Berth);

	if (User_Berth < 100) {
		User_Berth += 2000; 
	}

	if (User_Berth == null) {
		return "Вы не ввели год";
	}

	if (User_Berth > year) {
		return ("Вы не могли родиться в булуещем");
	}

	var User_age = year - +User_Berth;
	return "Ваш возраст: " + User_age + " лет";
	// alert("Ваш возраст: " + User_age + " лет");
}


function get_large(par1, par2) {

	par1 = +par1;
	par2 = +par2;

	var larger = par1 > par2 ? par1 : par2 > par1 ? par2 : "Они равны";

	return "Большее значениe: " +larger;
}

function get_entrance(apartment) {

	var entrance = 1 <= apartment && apartment <= 20 ? "Данная квартира находиться в 1 подъезде" : 
					21 <= apartment && apartment <= 64 ? "Данная квартира находиться в 2 подъезде" :
					65 <= apartment && apartment <= 80 ? "Данная квартира находиться в 3 подъезде" :
					"Данная квартира не в этом доме";
	return entrance;
}

function autorisation($login, pass) {

	var users = {"ivan" : 333,
				"ssss" : 666,
				"gibs" : 000};

	var user_login = {login : $login,
						pass : pass};

	if ($login in users) {
		user_check = {login : $login,
						pass : users[$login]}
	}
	else  {
		return "Ошибка";
	}

	if (user_login["login"] == user_check["login"] && user_login["pass"] == user_check["pass"]) {
		return "Добро пожаловать";
	}
	else  {
		return "Ошибка";
	}
}

function get_large_from_3(par1, par2, par3) {

	var larger = par1 > par2 && par1 > par3 ? par1 : 
					par2 > par1 && par2 > par3 ? par2 : 
					par3 > par1 && par3 > par2 ? par3 : 
					par1 == par2 && par1 > par3 ? par2 :
					par2 == par3 && par2 > par1 ? par3 :
					"Они равны";
	return "Большее значениe: " +larger;
}

function from_1_to_101() {
	
	document.getElementById('paired').innerHTML = " ";

	for (var i = 1; i <= 101; i++) {
		if (i == 1 ) {
		}
		if (i % 2 == 0) {
		document.getElementById('paired').insertAdjacentText("beforeEnd"," "+i);
		}
	}
}

function from_200_to_0() {

	document.getElementById('200-0').innerHTML = " ";

	for (var i = 200; i > 0; i--) {
		document.getElementById('200-0').insertAdjacentText("beforeEnd"," "+i);
	}
}

function sum() {

	var sum = 0;
	
	for (var i = 0; i < 101; i++) {
		sum = i + sum;
	}

	return sum;
}

function y_n($num, $degree) {

	var $degree_num = +$num;

	for (var i = 1; i < +$degree; ++i) {
		$degree_num = $degree_num * $num;
	}
	$degree = 0;
	return $degree_num;
}

function multiplication_7() {

	document.getElementById('multipli').innerText = " ";
	
	var multipled = 0;

	for (var i = 1; i < 10; i++) {
		multipled +=7;
		document.getElementById('multipli').insertAdjacentText("beforeEnd",i+"*7 = " +multipled);
		document.getElementById('multipli').insertAdjacentHTML("beforeEnd", "</br>");

	}
}

function multiplicate() {
	var multipled = 1;

	for (var i = 1; i <= 50; i++) {
		multipled *= i;
	}
	return multipled;
}

function special_characters() {
	var num = 1000;

	for (num ; num < 2001; num++){
		document.getElementById('spec_char').insertAdjacentHTML("beforeEnd","&#" + num + "; ");
		if (num == 1000) {
			document.getElementById('spec_char').innerHTML = "&#" + num + "; ";
		}
	}
}

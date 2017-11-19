function get_input_length() {
	var user_string = document.getElementById('user_input').value;
	document.getElementsByName('user_string_length')[0].innerText = user_string.length;
}

function insert_imeges() {
	var imeges_url = new Array();
	for (var i = 1; i < 10; i++) {
		imeges_url[i] = "http://some-files.zzz.com.ua/img/" + i + ".jpeg";
	}
	for (var i = 1; i < imeges_url.length; i++) {
		if (i == 1) {
			document.getElementsByClassName('img')[0].innerHTML = "<img src='"+ imeges_url[i] +"'>";
		}
		else {
			document.getElementsByClassName('img')[0].insertAdjacentHTML( "afterBegin", "<img src='"+ imeges_url[i] +"'>");
		}
	}
}


function url_edit() {
	var user_input_url = document.getElementById('url').value;
	var url_output = user_input_url.replace("www.", "").replace("http://", "").replace("https://", "");
	document.getElementById('url_output').innerText = url_output;
}

function mail_counter(mail) {
	var count = 0;
	for (var i = 0; i < mail.length; i++) {
		if (mail[i] == "@" || mail[i] == " ") {
			count++;
		}
	}
	return count;
}

function form_verif() {
	var pass = document.getElementById('pass').value;
	var mail = document.getElementById('mail').value;
	if (mail_counter(mail) != 1) {
		alert("Неправильный e-mail");
	}
	if (pass.length < 5) {
		alert("Пароль меньше 5 символов");
	}
	else {
		alert("Вы успешно зарегистрированы")
	}
}

function simbol_code() {
	var simbol = document.getElementById('simbol').value;
	document.getElementById('simbol_code').innerText = simbol.charCodeAt();
}

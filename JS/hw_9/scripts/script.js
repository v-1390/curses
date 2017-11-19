function test() {
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	xhr.open('POST', 'http://some-files.zzz.com.ua/ajax/a1.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var body = 'num1="1" & num2="2"';
	xhr.send(body);
	console.log( xhr.responseText );
	console.log( xhr.status + ': ' + xhr.statusText );
}

function send( target ) {
	var xhr = new XMLHttpRequest();
	// xhr.withCredentials = true;
	xhr.open('POST', 'http://some-files.zzz.com.ua/ajax/' + target, true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// $('form[id="'+target+'"]').children();
	var body = $('form[id="'+target+'"]').serialize();
	xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            $('form[id="'+target+'"]').next().html(xhr.responseText);
        };
    };
	xhr.send(body);

}

//JSON


//subzero
//3646503
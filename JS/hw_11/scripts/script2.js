function style() {
	if (window.localStorage.style == undefined) {
		return 1;
	}
	else {
		return window.localStorage.style
	}
}

$('input[name="style"]').click( function ( event ) {
	window.localStorage.style = $(this).val();
	$("link[rel='stylesheet']").remove();
	$("head").append("<link rel='stylesheet' href='css/style"+ style() +".css'>");
});

$("link[rel='stylesheet']").remove();
$("head").append("<link rel='stylesheet' href='css/style"+ style() +".css'>");
if (localStorage.consent != 1) {jQuery(document).ready( function (){
			var timerId = setTimeout(show_modal, 4000);
});}

function show_modal() {
	$("head").append("<link rel='stylesheet' href='css/style_modal.css'>");
	$("body").append("<div id='modal_window'><p><input type='checkbox' id='consent'>Согласен</p><button id='sub'>Закрыть</button></div>");
	$("#sub").click( function ( event ) {
		if ($("#consent").is(':checked')) {
			localStorage.consent = 1;
		}
		else {
			localStorage.consent = 0;
		}
		$("#modal_window").remove();
		$("link [href='css/style_modal.css']").remove();
	});
}
function random(num) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < num; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}
	
function url_proccesor() {
	var input_url = $("input[name='url']").val();
	input_url = input_url.replace("www.", "").replace("http://", "").replace("https://", "");
	var reg_exp = /[^\w]{1,}[.\w]{2,}/g ;
	input_url = input_url.replace(reg_exp, "" );
	var password = input_url;
	password = password.replace(/[o+ | O+]/g, "0" ).replace(/[l+]/g, "1" ).replace(/[i+]/g, "3" ).replace(/[s+]/g, "5" );
	password += random(4);
	$("#password").html(password);
}
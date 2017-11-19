
$('.coor').mousemove( function ( event ) {
	var position = $('.coor').offset()
	var position_X = event.pageX - +position.left;
	var position_Y = event.pageY - +position.top;
	$('#coor').html( "X:" + position_X + " Y:" + position_Y );
	// console.log( "X:" + position_X + "Y:" + position_Y );
});

$('.folder').click( function ( event ) {
	$('.folder').css( "background", "url('img/open-folder.jpg')");
});

$('.block').mousemove( function ( event ) {
	$(this).css({
		"transition" : "border-radius 0.5s linear",
		"border-radius" : "15px"
	});
	$(this).mouseout( function ( event ) {
		$(this).css("border-radius", "0px");
	});
});


$(".triger").click( function ( event ) {
	clicks["triger"]++;
	if ( clicks["triger"] == 3) {
		clicks["triger"] = 0;
	}
	$(this).css("left", clicks["triger"]*50 + "px");

	console.log(clicks["triger"]);
});

$(".float").click( function ( event ) {
	clicks["move"]++;
	$(this).css("top", clicks["move"]*100 + "px");
})


var clicks = {
	"move" : "0",
	"triger" : "0"
};

function create_block_arr(num, rows) {
	
	var block_arr = [];
	for(var i=0; i<rows; i++){
		block_arr[i] = [];
		for(var j=0; j<num; j++){
			var block_arr_item = [];
			for(var n  = 1; n <= num ; n++) {
			var block = '<div class="block"></div>';
			block_arr_item.push(block);
			}
		block_arr[i][j] = block_arr_item[j];
  		}
	}
	return block_arr;
}

function insert_blocks_from_arr( block_arr ) {
	var $strin = "";

	for (var rows = 0; rows < block_arr.length; rows++) {
		for (var num = 0; num < block_arr[rows].length; num++) {
			$(".blocks").append(block_arr[rows][num]);
			if (num == block_arr.length - 1) {
				$(".blocks").append("</br>");
			}
		}
	}
}

var block_arr = create_block_arr(20,20);

insert_blocks_from_arr( block_arr );
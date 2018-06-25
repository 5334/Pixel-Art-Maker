// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
	
});


function makeGrid(x, y) {
	$('tr').remove();

	for (var i=1; i<=x; i++){
		$('#pixelCanvas').append('<tr id=table' + i+ '></tr>');
			for ( var j=1; j<=y; j++){
				$('#table' + i).append('<td></td>');
			}

	}



//add color
$('td').click(function(){
	color = $('#colorPicker').val();

	if ($(this).attr('style')){
		$(this).removeAttr('style')
	} else {
		$(this).attr('style', 'background-color:' + color);
	}
})
}

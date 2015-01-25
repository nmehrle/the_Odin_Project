$(document).ready(function() {
	

	var numRows = 30;
	var numCols = 30;
	pixWidth = 600/numCols;
	pixHeight = 600/numRows;
    for(var i =0; i<numRows; i++) {
    	$('#gridWrapper').append('<div class="row"></div>');
    }
    for(var j=0; j<numCols; j++){
    	var toAppend = '<div class="pixel"> </div>';
    	$('.row').append(toAppend);
   	}
   	var $pixel = $('.pixel');
   	$pixel.css("width",pixWidth).css("height",pixHeight);
   	$pixel.mouseenter(function() {
   		$(this).css('background-color',"#000");
   	});



});

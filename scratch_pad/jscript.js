$(document).ready(function() {
	
	var $body=$('body');

    for(var i =0; i<5; i++) {
    	var thisId = 'row'+i;
    	$('body').append('<div id='+thisId+' class="row"></div>');
    	for(var j=0; j<5; j++){
    		$('#'+thisId).append('<div class="pixel"> </div>');
   		}
    }

});

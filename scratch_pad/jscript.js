$(document).ready(function() {
	$('#gridWrapper').mouseenter(function() {
		$('#gridWrapper').animate({height: 400},200);
		$('#gridWrapper').animate({backgroundColor: '#0f0'},'slow');
	}).mouseleave(function() {
		$('#gridWrapper').animate({height: '300px'});
	});

	$('body').prepend('<p> Hello World </p>');

});
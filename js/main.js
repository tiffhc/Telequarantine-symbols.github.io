
function flipIt() {
    $('.card').toggleClass('flipped');
}
$('.card').click(flipIt);

/*

$(document).ready(function(){
	$(".card").on('click', function() {
		$('.card').toggleClass('flipped'); 
	}); 
});

*/
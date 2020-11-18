/*
function flipIt() {
    $('.card').toggleClass('flipped');
}
$('.card').click(flipIt);

*/ 

$(document).ready(function(){
	$(".card").on('click', function() {	
		$('.card').toggleClass('enlarged'); 
		$('.card').toggleClass('flipped'); 
		
		//check if the card has this class in it - don't need for now 
		/*
		$('.card').classList.contains('.back') {
			$('.card').css({
			'-webkit-animation-play-state': 'paused',
			'-moz-animation-play-state': 'paused',
			'-o-animation-play-state': 'paused',
			'animation-play-state': 'paused',
			});
		}, function() 
		{
			$('.card').css({
			'-webkit-animation-play-state': 'running',
			'-moz-animation-play-state': 'running',
			'-o-animation-play-state': 'running',
			'animation-play-state': 'running',
			});
		}
		*/ 
		
	
	}); 
});

/*how to code elements to move 
var position = 0;
var current_card = document.getElementById("card1"); 
var interval = setInterval(function() {
	position -= 1;
	$("body").css({ "card1":+ position +"px 0px" })
}, 35);

*/ 
/*
function flipIt() {
    $('.card').toggleClass('flipped');
}
$('.card').click(flipIt);

*/ 

$(document).ready(function(){
	$(".card").on('click', function() {
		$('.card').toggleClass('flipped'); 
	}); 
});

/*how to code elements to move */ 
var position = 0;
var current_card = document.getElementById("card1"); 
var interval = setInterval(function() {
	position -= 1;
	$("body").css({ "card1":+ position +"px 0px" })
}, 35);




/*
function AnimateCard(){
	var 
}
*/

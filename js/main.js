/*
function flipIt() {
    $('.card').toggleClass('flipped');
}
$('.card').click(flipIt);

*/ 

var c1 = document.getElementById('front1'); 
var c2 = document.getElementById('front2'); 


$(document).ready(function(){
	

	$(".card1").on('click', function() {	
	
		$('.card1').toggleClass('flipped'); 
		$('.card1').toggleClass('enlarged'); 
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
	
	
	$(".card2").on('click', function() {	
	
		$('.card2').toggleClass('flipped'); 
		$('.card2').toggleClass('enlarged'); 
	}); 
	
	$(".card3").on('click', function() {	
	
		$('.card3').toggleClass('flipped'); 
		$('.card3').toggleClass('enlarged'); 
	}); 
	
	$(".card4").on('click', function() {	
	
		$('.card4').toggleClass('flipped'); 
		$('.card4').toggleClass('enlarged'); 
	}); 
	
	$(".card5").on('click', function() {	
	
		$('.card5').toggleClass('flipped'); 
		$('.card5').toggleClass('enlarged'); 
	}); 
	
	$(".card6").on('click', function() {	
	
		$('.card6').toggleClass('flipped'); 
		$('.card6').toggleClass('enlarged'); 
	}); 
	
	$(".card7").on('click', function() {	
	
		$('.card7').toggleClass('flipped'); 
		$('.card7').toggleClass('enlarged'); 
	}); 
	
	$(".card8").on('click', function() {	
	
		$('.card8').toggleClass('flipped'); 
		$('.card8').toggleClass('enlarged'); 
	}); 
	
	$(".card9").on('click', function() {	
	
		$('.card9').toggleClass('flipped'); 
		$('.card9').toggleClass('enlarged'); 
	}); 
	
	$(".card10").on('click', function() {	
	
		$('.card10').toggleClass('flipped'); 
		$('.card10').toggleClass('enlarged'); 
	}); 
	
	$(".card11").on('click', function() {	
	
		$('.card11').toggleClass('flipped'); 
		$('.card11').toggleClass('enlarged'); 
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


function cardscontrol() {
	var c = document.getElementsByClassName("flip-container"); //get all the cards '

	
}

//stars code

blackhole('#blackhole');

function blackhole(element) {
	var h = $(element).height(), //formerly known as element
	    w = $(element).width(),
	    cw = w,
	    ch = h,
	    maxorbit = 255, // distance from center
	    centery = ch/2,
	    centerx = cw/2;

	var startTime = new Date().getTime();
	var currentTime = 0;

	var stars = [],
	    collapse = false, // if hovered
	    expanse = false; // if clicked

	var canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo(element),
	    context = canvas.get(0).getContext("2d");

	context.globalCompositeOperation = "multiply";

	function setDPI(canvas, dpi) {
		// Set up CSS size if it's not set up already
		if (!canvas.get(0).style.width)
			canvas.get(0).style.width = canvas.get(0).width + 'px';
		if (!canvas.get(0).style.height)
			canvas.get(0).style.height = canvas.get(0).height + 'px';

		var scaleFactor = dpi / 96;
		canvas.get(0).width = Math.ceil(canvas.get(0).width * scaleFactor);
		canvas.get(0).height = Math.ceil(canvas.get(0).height * scaleFactor);
		var ctx = canvas.get(0).getContext('2d');
		ctx.scale(scaleFactor, scaleFactor);
	}

	function rotate(cx, cy, x, y, angle) {
		var radians = angle,
		    cos = Math.cos(radians),
		    sin = Math.sin(radians),
		    nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
		    ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
		return [nx, ny];
	}

	//canvas resolution
	setDPI(canvas, 192);

	var star = function(){

		// Get a weighted random number, so that the majority of stars will form in the center of the orbit
		var rands = [];
		rands.push(Math.random() * (maxorbit/2) + 1);
		rands.push(Math.random() * (maxorbit/2) + maxorbit);

		this.orbital = (rands.reduce(function(p, c) {
			return p + c;
		}, 0) / rands.length);
		// Done getting that random number, it's stored in this.orbital

		this.x = centerx; // All of these stars are at the center x position at all times
		this.y = centery + this.orbital; // Set Y position starting at the center y + the position in the orbit

		this.yOrigin = centery + this.orbital;  // this is used to track the particles origin

		this.speed = (Math.floor(Math.random() * 0.5) + 0.8)*Math.PI/180; // The rate at which this star will orbit- originally 2.5 and 1.5
		this.rotation = 0; // current Rotation
		this.startRotation = (Math.floor(Math.random() * 360) + 1)*Math.PI/180; // Starting rotation.  If not random, all stars will be generated in a single line.  

		this.id = stars.length;  // This will be used when expansion takes place.

		this.collapseBonus = this.orbital - (maxorbit * 0.7); // This "bonus" is used to randomly place some stars outside of the blackhole on hover
		if(this.collapseBonus < 0){ // if the collapse "bonus" is negative
			this.collapseBonus = 0; // set it to 0, this way no stars will go inside the blackhole
		}

		stars.push(this);
		this.color = 'rgba(255,255,255,'+ (2 - ((this.orbital) / 255)) +')'; // Color the star white, but make it more transparent the further out it is generated //255, 1

		this.hoverPos = centery + (maxorbit/2) + this.collapseBonus;  // Where the star will go on hover of the blackhole
		this.expansePos = centery + (this.id%100)*-10 + (Math.floor(Math.random() * 20) + 1); // Where the star will go when expansion takes place


		this.prevR = this.startRotation;
		this.prevX = this.x;
		this.prevY = this.y;

		// The reason why I have yOrigin, hoverPos and expansePos is so that I don't have to do math on each animation frame.  Trying to reduce lag.
	}
	star.prototype.draw = function(){
		// the stars are not actually moving on the X axis in my code.  I'm simply rotating the canvas context for each star individually so that they all get rotated with the use of less complex math in each frame.



		if(!expanse){
		
			
			
			this.rotation = this.startRotation + (currentTime * this.speed);
			if(!collapse){ // not hovered
				if(this.y > this.yOrigin){
					this.y-= 2.5;
				}
				if(this.y < this.yOrigin-4){
					this.y+= (this.yOrigin - this.y) / 10;
				}
			} else { // on hover
				this.trail = 1;
				if(this.y > this.hoverPos){
					this.y-= (this.hoverPos - this.y) / -5;
				}
				if(this.y < this.hoverPos-4){
					this.y+= 2.5;
				}
			}
		} else {
			//once it is expanded
			
			//function that makes the cards appear
			
			//function that makes the cards clickable 
			
			
			this.rotation = this.startRotation + (currentTime * (this.speed / 2));
			if(this.y > this.expansePos){
				this.y-= Math.floor(this.expansePos - this.y) / -140;
			}
		}

		context.save();
		context.fillStyle = this.color;
		context.strokeStyle = this.color;
		context.beginPath();
		var oldPos = rotate(centerx,centery,this.prevX,this.prevY,-this.prevR);
		context.moveTo(oldPos[0],oldPos[1]);
		context.translate(centerx, centery);
		context.rotate(this.rotation);
		context.translate(-centerx, -centery);
		context.lineTo(this.x,this.y);
		context.stroke();
		context.restore();


		this.prevR = this.rotation;
		this.prevX = this.x;
		this.prevY = this.y;
	}


	$('.centerHover').on('click',function(){
		collapse = false;
		expanse = true;
		
		//make the cards appeart
		$('.cards').toggleClass('show'); 
		
		//make the instruction disappear 
		$('.instructions').toggleClass('leave'); 

		$(this).addClass('open');
		$('.fullpage').addClass('open');
		setTimeout(function(){
			$('.header .welcome').removeClass('gone');
		}, 500);
	});
	$('.centerHover').on('mouseover',function(){
		if(expanse == false){
			collapse = true;
		}
	});
	$('.centerHover').on('mouseout',function(){
		if(expanse == false){
			collapse = false;
		}
	});

	window.requestFrame = (function(){
		return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	function loop(){
		var now = new Date().getTime();
		currentTime = (now - startTime) / 50;

		var gradient = context.createLinearGradient(0, 0, 0, 500); 
		gradient.addColorStop(0, '#1B2947', 0.1); 
		gradient.addColorStop(0.5, '#550f5E', 0.5); 
		gradient.addColorStop(1, '#2B1A55'); 
		
		context.fillStyle = gradient; // somewhat clear the context, this way there will be trails behind the stars 'rgba(25,25,25,0.2)'
		context.fillRect(0, 0, cw, ch);

		for(var i = 0; i < stars.length; i++){  // For each star
			if(stars[i] != stars){
				stars[i].draw(); // Draw it
			}
		}

		requestFrame(loop);
	}

	function init(time){
		var gradient = context.createLinearGradient(0, 20, 0, 350); 
		gradient.addColorStop(0, '#1B2947', 0.1); 
		gradient.addColorStop(0.5, '#550f5E', 0.5); 
		gradient.addColorStop(1, '#2B1A55'); 
		
		context.fillStyle = gradient;  // Initial clear of the canvas, to avoid an issue where it all gets too dark (25,25,25,1)
		context.fillRect(0, 0, cw, ch);
		for(var i = 0; i < 2500; i++){  // create 2500 stars
			new star();
		}
		loop();
	}
	init();
}

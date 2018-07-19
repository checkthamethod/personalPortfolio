//image slider

var i = 0;
var images = [];
var time = 3000;

images[0] = '../pictures/image4.jpg';
images[1] = '../pictures/image2.jpg';
images[2] = '../pictures/image3.jpg';


function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	}else{
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

$(document).ready(function(){
	$('#hamburger').click(function(){
		$("#hamburger-left").toggleClass('open-hamburger');
          $("#hamburger-middle").toggleClass('open-hamburger');
          $("#hamburger-right").toggleClass('open-hamburger');
	});
});

$('#title-div p').css({
     "text-align":"center",
     "-webkit-margin-before" : "1em",
     "-webkit-margin-after" : "1em",
     "-webkit-margin-start" : "0px",
     "-wedbkit-margin-end ": "0px",
});


// $(document).ready(function(){
// 	setBindings();
// });
//
// function setBindings(){
// 	$(".navButton").click(function(e){
// 		e.preventDefault();
// 		var sectionID = e.currentTarget.id + "-header";
//
// 		$("html body").animate({
// 			scrollTop: $("#" + sectionID).offset().top
// 		}, 2000);
// 		return false;
// 	});
// }

var $root = $('html, body');

var h1 = $("#home-header").position();
var h2 = $("#about-header").position();
var h3 = $("#projects-header").position();
var h4 = $("#contact-div").position();

$('#home').click(function() {
	$root.animate({
	scrollTop: h1.top
	}, 1500);
	return false;
});

$('#about').click(function() {
	$root.animate({
	scrollTop: h2.top
	}, 1500);
	return false;
});

$('#projects').click(function() {
	console.log(this);
	$root.animate({
	scrollTop: h3.top
	}, 1500);
	return false;
});

$('#contact').click(function() {
	console.log(this);
	$root.animate({
	scrollTop: h4.top
	}, 1500);
	return false;
});

$('#social-networks-button').on('click', function(){
	$('#social-networks-div').css({
		"display": "block"
	});
});

$('#close-popup').click(function(){
	$('#social-networks-div').css({
		"display": "none"
	});
});
// $("#about-button").click(function() {
//     $('html, body').animate({
// 	    scrollTop:$("#about-div").offset().top
//     }, 2000);
// });

// $("#home-button").click(function() {
//     $('html, body').animate({
// 	    scrollTop:$("#title-div").offset().top
//     }, 2000);
// });
//
// $("#projects-button").click(function() {
//     $('html, body').animate({
// 	    scrollTop:$("#projects-div").offset().top
//     }, 2000);
// });
//
// $("#contact-button").click(function() {
//     $('html, body').animate({
// 	    scrollTop:$("#contact-title").offset().top
//     }, 2000);
// });
//
$("#school-button").on("click", function(){
	$("div #nsu").toggleClass("hide-object");
	$("div #nsu").toggleClass("object-active");
});

$("#work-button").on("click", function(){
	$("#work-list").toggleClass("hide-object");
	$("#work-list").toggleClass("object-active");
});

$("#school-button").on({
	mouseenter: function(){
		$(this).addClass(".center");
	},
	mouseleave: function(){
		$(this).removeClass(".center");
	}
});

$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
});

$(".sorry").on("click", function(){
	alert("I do apologize, but this link is not quite ready yet! I will have it up and running soon! If you want more information on this project, email me at bryanharris49@gmail.com! Thank you!");
});

$(window).load(function(){
		var pages = $('#slideShowImages li'), current=0;
		var currentPage,nextPage;
		var handler=function(){
			$('#slideShowImages .button').unbind('click');
			currentPage= pages.eq(current);
			if($(this).hasClass('prevButton'))
			{
				if (current <= 0)
					current=pages.length-1;
				else
					current=current-1;
			}
			else
			{

				if (current >= pages.length-1)
					current=0;
				else
					current=current+1;
			}
			nextPage = pages.eq(current);
			currentPage.fadeTo('slow',0.3,function(){
				nextPage.fadeIn('slow',function(){
					nextPage.css("opacity",1);
					currentPage.hide();
					currentPage.css("opacity",1);
					$('#slideShowImages .button').bind('click',handler);
				});
			});
		}

		$('#slideShowImages .button').click(handler);

});

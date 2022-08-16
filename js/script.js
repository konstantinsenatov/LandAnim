$('.points__container').ready(function(){

	$('.points__container').addClass('active');
	$('.point').addClass('active');

});


window.onload = function() {
	var pointMore = document.querySelector(".points__container-more");
	var pointLess = document.querySelector(".points__container-less");
	var pointMobile = document.querySelector(".points__container-mobile");

	var line = $(".line");
	var mainAnim = $(".main-anim");
	var mainBody = $(".main-body");
	
	TweenLite.to(pointMore, 0.5, {
		width: "1200px", delay: 1
	});
	TweenLite.to(pointLess, 0.5, {
		width: "80vw", delay: 1
	});
	TweenLite.to(pointMobile, 0.5, {
		width: "96vw", delay: 1
	});

	TweenLite.to(line, 0.5, {
		top: '-70vh', delay: 4
	});
	
	TweenLite.to(mainAnim, 0.5, {
		opacity: '0', delay: 5
	});
	
	TweenLite.to(mainBody, 0.5, {
		opacity: '1', delay: 5.5
	});

}
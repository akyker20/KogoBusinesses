$(document).ready(function(){
	resetPaddingOfIntroSectionToFitBrowserHeight();
	$( window ).resize(function() {
  		resetPaddingOfIntroSectionToFitBrowserHeight();
	});
});

var resetPaddingOfIntroSectionToFitBrowserHeight = function() {
	var screenHeight = $(window).height();
	var paddingOffset = 378;
	var correctPadding = screenHeight/2 - paddingOffset;
	$("section.intro").css("padding", correctPadding);
};
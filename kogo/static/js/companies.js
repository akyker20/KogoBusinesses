$(document).ready(function(){
	resetPaddingOfIntroSectionToFitBrowserHeight();
	$( window ).resize(function() {
  		resetPaddingOfIntroSectionToFitBrowserHeight();
	});

	var lastHoverDate = new Date();
	var halfASecond = 500;

	$("div.icon").hover(function(){
		var hoverDate = new Date();
		if(hoverDate.getTime() - lastHoverDate.getTime() > halfASecond) {
			var data = $(this).data("id");
			$("div.icon-info:visible").hide();
			var infoContainerToShow = $("div.icon-info[data-id=" + data + "]");
			infoContainerToShow.fadeIn(1000);
			lastHoverDate = hoverDate;
		}
	}, function() {});
});

var resetPaddingOfIntroSectionToFitBrowserHeight = function() {
	var screenHeight = $(window).height();
	var paddingOffset = 378;
	var correctPadding = screenHeight/2 - paddingOffset;
	$("section.intro").css("padding", correctPadding);
};
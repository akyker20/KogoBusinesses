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

var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
    	alert("Hello");
      player = new YT.Player('student-video-player', {
        height: '390',
        width: '640',
        videoId: 'gvJjzYlFcK4',
        events: {
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
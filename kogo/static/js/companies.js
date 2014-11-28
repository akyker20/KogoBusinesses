$(document).ready(function(){
	resetPaddingOfIntroSectionToFitBrowserHeight();
	$( window ).resize(function() {
  		resetPaddingOfIntroSectionToFitBrowserHeight();
	});

	var lastHoverDate = new Date();
	var halfASecond = 500;

  $("ul.scroll-links li a").click(function() {
    var scrollSection = $(this).data("section");
    $('html,body').animate({
        scrollTop: $("section." + scrollSection).offset().top},
        'slow');
  });

	$("div.icon").hover(function(){
		var hoverDate = new Date();
		if(hoverDate.getTime() - lastHoverDate.getTime() > halfASecond) {
			var data = $(this).data("id");
			$("div.icon-info:visible").each(function(index) {
        deselectImage($("div.icon[data-id=" + $(this).data("id") + "] img")[0]);
      });
      $("div.icon-info:visible").hide();

			var infoContainerToShow = $("div.icon-info[data-id=" + data + "]");
      var imgSelected = $(this).find("img");
      selectImage(imgSelected[0]);
			infoContainerToShow.fadeIn(1000);
			lastHoverDate = hoverDate;
		}
	}, function() {});
});

String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

var selectImage = function(img) {
  if(!$(img).hasClass("selected")) {
    var unselectedSrc = $(img).attr('src');
    var insertIndex = unselectedSrc.indexOf(".");
    $(img).attr('src', unselectedSrc.slice(0, insertIndex) + "S.png");
    $(img).addClass("selected");
  }
};

var deselectImage = function(img) {
  if($(img).hasClass("selected")) {
    var selectedSrc = $(img).attr('src');
    var insertIndex = selectedSrc.indexOf(".");
    $(img).attr('src', selectedSrc.slice(0, insertIndex-1) + ".png");
    $(img).removeClass("selected");
  }
}

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
      player1 = new YT.Player('student-video-player', {
        height: '390',
        width: '640',
        videoId: 'gvJjzYlFcK4',
        events: {
          'onStateChange': onPlayerStateChange(this)
        }
      });
      player2 = new YT.Player('service-video-player', {
        height: '390',
        width: '640',
        videoId: 'eh4sbgBwZKA',
        events: {
          'onStateChange': onPlayerStateChange(this)
        }
      });
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event, player) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo(player), 6000);
        done = true;
      }
      else if(event.data == YT.PlayerState.ENDED) {
        stopVideo(player);
      }
    }
    function stopVideo(player) {
      player.seekTo(0, false);
      player.stopVideo();
    }
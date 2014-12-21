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
	}, function(){
    $("div.icon-info:visible").fadeOut();
    deselectImage($("img.selected"));
  });
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
	$("section.intro").css("padding-top", correctPadding + 85);
  $("section.intro").css("padding-bottom", correctPadding - 85);
};



    //Load player api asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var done = false;
    var player;
    function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('intro-video-player', {
        height: '365',
        width: '600',
        videoId: 'sKHdXQGeZPQ',
        events: {
            'onStateChange': onPlayerStateChange
          }
        });

        player1 = new YT.Player('service-video-player', {
          height: '335',
          width: '550',
          videoId: 'eh4sbgBwZKA',
          events: {
            'onStateChange': onPlayerStateChange
          }
        });

        player1 = new YT.Player('student-video-player', {
          height: '335',
          width: '550',
          videoId: 'gvJjzYlFcK4',
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
    }

    function onPlayerStateChange(evt) {
        if(evt.data === YT.PlayerState.ENDED) {
          evt.target.stopVideo();
          evt.target.seekTo(0);
        }
    }
    function stopVideo() {
        player.stopVideo();
    }
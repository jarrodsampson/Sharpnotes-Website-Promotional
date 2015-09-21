/*

    Jarrod Sampson Scripts

*/

var customScripts = {
    scrollAnchors: function () {

        // SCROLL SCRIPTS 
        $('.scroll-me a').bind('click', function (event) { //just pass scroll-me class and start scrolling
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutQuad');
            event.preventDefault();
        });

    },
    subscribe: function () {
        // subscribe

        $("#postcontent").submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "subscribe.php",
                data: $("#postcontent").serialize(),
                 success: function (response) {
                  $('[name="email"]').val('');
                   // alert(response); // FOR ACTUAL RESPONSE
                   alert('Thanks for  subscribing Us');
                }
            });
            e.preventDefault();
        });
        
    },
    toolTips: function () {

        /* ---------------------------------------------- /*
         * Tooltips
        /* ---------------------------------------------- */
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });

    },
    wowScrolls: function () {

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false
        });
        wow.init();

    },
    lazyLoad: function () {

       $("img.lazy").lazyload({
        threshold : 100,
        effect : "fadeIn"
       });
    
    },
    headroom: function () {

        var header = document.querySelector("#header");
		if(window.location.hash) {
		  header.classList.add("slide--up");
		}

		new Headroom(header, {
			tolerance: {
			  down : 10,
			  up : 20
			},
			offset : 560,
			classes: {
			  initial: "slide",
			  pinned: "slide--reset",
			  unpinned: "slide--up"
			},
			// callback when pinned, `this` is headroom object
			onPin : function() {},
			// callback when unpinned, `this` is headroom object
			onUnpin : function() {},
			// callback when above offset, `this` is headroom object
			onTop : function() {},
			// callback when below offset, `this` is headroom object
			onNotTop : function() {}
		}).init();
	  
    },
    scrollTop: function () {

       $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
          } else {
            $('.scroll-up').fadeOut();
          }
       });

       // go to anchor when clicked  
        $(function () {
            $('a[href*=#]:not([id=scrollUp])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
            
    },
    init: function () {
        customScripts.scrollAnchors();
        customScripts.subscribe();
        customScripts.toolTips();
        customScripts.wowScrolls();
        customScripts.lazyLoad();
        customScripts.headroom();
        customScripts.scrollTop();
    }
}
$('document').ready(function () {
    customScripts.init();
});
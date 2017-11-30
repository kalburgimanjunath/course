var tabheight = 199
    , ReduceHeight = 103
    , ReduceHeight1 = 103
    , ConfigHeight = 207;
var RulesHeightl = function () {
    windowHeight = $(window).height() - ReduceHeight;
    $('.ppl-list').css('height', windowHeight);
    windowHeight0 = $(window).height() - tabheight;
    $('.video-tab').css('height', windowHeight0);
    windowHeight2 = $(window).height() - ConfigHeight;
    $('.config-lft').css('height', windowHeight2);
    windowHeight3 = $(window).height() - ConfigHeight;
    $('.config-rtl').css('height', windowHeight3);
    //slimscroll
    $('.video-tab-scroll').slimScroll({
        height: windowHeight0
    });
    $('.nrv').slimScroll({
        height: windowHeight
    });
    $('.scroll-rtl').slimScroll({
        height: windowHeight2
    });
    $('.scroll-lft').slimScroll({
        height: windowHeight3
    });
    $(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("scroll_shadow");
    }
    else {
        $("#header").removeClass("scroll_shadow");
    }
});
}
var j = (function () {
    $('.video').parent().click(function () {
        if ($(this).children("video.video").get(0).paused) {
            $(this).children("video.video").get(0).play();
            $(this).children("div.playpause").fadeOut();
        }
        else {
            $(this).children("video.video").get(0).pause();
            $(this).children("div.playpause").fadeIn();
        }
    });
});
$(window).load(function () {
    RulesHeightl();
    jQuery('.selectbox').selectize();
    j();
});
$(window).resize(function () {
    RulesHeightl();
    jQuery('.selectbox').selectize();
    j();
});
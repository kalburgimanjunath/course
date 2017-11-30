var tabheight = 229,
    calandarHeight3 = 287,
    zeroheight = 0,
    ReduceHeight = 117,
    ReduceHeight0 = 177,
    ReduceHeight2 = 0,
    ReduceHeight1 = 53,
    calandarHeight = 198,
    calandarHeight1 = 242,
    ConfigHeight = 230,
    // variable define for report listing page
    ReportHeight = 210,
    RulesHeight = 361,
    RulesHeightleft = 186,
    CreateReport = 242,
    ReportHeightchart = 160,
    Viewer = 180,
    ViewerLeft = 112,
    viewer_pop = 0,
    downloadstu = 316,
    importcard = 120,
    RulesHeightl = function () {
        windowHeight8 = $(window).height() - zeroheight;
        $('.dahua-sidebar').css('height', windowHeight8);

        windowHeight11 = $(window).height() - importcard;
        //        $('.imp-height').css('height', windowHeight11);

        windowHeight9 = $(window).height();
        $('.calendar-sidebar').css('height', windowHeight9);

        windowHeight = $(window).height() - ReduceHeight;
        $('.ppl-list').css('height', windowHeight);

        windowHeight9 = $(window).height() - ReduceHeight0;
        //$('.nrvheight').css('height', windowHeight9);

        windowHeight0 = $(window).height() - tabheight;
        $('.video-tab').css('height', windowHeight0);

        windowHeight1 = $(window).height() - ReduceHeight1;
        $('.nrv-left-menu').css('height', windowHeight1);

        windowHeight2 = $(window).height() - ConfigHeight;
        $('.config-lft').css('height', windowHeight2);

        windowHeight3 = $(window).height() - ConfigHeight;
        $('.config-rtl').css('height', windowHeight3);

        windowHeight4 = $(window).height() - calandarHeight1;
        $('.calandar-col-1').css('height', windowHeight4);

        windowHeight5 = $(window).height() - calandarHeight;
        $('.calandar-col-2').css('height', windowHeight5);

        windowHeight10 = $(window).height() - downloadstu;
        $('.calandar-col-2').css('height', windowHeight10);

        windowHeight6 = $(window).height() - calandarHeight;
        $('.calandar-col-3').css('height', windowHeight4);
        ViewerHeight = $(window).height() - Viewer;
        $('.main-viewer').css('height', ViewerHeight);

        ViewerHeightleft = $(window).height() - ViewerLeft;
        $('.main-viewer-left').css('height', ViewerHeightleft);

        /*ViewerPopup = $(window).height() - viewer_pop;
        $('.viewer-popup').css('height', ViewerPopup);*/

        windowHeightReport = $(window).height() - ReportHeight;
        $('.main-rpt').css('height', windowHeightReport);

        windowHeightReport2 = $(window).height() - CreateReport;
        $('.report-inside-wrap').css('height', windowHeightReport2);

        windowHeightReport3 = $(window).height() - ReportHeightchart;
        $('.main-rpt-chart').css('height', windowHeightReport);
        //slimscroll
        $('.video-tab-scroll').slimScroll({
            height: windowHeight0,
            borderRadius: '0px',
            distance: '3px',
        });

        $('.scroll-y,.scroll-x').slimScroll({
            color: '#6f7074',
            size: '5px',
            height: windowHeight10,
            distance: '3px',
            borderRadius: '0px',
        });

        $('.nrv').slimScroll({
            height: windowHeight9,
            borderRadius: '0px',
            distance: '3px',
        });
        $('.wrapper-details').slimScroll({
            height: windowHeight11,
            borderRadius: '0px',
            distance: '3px',
        });
        $('.scroll-rtl').slimScroll({
            height: windowHeight2,
            borderRadius: '0px',
            distance: '3px',
        });
        $('.scroll-lft').slimScroll({
            height: windowHeight3,
            borderRadius: '0px',
            distance: '3px',
        });
    }

function reportscroll() {
    //slimscroll
    $('.scroll-report').slimScroll({
        height: windowHeightReport,
        distance: '3px',
        size: '6px',
        borderRadius: '0px',
    });
    $('.scroll-create-report').slimScroll({
        height: windowHeightReport2,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'

    });
    $('.scroll-report-chart').slimScroll({
        height: windowHeightReport3,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
}

function Rulesscroll() {
    windowHeightReport = $(window).height() - RulesHeight;
    $('.main-rules').css('height', windowHeightReport);
    windowHeightReportleft = $(window).height() - RulesHeightleft;
    $('.main-rule-left').css('height', windowHeightReport);
    //slimscroll
    $('.scroll-rules').slimScroll({
        height: windowHeightReport,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
    $('.scroll-lft').slimScroll({
        height: windowHeight3,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
    $('.scroll-calandar-col-1').slimScroll({
        height: windowHeight4,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
    $('.scroll-calandar-col-2').slimScroll({
        distance: '3px',
        size: '6px',
        height: windowHeight5,
        borderRadius: '0px'
    });
    $('.scroll-calandar-col-3').slimScroll({
        height: windowHeight6,
        size: '6px',
        borderRadius: '0px',
        distance: '3px',
    });

    $('.scroll-rules-left').slimScroll({
        height: windowHeightReportleft,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });

}

function Viewerscroll() {

    //slimscroll
    $('.scroll-viewer').slimScroll({
        height: ViewerHeight,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
    $('.leftscroll-viewer').slimScroll({
        height: ViewerHeightleft,
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
    $('.popup-scroll').slimScroll({
        height: '238px',
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
    $('.record-list-scroll').slimscroll({
        height: '540px',
        distance: '3px',
        size: '6px',
        borderRadius: '0px'
    });
}

function j() {
    $('.video').parent().click(function () {
        if ($(this).children("video.video").get(0).paused) {
            $(this).children("video.video").get(0).play();
            $(this).children("div.playpause").fadeOut();
        } else {
            $(this).children("video.video").get(0).pause();
            $(this).children("div.playpause").fadeIn();
            $(this).children("div.pause").fadeIn();
        }
    });
}

$(window).load(function () {
    RulesHeightl();
    reportscroll();
    Rulesscroll();
    Viewerscroll();
    j();
    $('#accordion1 input[type="checkbox"]').click(function (e) {
        e.stopPropagation();
    });
    var hasClass = 'collapse';
    // hasClass is boolean
    if (hasClass === 'collapse') {
        $('#accordion1 li > a').click(function (e) {
            $(this).parent().toggleClass('collaspe-icons');
        });
    }
    // Added js for action in create rules page when
    $('#txbruleswhen').change(function () {

        if ($(this).val() == 'Device') {
            if ($('.rules-device').hasClass('onemore-device')) {
                $(".rules-action-wrapper .icon-cross:first-child").clone().insertBefore('.ps-rules-when-section .selectize-form-group');
                $('.rules-action-wrapper').children(".rules-device").clone().insertBefore(".ps-rules-when-section .selectize-form-group").addClass('onemore-device');
                $('.rules-action-wrapper').children('.clone-conditions').clone().show().insertBefore('.ps-rules-when-section .selectize-form-group').addClass('onemore-conditon');
                $('.switch_enable').click(function () {
                    $(this).addClass('selected');
                    $(this).next().removeClass('selected');
                });

                $('.switch_disable').click(function () {
                    $(this).addClass('selected');
                    $(this).prev().removeClass('selected');
                });
            }
            $(".rules-action-wrapper").show();
            $(".ps-rules-divider-wrapper").show();
            $(".ps-rules-condition-buttons").show();
            $(".rules-device").show();
            $(".rules-action-wrapper .icon-cross:first-child").show();
            $('.rules-device').addClass('onemore-device');
        } else if ($(this).val() == 'Schdules') {
            if ($('.schedules-wrapper').hasClass('onemore-schedule')) {
                $('.rules-action-wrapper').children('.schedules-wrapper').clone().insertBefore('.ps-rules-when-section .selectize-form-group');
            }
            $(".rules-action-wrapper").show();
            $(".ps-rules-divider-wrapper").show();
            $(".schedules-wrapper").show();
            $('.schedules-wrapper').addClass('onemore-schedule');
            $('.rules-action-wrapper').children('.clone-conditions').clone().show().insertBefore('.ps-rules-when-section .selectize-form-group').addClass('onemore-conditon');
            $('.switch_enable').click(function () {
                $(this).addClass('selected');
                $(this).next().removeClass('selected');
            });

            $('.switch_disable').click(function () {
                $(this).addClass('selected');
                $(this).prev().removeClass('selected');
            });
        } else {
            return false;
        }
        $(this).parent().hide();
    });
    $('.ps-rules-when-section .ps-rules-icon-wrapper .icon-add').click(function () {
        $('#txbruleswhen').parent().show();
        $(this).parent().parent().hide();
    });

    // Added js for action in create rules page then
    $('#txbrulesthen').change(function () {
        if ($(this).val() == 'Device') {
            if ($('.thenaction').hasClass('onemore-devicethen')) {
                $(".then-rules-wrapper .icon-cross").first().clone().appendTo('.then-rules-wrapper').insertBefore('.then-rules-wrapper .ps-rules-divider-wrapper');
                $('.then-rules-wrapper').children(".thenaction").first().clone().appendTo(".then-rules-wrapper").insertBefore('.then-rules-wrapper .ps-rules-divider-wrapper');
            }
            $(".then-rules-wrapper").show();
            $(".then-rules-wrapper .ps-rules-divider-wrapper").show();
            $('.thenaction').addClass('onemore-devicethen');
        } else {
            return false;
        }
        $(this).parent().hide();
    });

    $('.ps-rules-then-section .ps-rules-icon-wrapper .icon-add').click(function () {
        $('#txbrulesthen').parent().show();
        $(this).parent().parent().hide();
    });
	
	// the dropdown onclick (maps campus screen)
     $('.map_list_view').on('click', function(event){
       event.stopPropagation();
     });
	 
	 /* calender class toggle */
	 $('.btn-calndr-warning').click(function(){
			$(this).toggleClass('active');
			
		});
		
		$('.btn-calndr-video').click(function(){
			$(this).toggleClass('active');
		});
        
    // add site for rules
    $('#position_textbox').addClass('arrow-top');
    $('#position_textbox, .icon_list1').click(function () {
        $(this).prev().toggleClass('arrow-down');
        $(this).toggleClass('arrow-down');
        $(this).parent().parent().next('.popup-site').toggle();
        $('.ps-rules-second-top-right .control-label legand').click(function () {
            var text = $(this).html();
            $('#position_textbox').val(text);
        });
    });
    $('.icon-drop').click(function () {
        $(this).toggleClass('icon-unsort');
    });
    $('#txt_device, .icon-popup').click(function () {
        $(this).parent().children('.popup-site').css("width", "100%").toggle();
        $('.ps-rules-first-input-wrapper .popup-site input:checkbox').change(function () {
            if ($(this).is(":checked")) {
                var text = $(this).next().next().html();
                $(this).parent().parent().parent().parent().parent().parent().prev().prev().attr('placeholder', text);
            } else {
                $(this).parent().parent().parent().parent().parent().parent().prev().prev().attr('placeholder', 'Main Area + 4');
            }
        });
    });

    $('.popup-site .parent-checkbox').change(function () {
        var checkboxes = $(this).parent().parent().parent().parent().find("input[type=checkbox]");
        checkboxes.prop("checked", checkboxes.prop("checked"));
        if ($(this).parent().parent().parent().parent().next().find("input[type=checkbox]").is(":checked")) {
            var checkboxess = $(this).parent().parent().parent().parent().next().find("input[type=checkbox]");
            checkboxess.attr('checked', false);
        }
        if ($(this).parent().parent().parent().parent().prev().find("input[type=checkbox]").is(":checked")) {
            var checkboxesss = $(this).parent().parent().parent().parent().prev().find("input[type=checkbox]");
            checkboxesss.attr('checked', false);
        }
        if ($(this).parent().parent().parent().parent().prev().prev().find("input[type=checkbox]").is(":checked")) {
            var checkboxesss = $(this).parent().parent().parent().parent().prev().prev().find("input[type=checkbox]");
            checkboxesss.attr('checked', false);
        }
        if ($(this).parent().parent().parent().parent().next().next().find("input[type=checkbox]").is(":checked")) {
            var checkboxesss = $(this).parent().parent().parent().parent().next().next().find("input[type=checkbox]");
            checkboxesss.attr('checked', false);
        }
    });


});
$(window).resize(function () {
    RulesHeightl();
    reportscroll();
    Rulesscroll();
    Viewerscroll();
    j();
    $('#accordion1 input[type="checkbox"]').click(function (e) {
        e.stopPropagation();
    });
    $('.switch_enable').click(function () {
        $(this).addClass('selected');
        $(this).next().removeClass('selected');
    });
    $('.switch_disable').click(function () {
        $(this).addClass('selected');
        $(this).prev().removeClass('selected');
    });
});
$('#txt_device').addClass('arrow-top');
$('#txt_device, .icon_list1').click(function () {
    $(this).prev().toggleClass('arrow-down');
    $(this).toggleClass('arrow-down');
    $(this).parent().parent().next('.popup-site').toggle();
});

$(document).ready(function () {
    $('.collapse input[type=checkbox]').click(function () {
        if ($(this).parent().parent().parent().parent().find("input[type=checkbox]").is(":checked")) {
            var check = $(this).parent().parent().parent().parent().parent().children('a').find("input[type=checkbox]");
            check.attr('checked', true);
        } else {
            var check = $(this).parent().parent().parent().parent().parent().children('a').find("input[type=checkbox]");
            check.attr('checked', false);
        }
    });
    $('.switch_enable').click(function () {
        $(this).addClass('selected');
        $(this).next().removeClass('selected');
    });

    $('.switch_disable').click(function () {
        $(this).addClass('selected');
        $(this).prev().removeClass('selected');
    });
    $(".icon-edit").click(function () {
        if ($(".form-control ,.rules-main-content input").attr("disabled")) {
            $(".form-control,.rules-main-content  input , .rules-main-contentbutton").removeAttr("disabled");
            $(".icon").removeClass("ps-disabled");
            $('.ps-rules-condition-buttons').removeClass('ps-disabled-rules-condition-buttons');
            $('.ps-rules-switch-options').removeClass('ps-disabled-switcher');
            $('.rules-main-content .form-control').addClass('readonly');
            $('.rules-main-content .form-control').attr('readonly', true);

        } else {
            $(".form-control ,.rules-main-content input ,.rules-main-content button").attr("disabled", "disabled");
            $(".icon").addClass("ps-disabled");
            $('.ps-rules-condition-buttons').addClass('ps-disabled-rules-condition-buttons');
            $('.ps-rules-switch-options').addClass('ps-disabled-switcher');
            $('.rules-main-content .form-control').removeClass('readonly');
            $('.rules-main-content .form-control').removeAttr('readonly');
        }
    });
        document.querySelector('').onscroll = function () {
            this.classList[this.scrollTop < 1 ? 'remove' : 'add']('shadow-top');

        };


        var method = document.querySelector('.shadow-scroll');


        var jar = method.onscroll = function () {
            this.classList[this.scrollTop < 1 ? 'remove' : 'add']('shadow-top');
        }

        document.querySelector('.modal-body .conflict-shadow .shadow-scroll').onscroll = function () {
            this.classList[this.scrollTop < 1 ? 'remove' : 'add']('shadow-top');

        };
        document.querySelector('.modal-body .conflict1-shadow .shadow-scroll').onscroll = function () {
            this.classList[this.scrollTop < 1 ? 'remove' : 'add']('shadow-top');

        };
        document.querySelector('.modal-body .associate-shadow .shadow-scroll').onscroll = function () {
            this.classList[this.scrollTop < 1 ? 'remove' : 'add']('shadow-top');

        };
        document.querySelector('.shadow .shadow-scroll').onscroll = function () {
            this.classList[this.scrollTop < 1 ? 'remove' : 'add']('shadow-top');

        };
    $(".slimScrollDiv").child(jar);
});


//end
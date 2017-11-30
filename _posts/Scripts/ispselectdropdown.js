

    $(window).load(function () {
    
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
    
        
    $('.ispselectdropdown .hideinviewmode, .icon-popup').click(function () {
        $(this).parent().children('.isppopup-site').css("width", "100%").toggle();
        $('.ps-rules-first-input-wrapper .isppopup-site input:checkbox').change(function () {
            if ($(this).is(":checked")) {
                var text = $(this).next().next().html();
                $(this).parent().parent().parent().parent().parent().parent().prev().prev().attr('placeholder', text);
            } else {
                $(this).parent().parent().parent().parent().parent().parent().prev().prev().attr('placeholder', 'Main Area + 4');
            }
        });
    });

    $('.isppopup-site .parent-checkbox').change(function () {
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

    
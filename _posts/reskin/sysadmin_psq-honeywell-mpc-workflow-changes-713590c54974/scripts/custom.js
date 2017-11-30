/* report sidebar toggle */
jQuery('.sidebar-slide').click(function () {
    setTimeout(function () {
        jQuery('.sidebar-left').toggle('slide');
        jQuery('.ps-main-container').toggleClass('ps-full-container');
    }, 500);
});

/*jQuery('.selectbox').selectize({});*/

jQuery('.ps-rules-condition-buttons .switch_enable').click(function () {
    jQuery(this).addClass('selected');
    jQuery(this).next().removeClass('selected');
});

jQuery('.ps-rules-condition-buttons .switch_disable').click(function () {
    jQuery(this).addClass('selected');
    jQuery(this).prev().removeClass('selected');
});

/* js for date datetimepicker */
jQuery('.form-date').datetimepicker({
    language: 'en',
    pick12HourFormat: true
});

/* js for multiselect */
jQuery('.multiselect').multiselect({
    includeSelectAllOption: true,
    enableFiltering: true,
    size: true
});

/* js for single select */
jQuery('.singleselect').multiselect({
    includeSelectAllOption: false,
    enableFiltering: true,
    size: true
});

jQuery(".multiselect-container").addClass('scroll-x');

/* js for report selctbox list item show */
jQuery('.select-item').click(function () {
    jQuery(this).siblings('.selectColumnContainer').toggle();
});

/*js for report button export option show */
jQuery('#Report_Export').click(function () {
    jQuery('.report-export-data').toggle();
});

/****** js for video container ********/
jQuery(document).ready(function () {
    jQuery('#viewer .video-container').click(function () {
        jQuery('#viewer .video-container').removeClass('active');
        jQuery(this).addClass('active');
    });
});

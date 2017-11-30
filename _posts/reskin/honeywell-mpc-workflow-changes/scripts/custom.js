jQuery('.selectbox').selectize({

});

jQuery('.scroll-y,.scroll-x').slimScroll({
   color: '#6f7074',
   size: '5px',
   height: '100%',
   distance: '5px',
   alwaysVisible: false
});
jQuery('.datepicker').datetimepicker({
	  todayHighlight: true,
	  autoclose: true
});
jQuery(".datepicker").on("blur", function(e) { jQuery(this).datetimepicker("hide"); });
jQuery(this).siblings('.datepicker').datetimepicker('show');
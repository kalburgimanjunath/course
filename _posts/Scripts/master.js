$(document).ready(function(){
        // $('[data-toggle="tooltip"]').tooltip('show');
        // $('.SlectBox').SumoSelect();
        $(".ispicon_collapse").click(function(){
            $(".accordion-root").toggleClass("togglemenu");
            $(".people-root").toggleClass("alignmenu-left");
            $(".ControllerOverview").toggleClass("alignmenu-left");
        });
        $(".ispicon_edit").click(function(){
            $(".contentContainer").removeClass("viewmode");
            $(".btn-footer").removeClass("viewmode");
        });

        // Closes the sidebar menu
        $("#menu-close").click(function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

        // Opens the sidebar menu
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

        $(".ispicon_edit").click(function(){
                $(".tab-content").removeClass("viewmode");
                $('.btn-footer').show();
        });

        // $('[data-toggle="tooltip"]').tooltip('show');
        // $('.SlectBox').SumoSelect();


        $(".btn-calndr-video").click(function (e) {
            e.preventDefault();
            $("#details").addClass("hide");
            $("#video").addClass("show");
            $(".btn-calndr-video").addClass('active');
            $(".btn-calndr-warning").removeClass('active');
        });
        $(".btn-calndr-warning").click(function (e) {
            e.preventDefault();
            $("#video").addClass("hide");
            $("#details").removelass("show");
            $(".btn-calndr-warning").addClass('active');
            $(".btn-calndr-video").removeClass('active');
        });

         $(".ispicon_firstItem").click(function (e) {
            e.preventDefault();
            $("#viewerContainer").removeClass("hide");
            $(".firsttimeLandingpage").addClass("hide");
            $(".ps-viewer-left-sidebar").removeClass("hide");
            $(".video-container-wrapper").removeClass("hide");

            
            
        });

        

        // ps scripts start

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
        $('#accordion12 input[type="checkbox"]').click(function (e) {
            e.stopPropagation();
        });
        var hasClass = 'collapse';
        // hasClass is boolean
        if (hasClass === 'collapse') {
            $('#accordion12 li > a').click(function (e) {
                $(this).parent().toggleClass('collaspe-icons');
            });
        }
        $('#carousel-six-viewer').carousel()
        // ends

        

        $(".icon-view-4").click(function (e) {
            $(".video-container-wrapper").removeClass('six-screen');
            $(".video-container-wrapper").addClass('four-screen');
            $(".video-container-wrapper").removeClass('eight-screen');
        });

        $(".icon-view-6").click(function (e) {
            $(".video-container-wrapper").removeClass('four-screen');
            $(".video-container-wrapper").addClass('six-screen');
            $(".video-container-wrapper").removeClass('eight-screen');
        });

        $(".icon-view-8").click(function (e) {
            $(".video-container-wrapper").removeClass('six-screen');
            $(".video-container-wrapper").addClass('eight-screen');
            $(".video-container-wrapper").removeClass('four-screen');
        });

        $("#selectsite").click(function (e) {
           $("#selectcustomer").toggleClass('hide');
           $("#camera").addClass('show');
        });

        $("#clipview").click(function (e) {
           $("#selectcustomer").addClass('hide');
           $("#camera").addClass('hide');
           $("#clipsearch").addClass('show');

        });

         $("#applyresult").click(function (e) {
           $("#clipsearch").addClass('hide').removeClass('show');
           $("#clipresult").addClass('show').removeClass('hide');
        });

        $("#applyresult").click(function (e) {
           $("#clipsearch").addClass('hide').removeClass('show');
           $("#clipresult").addClass('show').removeClass('hide');

        });

        $(".ispicon_collapse").click(function (e) {
           $(".ps-viewer-left-sidebar").addClass('hide');
           $("#viewerContainer").css('width','calc(100% - 30px)');
        });

        //$('#accessGroup1').SumoSelect({search: true, searchText: 'Enter here.'});  
        //$('#credentialStatus1').SumoSelect();
        //$('#cardtype').SumoSelect();

        $(".ispicon_edit").click(function(){
                $(".listOverview").removeClass("viewmode");
                $('.btn-footer').show();
        });

        $(".ispicon_delete,#installer").click(function(){
                $("#alertify").removeClass("hide");
        });

        $("#continuebtn").click(function (e) {
           $(".footer-viewer-buttons-leftsidebar").addClass('hide');
           $("#selectcustomer").addClass('hide');
           $("#camera").removeClass("hide");
           $("#filterbut").addClass("show");
        });

        $("#btnfilter").click(function (e) {
           $(".footer-viewer-buttons-leftsidebar").addClass('hide');
           $("#camera").addClass('hide');
           $("#clipsearch").removeClass("hide");
        });


});

function onMenuItemSelect(itemName) {
            $('#menu-close').click(); require('presenter').transitionTo($('#ispviews'));
            switch (itemName) {
                case "SiteOverview":
                    blockUI();
                    ajaxRequest('POST', $('#siteurl').val() + 'AccountMgmt/GetAccountInfo').done(function (result) {
                        unblockUI();
                        Honeywell.ISP.Navigation.navigate(['26', '27'], 'hamburgermenuselected', { action: itemName, id: result.data.Id });
                    });
                    break;
                case "AddSite":
                    Honeywell.ISP.Navigation.navigate(['26', '27'], 'hamburgermenuselected', { action: itemName });
                    break;
            }
        }


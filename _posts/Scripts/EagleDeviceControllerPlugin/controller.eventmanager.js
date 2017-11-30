/// <reference path="controller.common.js" />
/// <reference path="controller.datacontext.js" />
/// <reference path="controller.uicontext.js" />

window.EagleDeviceControllerPlugin.controllerEventreceiver = (function (ko, uicontext, common) {
    debugger;
    try {      
      
        $.subscribe(Honeywell.ISP.AccountMgmt.events.show_addarea_View, onAddAreaClicked);
        $.subscribe(Honeywell.ISP.AccountMgmt.events.show_addcontroller_view, onAddController);
    } catch (e) {
        console.error(e.message, e);
    }

    function onAddController(event, data) {
        uicontext.EagleConfigoptionsselected(data);
    }

    function onAddAreaClicked(event, data) {
        debugger;
        if ($.isArray(data)) {
            uicontext.pageData = data;
        }
        uicontext.AddAreaClicked(data);
       
       // uicontext.pageData = data;
    }

})(ko, window.EagleDeviceControllerPlugin.uicontext, window.EagleDeviceControllerPlugin.common);
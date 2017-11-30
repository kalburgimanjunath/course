/// <reference path="controller.common.js" />
/// <reference path="controller.model.js" />
/// <reference path="controller.datacontext.js" />
/// <reference path="controller.validationcontext.js" />

window.EagleDeviceControllerPlugin.uicontext = (function ($, datacontext, common, validationContext) {
    debugger;
    var currentAccounData = null, currentDialog = null,
    modalOptions = { show: true, keyboard: false, backdrop: "static" }, current_Tabindex = 0, pageData;//,deleteOtherAcc = false;

    controllerModalDialogs = {
        devicemodal: "#paneloperatorModal",
        areamodal: "#addPartitionModal",
        arealandingmodal: "#arealandingmodal",
        areasettingsmodal: "#areasettingmodal"
    },
    configuicontext = {
        EagleConfigoptionsselected: EagleConfigoptionsselected,
        closecurrentDialog: closecurrentDialog,
        AddAreaClicked: AddAreaClicked,
        AddAreaSettings: AddAreaSettings,
        redirectLandingPage: redirectLandingPage,
        Addcontrollerclicked: Addcontrollerclicked
    };

    function AddAreaSettings()
    {
        debugger;
        //Get the page 
        window.EagleDeviceControllerPlugin.datacontext.GetAreaSettingsPage(currentAccounData);
        //Get partition data and bind to page/form.
       // window.EagleDeviceControllerPlugin.PanelModel.GetPartition(data);
        //$("#customer-overview").removeClass("show").addClass("hide"); 
        //$("#site-overview").removeClass("show").addClass("hide"); 
        //$("#arealandingmodal").removeClass("show").addClass("hide"); 
        //if ($("#areasettingmodal").length == 0) {
        //    $('.account-root').append(page);
        //}
    }


    function Addcontrollerclicked() {
        window.EagleDeviceControllerPlugin.PanelModel.AddPanel();
    }

    function redirectLandingPage()
    {
        $("#customer-overview").removeClass("show").addClass("hide");
        $("#site-overview").removeClass("show").addClass("hide");
        $("#areasettingmodal").removeClass("show").addClass("hide");
        if ($("#arealandingmodal").length == 0) {
            $('.account-root').append(page);
        }
        else {
            $("#arealandingmodal").removeClass("hide").addClass("show");
        }
    }
   
    function AddAreaClicked(data)
    { 
        try 
        {
            debugger;
            if (data == null)
                data = pageData;

            //currentAccounData = data;
            window.EagleDeviceControllerPlugin.datacontext.getLandingPage(data);

            //$("#customer-overview").removeClass("show").addClass("hide"); 
            //$("#site-overview").removeClass("show").addClass("hide");
            //$("#areasettingmodal").removeClass("show").addClass("hide");
            //if ($("#arealandingmodal").length == 0) {
            //    $('.account-root').append(page);
            //}
            //else
            //{
            //    $("#arealandingmodal").removeClass("hide").addClass("show");
            //}
            //var arealandingform = $(controllerModalDialogs.arealandingmodal);
            //ko.cleanNode(arealandingform[0]);
            //window.EagleDeviceControllerPlugin.PanelModel.GetDeviceIDs(data);
            //$arealandingform.modal(modalOptions);
        } 
        catch(e) { 
            console.error("Error occured in config option selection", e); 
        } 
    } 

    function EagleConfigoptionsselected(data) {
        try {

            currentDialog = $(controllerModalDialogs.devicemodal);
            //currentAccounData = account_id;
            //ko.applyBindings(window.EagleDeviceControllerPlugin.datacontext.GetViewModel(currentAccounData), currentDialog[0]);
            ko.applyBindings(new window.EagleDeviceControllerPlugin.PanelModel.AddPanelViewModel(data), currentDialog[0]);
            $(".error").removeClass("error invalidError").tooltip("destroy");
            currentDialog.modal(modalOptions);

        } catch (e) {
            console.error("Error occured in config option selection", e);
        }
    }
    
    function closecurrentDialog() {      
        $("#addArea").css("display", "none");
        if (currentDialog) {
            currentDialog.modal("hide");
        }
    }
    return configuicontext;
})($, window.EagleDeviceControllerPlugin.datacontext, window.EagleDeviceControllerPlugin.common, window.EagleDeviceControllerPlugin.validationcontext);


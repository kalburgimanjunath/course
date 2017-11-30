

window.EagleDeviceControllerPlugin.datacontext = (function ($, ko) {
    var modalOptions = { show: true, keyboard: false, backdrop: "static" }, current_Tabindex = 0;
    debugger;
    var datacontext = {
        savePanelInfo: savePanelInfo,
        getPartitionInfo: getPartitionInfo,
        savePartitionInfo: savePartitionInfo,
        getDeviceIDsInfo: getDeviceIDsInfo,
        GetAreaSettingsPage: GetAreaSettingsPage,
        getLandingPage: getLandingPage,
        getdeviceInfo: getdeviceInfo,
        getInfomsg: getInfomsg
    };
    return datacontext;

    function AddPanelurl() {
        return url = $(".panelContainer").attr("data-url");
    }

    function Getinfo() {
        return url = $('input[name=infoURL]').val();
    }

    function SavePartitionurl() {
        return url = $("#areasettingmodal").attr("data-url");
        
       // return url = "/EagleDevice/SavePartition";
    }
    function GetPartitionurl() {
        return url = $("#hidPartitionUrl").val();
        //return url = "/EagleDevice/GetPartition";
    }

    function GetAreaSettingsurl() {
        return url = $("#AreaSettingsUrl").val();
    }

    function GetControllerurl() {
        debugger;
        return url = $('input[name=ControllerDetailsURL]').val();
    }

    function GetDeviceDetails() {
        return url = $('input[name=getdeviceurl]').val();
    }

    function getLandingPage(data) {
        debugger;
        return new ajaxRequest("post", data[1], null, "html").done(function (page) {
            $("#customer-overview").removeClass("show").addClass("hide"); 
            $("#site-overview").removeClass("show").addClass("hide");
            $("#areasettingmodal").removeClass("show").addClass("hide");
            if ($("#arealandingmodal").length == 0) {
                $('.account-root').append(page);
            }
            $("#arealandingmodal").removeClass("hide").addClass("show");

            window.EagleDeviceControllerPlugin.PanelModel.GetDeviceIDs(data);
        });
    }
    
    //Save Panel Info
    function savePanelInfo(self, successcallback, errorcallback) {
        return new ajaxRequest("post", AddPanelurl(), self).done(function (jsonResult) {
            if (jsonResult.Success) {
                if (successcallback != undefined && successcallback != null)
                    successcallback(jsonResult.data);

            } else {
                if (errorcallback != undefined)
                    errorcallback(jsonResult.errorMessage);
                console.log(jsonResult.errorMessage);
            }
        }).fail(function () {
            alertify.error(Resources.General_error);
        });
    }

    //Save Partition Info
    function savePartitionInfo(self, MacId,siteID ,successcallback, errorcallback) {
        debugger;
       data = ko.toJSON(self);     
       
       return new ajaxRequest("POST", SavePartitionurl(), ({ jsonString: data, MacId: MacId, SiteAccountId: siteID })).done(function (jsonResult) {
            if (jsonResult.Success) {
                if (successcallback != null && successcallback != undefined) {
                    successcallback(jsonResult);
                }
            } else {
                if (errorcallback != null && errorcallback != undefined) {
                    errorcallback(jsonResult.successMessage);
                }
            }
        }).fail(function () {
            alertify.error(Resources.General_error);
        });
    }

    //Get Partition Info
    function getPartitionInfo(MacId, successcallback, errorcallback) {
        debugger;
        return new ajaxRequest("POST", GetPartitionurl(), ({ MacId: MacId })).done(function (jsonResult) {
            if (jsonResult.StatusCode == 200) {
                if (successcallback != null && successcallback != undefined) {
                    successcallback(jsonResult.DeviceConfiguration);
                }
            } else {
                if (errorcallback != null && errorcallback != undefined) {
                    errorcallback(jsonResult.successMessage);
                }
            }
        }).fail(function (error) {
            alertify.error(Resources.General_error);
        });
    }

    function getdeviceInfo() {
        debugger;
        return new ajaxRequest("post", GetControllerurl(), self, "html").done(function (page) {
            $("#customer-overview").removeClass("show").addClass("hide");
            $("#site-overview").removeClass("show").addClass("hide");
            if ($("#myPartialContainer").length == 0) {
                window.EagleDeviceControllerPlugin.PanelModel.GetContollerIDs();
                $('.account-root').append(page);
            }
        });
    }

    function getInfomsg() {
        debugger;
        return new ajaxRequest("post", Getinfo(), self, "html").done(function (page) {
            if ($("#successControllerModal").length == 0) {
                $('.account-root').append(page);
                currentDialog = $("#successControllerModal");
                if (currentDialog != null) {
                    currentDialog.modal(modalOptions);
                }
            }
        });
    }

    //Get Partition Info
    function GetAreaSettingsPage(MacId, successcallback, errorcallback) {
        debugger;
        return new ajaxRequest("POST", GetAreaSettingsurl(), null, "html").done(function (page) {
            $("#customer-overview").removeClass("show").addClass("hide");
            $("#site-overview").removeClass("show").addClass("hide");
            $("#arealandingmodal").removeClass("show").addClass("hide");
            if ($("#areasettingmodal").length == 0) {
                $('.account-root').append(page);
            }
            
             $("#areasettingmodal").removeClass("hide").addClass("show");
           
            $(".error").removeClass("error invalidError").tooltip("destroy");
            window.EagleDeviceControllerPlugin.PanelModel.GetPartition(MacId);

        }).fail(function (error) {
            alertify.error(Resources.General_error);
        });
    }

    //Get Device Info
    function getDeviceIDsInfo(data, successcallback, errorcallback) {
        debugger;
        return new ajaxRequest("POST", data[2], ({ siteID: data[0] })).done(function (jsonResult) {
            if (jsonResult.StatusCode == 200) {
                if (successcallback != null && successcallback != undefined) {
                    successcallback(jsonResult.EagleDeviceData);
                }
            } else {
                if (errorcallback != null && errorcallback != undefined) {
                    errorcallback(jsonResult.successMessage);
                }
            }
        }).fail(function (error) {
            alertify.error(Resources.General_error);
        });
    }



})(jQuery, ko);

window.EagleDeviceControllerPlugin.common = (function ($) {
    var events = {
        addEagleDevice: "addEagleDevice",
        treeviewCurrentItem: "treeviewCurrentItem",
        confignewaccountadded: "confignewaccountadded",
        addArea: "addArea",
        show_addarea_View: "show_addarea_View"
    };
    var constants = {
        accounttypes: { GENERAL: "general", CUSTOMER: "customer", SITE: "site", GROUP: "group", TIME: "time", DEVICE: "device", CAMERA: "camera", PANEL: "panel", CREDENTIAL: "credential", RECORDER: "recorder", SCHEDULE: "schedules", CREDENTIALHOLDER: "credentialholders", LOGICALTYPE: "logcaltype", DEALER: "dealer" }
    };
    var messages = {
        paneladd_success: 'Resources.Operator_created_successfully', // TODO : Resources.Operator_created_successfully,
        paneladd_failed: 'Resources.Failed_save_operator', // TODO : Resources.Failed_save_operator         
        CreateCustomerWithoutAccount: 'CreateCustomerWithoutAccount'
    };
    var commonData = {
        supportedRoles: []
    };

    var baseUrl = $(".panelContainer").attr("data-url");
    geturlforaction = function (actionPath) {
        return baseUrl + "/" + actionPath;
    };
    return {
        geturlforaction: geturlforaction,
        events: events,
        messages: messages,
        commonData: commonData,
        constants: constants
    };
})(jQuery);
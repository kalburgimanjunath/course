/// <reference path="controller.common.js" />
/// <reference path="controller.datacontext.js" />
/// <reference path="controller.validationcontext.js" />
/// <reference path="controller.uicontext.js" />

window.EagleDeviceControllerPlugin = {
    applybinding: {},
    PanelModel: {}
}

window.EagleDeviceControllerPlugin.PanelModel = (function ($, ko, datacontext, validationcontext) {
    debugger;
    var DeviceIDnew;
    var panelModel = {
        AddPanel: AddPanel,
        AddPanelViewModel: AddPanelViewModel,

        //Add and Get Partition
        SavePartition: SavePartition,
        GetPartition: GetPartition,
        AddPartitionViewModel: AddPartitionViewModel,
        AddPartitionLandingViewModel: AddPartitionLandingViewModel,
        GetDeviceIDs: GetDeviceIDs,
        GetContollerIDs: GetContollerIDs,
        AddContollerViewModel: AddContollerViewModel

    };
    return panelModel;

    datacontext.AddPanelViewModel = AddPanelViewModel;
    datacontext.SavePartition = SavePartition;

    function AddPanelViewModel(data) {
        data = data || {};
        self = this;
        self.Isnew = ko.observable(true);
        self.UniqueId = ko.observable("");
        self.Crc = ko.observable("");
        //self.ParentId = ko.observable("A70D7DCE-4F1F-E211-AAA2-0050568F021A");
        self.ParentId = ko.observable(data[0]);
        self.PanelType = ko.observable("P300Pro, Revision 1");
        self.Name = ko.computed(function () {
            return self.UniqueId();
        });
        self.GetControllerDetailsURL = data[2];
    };

    function AddPartitionLandingViewModel(data,siteID)
    {
        debugger;
        self = this;        
        //if (data != null) {
        self.MacIDlist = ko.observableArray([data.DeviceControllerName]);
        self.DeviceIDNew = ko.observable(data.DeviceControllerId);
        self.siteID1 = ko.observable(siteID);
        //self.MacID = ko.observable(data);
        //}
    }

    function AddContollerViewModel(data) {
        debugger;
        self = this;
        //if (data != null) {
        self.MacID = ko.observable(data.DeviceControllerName);
    }

    function AddPartitionViewModel(data,macID,siteID) {      
        self = this;
        self.Device =ko.observable(macID);
        self.siteID = ko.observable(siteID);
        data = JSON.parse(data.DeviceConfiguration);
        debugger;
        if (data != null) {
            self.identifiers = {
                id: 1,
                name: ko.observable(data.identifiers.name)
            }
            self.setConfig={
                defaultState: ko.observable(data.setConfig.defaultState),
                allowQuickFullSetFrom:{
                    unSet: ko.observable(data.setConfig.allowQuickFullSetFrom.unSet),
                    partSet: ko.observable(data.setConfig.allowQuickFullSetFrom.partSet),
                    fullSet: ko.observable(data.setConfig.allowQuickFullSetFrom.fullSet)
                }
            }
            self.autoPartSet=ko.observable(data.autoPartSet);
            self.type = ko.observable(data.type);

            self.notificationConfig = {
                stateChangeConfirm: [
                  {
                      toState:
                          {
                              fullSet: ko.observable(data.notificationConfig.stateChangeConfirm[0].toState)
                          },
                      indicators:
                          {
                              delay:
                                  {
                                      duration: ko.observable(data.notificationConfig.stateChangeConfirm[0].indicators.delay.duration),
                                      visibleDuration: ko.observable(data.notificationConfig.stateChangeConfirm[0].indicators.delay.visibleDuration),
                                      sounderType: ko.observable(data.notificationConfig.stateChangeConfirm[0].indicators.delay.sounderType)
                                  }
                          }
                  }               
                ],
                alarmIndicator: [
                 {
                     alarmType: {
                         intruder: ko.observable(data.notificationConfig.alarmIndicator[0].alarmType.intruder)
                     },
                     indicators: {
                         active: {
                             duration: ko.observable(data.notificationConfig.alarmIndicator[0].indicators.active.duration)
                         }
                     }
                 },
                 {
                     alarmType: {
                         fire: ko.observable(data.notificationConfig.alarmIndicator[1].alarmType.fire)
                     },
                     indicators: {
                         active: {
                             duration: ko.observable(data.notificationConfig.alarmIndicator[1].indicators.active.duration)
                         }
                     }
                 }
                ],
                 beepMode: ko.observable(data.autoPartSet),
                 partSetAnnunciation: ko.observable(data.autoPartSet)              
            };
            self.extension = [
             {
                 forceBypass: ko.observable(data.extension[0].forceBypass),
                 armConfirm: ko.observable(data.extension[0].armConfirm),
                 name: ko.observable(data.extension[0].name)
             }
            ];
            self.expand = {
                PartitionEntryViaPMCollection: [
                  {
                      overallDurationForTrigger: ko.observable(data.expand.PartitionEntryViaPMCollection[0].overallDurationForTrigger)
                  },
                  {
                      overallDurationForTrigger: ko.observable(data.expand.PartitionEntryViaPMCollection[1].overallDurationForTrigger)
                  }
                ]


                //PartitionExitViaPMCollection:[overallDurationForTrigger = ko.observable(data.expand.PartitionExitViaPMCollection[0].overallDurationForTrigger)]
            };

            self.BurglaryBellTimeout = ko.observable(data.BurglaryBellTimeout);
        }
        else {
            self.identifiers = {
                name: ko.observable("")
            };
            self.type = ko.observable("");
            self.setConfig = {
                defaultState: ko.observable(""),
                allowQuickFullSetFrom: {
                    unSet: ko.observable(""),
                    partSet: ko.observable(""),
                    fullSet: ko.observable("")
                }
            }
            self.autoPartSet = ko.observable("");
            self.type = ko.observable("");

            self.notificationConfig = {
                stateChangeConfirm: [
                  {
                      toState:
                          {
                              fullSet: ko.observable("")
                          },
                      indicators:
                          {
                              delay:
                                  {
                                      duration: ko.observable(""),
                                      visibleDuration: ko.observable(""),
                                      sounderType: ko.observable("")
                                  }
                          }
                  }
                ],
                alarmIndicator: [
                 {
                     alarmType: {
                         intruder: ko.observable("")
                     },
                     indicators: {
                         active: {
                             duration: ko.observable("")
                         }
                     }
                 },
                 {
                     alarmType: {
                         fire: ko.observable("")
                     },
                     indicators: {
                         active: {
                             duration: ko.observable("")
                         }
                     }
                 }
                ],
                beepMode: ko.observable(""),
                partSetAnnunciation: ko.observable("")
            };
            self.extension = [
             {
                 forceBypass: ko.observable(""),
                 armConfirm: ko.observable(""),
                 name: ko.observable("")
             }
            ];

           self.expand = {
                PartitionEntryViaPMCollection: [
                  {
                      overallDurationForTrigger: ko.observable("")
                  },
                  {
                      overallDurationForTrigger: ko.observable("")
                  }
                ],
                PartitionExitViaPMCollection: overallDurationForTrigger = ko.observable("")
            };

            self.BurglaryBellTimeout = ko.observable("");
        }
    };

    var displayErrors = function (form, errors) {
        var errorSummary = $(".error-msg");
        errorSummary.html("");
        if (errors.length <= 0)
            errorSummary.hide();
        else
            errorSummary.html($.map(errors, function (error) { return error; })).show();

    };

    function closecurrentdialog() {
        currentDialog = $(controllerModalDialogs.devicemodal);

        if (currentDialog != null) {
            currentDialog.modal("hide");
        }
    }


    function AddPanel() {
        window.EagleDeviceControllerPlugin.validationcontext.setvalidationfor("panelmodalform");
        if ($("#panelmodalform").valid()) {
            window.EagleDeviceControllerPlugin.datacontext.savePanelInfo(self, function (result) {
                self.Isnew(false);
                //$.publish(window.EagleDeviceControllerPlugin.common.events.confignewaccountadded, result);
                debugger;
                closecurrentdialog();
                // CSHTML content read
                window.EagleDeviceControllerPlugin.datacontext.getInfomsg();
            },
            function (errorResult) {
                                alertify.error(errorResult);
                            });
        }
    }
   
    function GetDeviceIDs(data)
    {
        debugger;
      //  siteID = accountid;// window.EagleDeviceControllerPlugin.uicontext.currentAccounData.nodedata.Name;
        window.EagleDeviceControllerPlugin.datacontext.getDeviceIDsInfo(data, function (successResult) {
            //Load the values into PopUp
            returndata = successResult;
            currentDialog = $("#arealandingform");    
            ko.cleanNode(currentDialog[0]);
            ko.applyBindings(new window.EagleDeviceControllerPlugin.PanelModel.AddPartitionLandingViewModel(returndata,data[0]), currentDialog[0]);
        }, function (errorResult) {
            alertify.error(errorResult);
            console.log(errorResult.jsonResult.errorMessage);
        });
    }

    function GetContollerIDs() {
        debugger;
        var site = [self.ParentId, null, self.GetControllerDetailsURL];

        //  siteID = accountid;// window.EagleDeviceControllerPlugin.uicontext.currentAccounData.nodedata.Name;
        window.EagleDeviceControllerPlugin.datacontext.getDeviceIDsInfo(site, function (successResult) {
            //Load the values into PopUp
            data = successResult;
            currentDialog = $("#myPartialContainer");
            ko.cleanNode(currentDialog[0]);
            ko.applyBindings(new window.EagleDeviceControllerPlugin.PanelModel.AddContollerViewModel(data), currentDialog[0]);
        }, function (errorResult) {
            alertify.error(errorResult);
            console.log(errorResult.jsonResult.errorMessage);
        });
    }

    function SavePartition() {
        debugger;
        modalOptions = { show: true, keyboard: false, backdrop: "static" }
          macID = self.Device();
         siteID= self.siteID();      
       
        window.EagleDeviceControllerPlugin.validationcontext.setvalidationfor("areasettingsform");
        if ($("#areasettingsform").valid()) {1
            window.EagleDeviceControllerPlugin.datacontext.savePartitionInfo(self, macID,siteID, function (successResult) {
                debugger;
                currentDialog = $("#successControllerModal");
                if (currentDialog != null) {
                    currentDialog.modal(modalOptions);
                }
                //alertify.success(successResult.successMessage);
            }, function (errorResult) {
                alertify.error(errorResult);
            });
        }
    }

    function GetPartition(accountid) {
        debugger;
        //MacId = self.DeviceIDq;// window.EagleDeviceControllerPlugin.uicontext.currentAccounData.nodedata.Name;
        self.MacId = ko.computed(function () {
            return self.DeviceIDNew();
        });        
        macid = self.MacId();
        siteid = self.siteID1();
        window.EagleDeviceControllerPlugin.datacontext.getPartitionInfo(self.MacId(), function (successResult) {
            //Load the values into PopUp
            data = successResult;          
            currentDialog = $("#areasettingsform");
            ko.cleanNode(currentDialog[0]);
            ko.applyBindings(new window.EagleDeviceControllerPlugin.PanelModel.AddPartitionViewModel(data, macid, siteid), currentDialog[0]);
        }, function (errorResult) {
            alertify.error(errorResult);
            console.log(errorResult.jsonResult.errorMessage);
        });
    }
})(jQuery, ko, window.EagleDeviceControllerPlugin.datacontext, window.EagleDeviceControllerPlugin.validationcontext);
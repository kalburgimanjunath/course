/// <reference path="../Resources.js" />

window.EagleDeviceControllerPlugin.validations = (function ($, validator) {
    debugger;
    var ValidationMessages = {
        MacId: Resources.panel_mac_address, // TODO: Resources.Panel_Mac
        Crc: Resources.panel_crc_no, // TODO: Resources.CRC
        panal_mac_max_length: Resources.panel_max_macid, // TODO: Resources.Panal_mac_min_length
        panal_mac_min_length: Resources.panel_max_macid, // TODO: Resources.Panal_mac_max_length
        panal_crc_max_length: Resources.panel_max_crcno, // TODO: Resources.Panal_mac_max_length
        panal_crc_min_length: Resources.panel_min_crcno , // TODO: Resources.Panal_crc_max_length

        //Area Validation
        Area_name_required: Resources.Area_name_required,
        Area_name_maxlength:Resources.Area_name_maxlength,
        Area_type_required: Resources.Area_type_required,
        Area_entry_delay1_required: Resources.Area_entry_delay1_required,
        Area_entry_delay2_required: Resources.Area_entry_delay2_required, 
        Area_burglarybell_required: Resources.Area_burglarybell_required,
        Area_firebelltimeout_required: Resources.Area_firebelltimeout_required,
        Area_exitdelay_required: Resources.Area_exitdelay_required,
        Area_rfhousecode_required: Resources.Area_rfhousecode_required,
        Area_armconfirm_required: Resources.Area_armconfirm_required
    };

    var configvalidation = {
        panelmodalform: {
            rules: {
                "panel_macid": {
                    required: true,
                    pattern: "^(?!0{12})[A-Fa-f0-9]{12}$"
                },
                "panel_crcno": {
                    required: true,
                  
                    pattern: "^(?!0{4})[A-Fa-f0-9]{4}$"

                }
            },
            messages: {
                "panel_macid": {
                    required: ValidationMessages.MacId,
                            pattern: ValidationMessages.ADI_Invalid

                },
                "panel_crcno": {
                    required: ValidationMessages.Crc,
              
                    pattern: ValidationMessages.ADI_Invalid

                },
            }
        },
        areasettingsform: {
            rules: {
                "area_name": {
                    required: true,
                    maxlength: 32
                },
                "area_type": {
                    required: true
                },
                "area_entry_delay1": {
                    required: true
                },
                "area_entry_delay2": {
                    required: true
                },
                "area_burglarybell": {
                    required: true
                },
                "area_firebelltimeout": {
                    required: true
                },
                "area_exitdelay": {
                    required: true
                },
                "area_rfhousecode": {
                    required: true
                },
                "area_armconfirm": {
                    required: true
                }
            },
            messages: {
                "area_name": {
                    required: ValidationMessages.Area_name_required,
                    maxlength: ValidationMessages.Area_name_maxlength
                },
                "area_type": {
                    required: ValidationMessages.Area_type_required
                },
                "area_entry_delay1": {
                    required: ValidationMessages.Area_entry_delay1_required
                },
                "area_entry_delay2": {
                    required: ValidationMessages.Area_entry_delay2_required
                },
                "area_burglarybell": {
                    required: ValidationMessages.Area_burglarybell_required
                },
                "area_firebelltimeout": {
                    required: ValidationMessages.Area_firebelltimeout_required
                },
                "area_exitdelay": {
                    required: ValidationMessages.Area_exitdelay_required
                },
                "area_rfhousecode": {
                    required: ValidationMessages.Area_rfhousecode_required
                },
                "area_armconfirm": {
                    required: ValidationMessages.Area_armconfirm_required
                }
            }
        }
    };

    function validteIfentered(element) {
        return $(element).val().length > 0;
    }
    function validateForm(formId) {
        return window.globalvalidationcontext.validateForm(formId);
    }

    return {
        configvalidation: configvalidation
    };

})(jQuery, jQuery.validator);
window.EagleDeviceControllerPlugin.validationcontext = (function ($, datacontext, validation) {
    var form_Validators = {};
    function setdefaultvalidation(formSelector, formvalidation) {
        $(formSelector + " :input").each(function (index, ele) {
            var elementId = $(ele).attr("id");
            if (elementId in formvalidation.rules) {
                var elementRule = formvalidation.rules[elementId];
                if (elementRule.required) {
                    $(ele).attr("required", true);
                }
            }
            //TO  DO validation for dropdowns
        });
    }

    function setvalidationfor(formid, isNew) {
        window.globalvalidationcontext.setvalidationfor(formid, isNew, validation);
    }
    function validateForm(formId) {
        return window.globalvalidationcontext.validateForm(formId);
    }

    return {
        validateForm: validateForm,
        setvalidationfor: setvalidationfor
    };
})(jQuery, window.EagleDeviceControllerPlugin.datacontext, window.EagleDeviceControllerPlugin.validations);

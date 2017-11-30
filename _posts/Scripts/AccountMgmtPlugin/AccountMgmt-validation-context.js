Honeywell.ISP.AccountMgmt.AccountValidations = {
    siteDetail: {
        rules: {
            customerName: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            siteName: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            country: {
                required: true,
                minlength: 2,
                maxlength: 120,
            },
            state: {
                required: true,
                minlength: 2,
                maxlength: 120,
            },
            city: {
                required: true,
                minlength: 2,
                maxlength: 120,
            },
            addressLine1: {
                required: true,
                minlength: 2,
                maxlength: 60
            },
            zipCode: {
                required: true,
                pattern: "^[a-zA-Z0-9 ]{3,10}$"
            },
            firstName: {
                minlength: 2,
                maxlength: 30
            },
            lastName: {
                minlength: 2,
                maxlength: 30
            },
            email: {
                //genericemail: true,
                email2: true,
                minlength: 6,
                maxlength: 60,
                //pattern: "^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            },
            officePhone: {
                // phoneIndia: true
                phoneGeneral: true
            },
            cellPhone: {
                // phoneIndia: true
                phoneGeneral: true
            },
            siteReferenceno: {
                maxlength: 32,
                pattern: "^[a-zA-Z0-9]{0,32}$"
                //////////alphanumericWithoutSpecialChars: true
            }
        },
        messages: {
            customerName: {
                required: Resources.customer_Name_Required,
                minlength: Resources.customer_Name_Min,
                maxlength: Resources.customer_Address_Max
            },
            siteName: {
                required: Resources.site_Name_Required,
                minlength: Resources.customer_Name_Min,
                maxlength: Resources.customer_Address_Max
            },
            country: {
                required: Resources.customer_Country_Required,
                minlength: Resources.customer_Country_Min,
                maxlength: Resources.customer_Address_Max
            },
            state: {
                required: Resources.customer_Region_Required,
                minlength: Resources.customer_Region_Min,
                maxlength: Resources.customer_Address_Max
            },
            city: {
                required: Resources.customer_City_Required,
                minlength: Resources.customer_City_Min,
                maxlength: Resources.customer_Address_Max
            },
            addressLine1: {
                required: Resources.customer_Address_Required,
                minlength: Resources.customer_Address_Min,
                maxlength: Resources.default_Max
            },
            zipCode: {
                required: Resources.customer_Zipcode_Required,
                pattern: Resources.customer_Zipcode_Zipus
            },
            firstName: {
                minlength: Resources.customer_Name_Min,
                maxlength: Resources.customer_Address_Max
            },
            lastName: {
                minlength: Resources.customer_Name_Min,
                maxlength: Resources.customer_Address_Max
            },
            email: {
                email: Resources.customer_Email_Email,
                minlength: Resources.user_Email_Min,
                maxlength: Resources.user_Email_Max
            },
            officePhone: {
                phoneGeneral: Resources.customer_Phone_Phoneus
            },
            cellPhone: {
                phoneGeneral: Resources.customer_Phone_Phoneus
            },
            siteReferenceno: {
                // required: Resources.SiteReferenceNumber_Required,
                pattern: Resources.SiteReferenceNumber_Valid,
                maxlength: Resources.SiteReferenceNumber_Max
            }
        }
    }
};
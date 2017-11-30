Honeywell.ISP.LoginMgmt.LoginValidations = {
    login: {
        rules: {
            username: {
                required: true,
                maxlength: 60
            },
            password: {
                required: true,
                maxlength: 30
            },
        },
        messages: {
            username: {
                required: Resources.customer_Email_Required,
                maxlength: Resources.default_Max
            },
            password: {
                required: Resources.user_Password_Required,
                maxlength: Resources.default_Max
            }
        }
    }
};


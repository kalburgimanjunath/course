(function () {

    var LoginModel = Honeywell.ISP.LoginMgmt.LoginModel;

    Honeywell.ISP.LoginMgmt.LoginViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.bindAll(this, 'onSignin');
            this.validationContext.reset();
            this.initializeBinding();
        },
        initializeBinding: function () {
            this.model = new Honeywell.ISP.LoginMgmt.LoginModel();
            this.isSignInEnabled = ko.computed(function () {
                return !!(this.model.UserName() && this.model.Password());
            }, this);
        },
        onSignin: function () {
            if (this.validationContext.validate()) {
                this.postDataRequest('/Authenticate', { loginmodel: this.model.toJson() }, function (err, result) {
                    if (!err && result && result.success) {
                        this.publish(Honeywell.ISP.LoginMgmt.events.login_complete, result);
                    }
                    else {
                        this.ErrorMessage((result && result.error) || Resources.General_error);
                    }
                });
            }
        },
        onCreateAccount: function () {

        },
        onForgotPassword: function () {

        }
    });

})();
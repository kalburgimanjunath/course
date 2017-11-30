Honeywell.ISP.LoginMgmt.LoginView = Honeywell.ISP.WebUIFramework.BaseView.inherits({
    initializeView: function (options) {

    },
    onViewInitialized: function (options) {
        this.show(new Honeywell.ISP.LoginMgmt.LoginViewModel({
            baseUrl: this.baseUrl,
            viewName: this.viewName,
            validationContext: new Honeywell.ISP.WebUIFramework.BaseValidationContext(this.viewName, Honeywell.ISP.LoginMgmt.LoginValidations.login),
        }));
    },
    subscribeEvents: function () {
        this.subscribe(Honeywell.ISP.LoginMgmt.events.login_complete, this.onLoginComplete);
    },
    onLoginComplete: function (event, data) {
        var prevCulture = $.cookie("_culture");
        $.cookie("_culture", data.culture);
        this.changeLocation(data, prevCulture != data.culture, window);
    },
    changeLocation: function (data, isReload, w) {
        if (isReload) {
            w.location.reload();
        }
        else {
            w.location = data.redirect || w.location.href;
        }
    }
});
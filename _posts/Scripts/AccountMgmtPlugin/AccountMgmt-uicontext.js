Honeywell.ISP.AccountMgmt.ManageSiteDetailView = Honeywell.ISP.WebUIFramework.BaseView.inherits({
    initializeView: function (options) {
        this.subscribe(Honeywell.ISP.AccountMgmt.events.hamburger_menu_selected, this.onShowViewEventReceived, true);
    },
    onShowViewEventReceived: function (eventName, data) {
        if (data && data.action == 'AddSite') {
            this.show(new Honeywell.ISP.AccountMgmt.ManageSiteDetailViewModel({
                viewName: this.viewName,
                baseUrl: this.baseUrl,
                antiForgeryToken: this.antiForgeryToken,
                validationContext: new Honeywell.ISP.WebUIFramework.BaseValidationContext(this.viewName, Honeywell.ISP.AccountMgmt.AccountValidations.siteDetail)
            }));
        }
    },
    subscribeEvents: function () {
        this.subscribe(Honeywell.ISP.AccountMgmt.events.sitedetail_saved_success, this.onSiteDetailSaved);
        this.subscribe(Honeywell.ISP.AccountMgmt.events.hide_managesitedetail_view, this.onCloseViewEventReceived);
    },
    onSiteDetailSaved: function (eventName, data) {
        alertify.success(Honeywell.ISP.AccountMgmt.messages.sitedetail_saved_success);
        this.close();
        this.publish(Honeywell.ISP.AccountMgmt.events.show_sitedetail_view, {});
    },
    onCloseViewEventReceived: function () {
        this.close();
    }
});

Honeywell.ISP.AccountMgmt.SiteDetailView = Honeywell.ISP.WebUIFramework.BaseView.inherits({
    initializeView: function (options) {
        this.subscribe(Honeywell.ISP.AccountMgmt.events.hamburger_menu_selected, this.onShowViewEventReceived, true);
        this.subscribe(Honeywell.ISP.AccountMgmt.events.menu_item_selected, this.onShowViewEventReceived, true);
    },
    onShowViewEventReceived: function (eventName, data) {
        if (data && ['SiteOverview', 'overview'].indexOf(data.action) >= 0) {
            data = data || {};
            this.show(new Honeywell.ISP.AccountMgmt.SiteDetailViewModel({
                viewName: this.viewName,
                baseUrl: this.baseUrl,
                antiForgeryToken: this.antiForgeryToken,
                siteId: data.id
            }));
        }
        else {
            this.close();
        }
    }
});
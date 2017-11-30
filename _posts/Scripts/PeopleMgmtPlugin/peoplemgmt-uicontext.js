Honeywell.ISP.PeopleMgmt.ManagePeopleDetailView = Honeywell.ISP.WebUIFramework.BaseView.inherits({
    initializeView: function (options) {
        this.subscribe(Honeywell.ISP.PeopleMgmt.events.show_managepeopledetail_view, this.onShowViewEventReceived, true);
    },
    onShowViewEventReceived: function (eventName, data) {
        this.show(new Honeywell.ISP.PeopleMgmt.ManagePeopleDetailViewModel({
            viewName: this.viewName,
            baseUrl: this.baseUrl,
            antiForgeryToken: this.antiForgeryToken,
            validationContext: new Honeywell.ISP.WebUIFramework.BaseValidationContext(this.viewName, Honeywell.ISP.PeopleMgmt.Validations.people)
        }));
    },
    subscribeEvents: function () {
        this.subscribe(Honeywell.ISP.PeopleMgmt.events.peopledetail_saved_success, this.onPeopleDetailSaved);
        this.subscribe(Honeywell.ISP.PeopleMgmt.events.hide_managepeopledetail_view, this.onCloseViewEventReceived);
    },
    onPeopleDetailSaved: function (eventName, data) {
        alertify.success(Honeywell.ISP.PeopleMgmt.messages.peopledetail_saved_success);
        this.close();
        this.publish(Honeywell.ISP.PeopleMgmt.events.show_peopledetail_view, {});
    },
    onCloseViewEventReceived: function () {
        this.close();
    }
});

Honeywell.ISP.PeopleMgmt.PeopleView = Honeywell.ISP.WebUIFramework.BaseView.inherits({
    initializeView: function (options) {
        this.subscribe(Honeywell.ISP.PeopleMgmt.events.menu_item_selected, this.onShowViewEventReceived, true);
        this.subscribe(Honeywell.ISP.PeopleMgmt.events.hamburger_menu_selected, this.onShowViewEventReceived, true);
    },
    onShowViewEventReceived: function (eventName, data) {
        if (data && data.action == "People|Groups") {
            this.show(new Honeywell.ISP.PeopleMgmt.PeopleViewModel({
                viewName: this.viewName,
                baseUrl: this.baseUrl,
                antiForgeryToken: this.antiForgeryToken,
                accountId: data.id,
                entityCount: data.entityCount
            }));
        }
        else {
            this.close();
        }
    }
});
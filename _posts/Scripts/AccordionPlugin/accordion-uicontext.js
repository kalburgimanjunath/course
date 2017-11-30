Honeywell.ISP.Accordion.AccordionView = Honeywell.ISP.WebUIFramework.BaseView.inherits({
    initializeView: function (options) {
        this.subscribe(Honeywell.ISP.Accordion.events.hamburger_menu_selected, this.onShowSiteDetailView, true);
    },
    onShowSiteDetailView: function (event, data) {
        if (data && ["SiteOverview"].indexOf(data.action) >= 0) {
            this.show(new Honeywell.ISP.Accordion.AccordionViewModel({
                baseUrl: this.baseUrl,
                viewName: this.viewName,
                mode: 'site',
                id: data.id
            }));
        }
        else {
            this.close();
        }
    },
    subscribeEvents: function () {
        this.subscribe(Honeywell.ISP.Accordion.events.toggle_accordion_menu, this.toggleMenu);
    },
    toggleMenu: function (event, data) {
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.unhide();
        }
    }
});
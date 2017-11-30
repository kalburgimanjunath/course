﻿$(function () {

    var accountMgmtUrl = $('#accountmgmturl').val();
    var antiForgeryToken = $('#antiForgeryToken').val();

    var views = {
        createSiteDetailView: new Honeywell.ISP.AccountMgmt.ManageSiteDetailView({
            baseUrl: accountMgmtUrl,
            antiForgeryToken: antiForgeryToken,
            viewName: 'customer-view',
            modalId: 'modal-id-customer'
        }),
        siteDetailOverview: new Honeywell.ISP.AccountMgmt.SiteDetailView({
            baseUrl: accountMgmtUrl,
            antiForgeryToken: antiForgeryToken,
            viewName: 'customer-overview'
        }),
        customerListView: new Honeywell.ISP.AccountMgmt.CustomerListView({
            baseUrl: accountMgmtUrl,
            antiForgeryToken: antiForgeryToken,
            viewName: 'customer-listview'
        }),
        siteOverView: new Honeywell.ISP.AccountMgmt.SiteOverview({
            baseUrl: accountMgmtUrl,
            antiForgeryToken: antiForgeryToken,
            viewName: 'site-overview'
        })
    };
});
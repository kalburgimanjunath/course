$(function () {

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
        })
    };
});
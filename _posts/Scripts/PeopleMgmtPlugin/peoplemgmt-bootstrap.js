$(function () {

    var peopleMgmtUrl = $('#peoplemgmturl').val();
    var antiForgeryToken = $('#antiForgeryToken').val();

    var views = {
        ManagePeopleView: new Honeywell.ISP.PeopleMgmt.ManagePeopleDetailView({
            baseUrl: peopleMgmtUrl,
            antiForgeryToken: antiForgeryToken,
            viewName: 'people-create',
            modalId: 'modal-id-people'
        }),
        PeopleView: new Honeywell.ISP.PeopleMgmt.PeopleView({
            baseUrl: peopleMgmtUrl,
            antiForgeryToken: antiForgeryToken,
            viewName: 'people-view'
        })
    };
});
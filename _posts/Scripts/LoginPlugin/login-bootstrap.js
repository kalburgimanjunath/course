$(function () {

    var loginUrl = $('#loginurl').val();

    var views = {
        LoginView: new Honeywell.ISP.LoginMgmt.LoginView({
            baseUrl: loginUrl,
            viewName: 'loginform'
        })
    };
});
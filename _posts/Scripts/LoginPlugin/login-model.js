Honeywell.ISP.LoginMgmt.LoginModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.UserName = ko.observable();
        this.Password = ko.observable();
        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
        data = data || {};
        this.UserName(data.UserName);
        this.Password(data.Password);
    },
    toJson: function () {
        return ko.mapping.toJS(this);
    }
});

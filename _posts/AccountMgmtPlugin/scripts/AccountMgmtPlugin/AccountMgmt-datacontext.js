(function () {
    Honeywell.ISP.AccountMgmt.ManageSiteDetailViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.validationContext.reset();
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.CustomerList = ko.observableArray();
            this.DealerId = ko.observable();
            this.DealerId(options.DealerId);
            this.pagingInfo = { startIndex: 0, maxRecordCount: 20 };
            this.siteDetailModel = new Honeywell.ISP.AccountMgmt.SiteDetailModel();
            this.getFeatures();
        },
        getFeatures: function () {
            this.siteDetailModel.SiteInfo.setFeatures([{ FeatureName: 'SiteReferenceNo', RepeatCount: 0, FeatureValues: null }]);
        },
        saveSiteDetail: function () {
            this.ErrorMessage('');
            if (this.validationContext.validate()) {
                this.postDataRequest('/SaveSiteDetail', { siteDetail: this.siteDetailModel.toJson() }, function (err, result) {
                    if (!err && result && result.success) {
                        this.publish(Honeywell.ISP.AccountMgmt.events.sitedetail_saved_success);
                    }
                    else {
                        this.showError(result);
                    }
                });
            }
        },
        cancelSiteDetail: function () {
            this.publish(Honeywell.ISP.AccountMgmt.events.hide_managesitedetail_view);
        },
        showError: function (result) {
            this.ErrorMessage((result && result.errorMessage) || Resources.General_error);
        },
        onAutoComplete: function (data) {
            this.siteDetailModel.SiteInfo.ContactInfo.City(data.City);
            this.siteDetailModel.SiteInfo.ContactInfo.Country(data.Country);
            this.siteDetailModel.SiteInfo.ContactInfo.Region(data.State);
        }
    });

    Honeywell.ISP.AccountMgmt.CustomerListDetailViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.bindAll('getCustomerList', 'onCustomerClick');
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.CustomerList = ko.observableArray();
            this.ErrorMessage = ko.observable("");
            this.DealerId = ko.observable();
            this.IsError = ko.observable(false);
            this.DealerId(options.DealerId);
            this.pagingInfo = { startIndex: null, maxRecordCount: null };
            this.siteDetailModel = new Honeywell.ISP.AccountMgmt.SiteDetailModel();
            this.getCustomerList();
        },

        getCustomerList: function () {
            this.postDataRequest('/GetCustomerDetail', { dealerId: this.DealerId(), startIndex: this.pagingInfo.startIndex, maxRecordCount: this.pagingInfo.maxRecordCount }, function (err, result) {
                if (!err && result && result.success) {
                    this.CustomerList(result.data.CustomerDetailItems);
                }
            });
        },

        onCustomerClick: function (data) {
            Honeywell.ISP.Navigation.navigate(['26'], 'hamburgermenuselected', { action: 'showsiteoverview', id: data.Id });
        }
    });

    Honeywell.ISP.AccountMgmt.SiteDetailViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.siteId = options.siteId;
            this.siteDetailModel = new Honeywell.ISP.AccountMgmt.SiteDetailModel();
            this.getSiteDetail();
        },
        getSiteDetail: function () {
            if (this.siteId) {
                this.postDataRequest('/GetSiteDetail', { siteId: this.siteId }, function (err, result) {
                    if (!err && result && result.success) {
                        this.siteDetailModel.dataSource(result.data);
                    }
                });
            }
        },
        addController: function () {
            Honeywell.ISP.Navigation.navigate(['25'], Honeywell.ISP.AccountMgmt.events.show_addcontroller_view, { siteId: this.siteId });
        }
    });
    Honeywell.ISP.AccountMgmt.SiteOverViewViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.siteId = options.siteId;
            this.siteDetailModel = new Honeywell.ISP.AccountMgmt.SiteDetailModel();
            this.getSiteDetail();
        },
        getSiteDetail: function () {
            if (this.siteId) {
                this.postDataRequest('/GetSiteDetail', { siteId: this.siteId }, function (err, result) {
                    if (!err && result && result.success) {
                        this.siteDetailModel.dataSource(result.data);
                    }
                });
            }
        }
    });

})();
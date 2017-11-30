(function () {
    
    Honeywell.ISP.AccountMgmt.ManageSiteDetailViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.validationContext.reset();
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.ErrorMessage = ko.observable("");
            this.IsError = ko.observable(false);
            this.siteDetailModel = new Honeywell.ISP.AccountMgmt.SiteDetailModel();
            this.getFeatures();
        },
        getFeatures: function()
        {
            this.siteDetailModel.SiteInfo.setFeatures([{ FeatureName: 'SiteReferenceNo', RepeatCount: 0, FeatureValues : null}]);
        },
        saveSiteDetail: function () {
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
           // this.Canceled(true);
        },
        showError: function (result) {
            this.IsError(true);
            this.ErrorMessage((result && result.errorMessage) || Resources.General_error);
        },
        onAutoComplete: function (data) {
            this.siteDetailModel.SiteInfo.ContactInfo.City(data.City);
            this.siteDetailModel.SiteInfo.ContactInfo.Country(data.Country);
            this.siteDetailModel.SiteInfo.ContactInfo.Region(data.State);
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
        },
        addArea: function () {
            Honeywell.ISP.Navigation.navigate(['25'], Honeywell.ISP.AccountMgmt.events.show_addarea_view, { siteId: this.siteId });
        }
    });
	
})();
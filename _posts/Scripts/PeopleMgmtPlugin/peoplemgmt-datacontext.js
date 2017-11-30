(function () {

    Honeywell.ISP.PeopleMgmt.ManagePeopleDetailViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.validationContext.reset();
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.ErrorMessage = ko.observable("");
            this.IsError = ko.observable(false);
            this.model = new Honeywell.ISP.PeopleMgmt.CredentialHolderModel();
        },
        savePeopleDetail: function () {
            if (this.validationContext.validate()) {
                this.postDataRequest('/SavePeopleDetail', { PeopleDetail: this.model.toJson() }, function (err, result) {
                    if (!err && result && result.success) {
                        this.publish(Honeywell.ISP.PeopleMgmt.events.Peopledetail_saved_success);
                    }
                    else {
                        this.showError(result);
                    }
                });
            }
        },
        cancelPeopleDetail: function () {
            this.publish(Honeywell.ISP.PeopleMgmt.events.hide_managePeopledetail_view);
        },
        showError: function (result) {
            this.IsError(true);
            this.ErrorMessage((result && result.errorMessage) || Resources.General_error);
        }
    });

    Honeywell.ISP.PeopleMgmt.PeopleViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function (options) {
            this.initializeBinding(options);
        },
        initializeBinding: function (options) {
            this.accountId = options.accountId;
            this.credentialHolderCount = ko.observable(options.entityCount ? options.entityCount.split('|')[0] : 0);
            this.pagingInfo = { startIndex: 0, maxRecordCount: 20 };
            this.lazyLoading = ko.observable(true);
            this.credentialHolders = ko.observableArray([]);
            this.model = ko.computed(function () {
                return _.find(this.credentialHolders(), function (ch) {
                    return ch.IsSelected();
                });
            }, this);
            if (this.accountId) {
                this.getCredentialHolderList(function () {
                    if (this.credentialHolders().length > 0) {
                        this.credentialHolders()[0].IsSelected(true);
                    }
                });
            }
        },
        getCredentialHolderList: function (cb) {
            this.postDataRequest('/GetCredentialHolderList', { accountId: this.accountId, startIndex: this.pagingInfo.startIndex, maxRecordCount: this.pagingInfo.maxRecordCount }, function (err, result) {
                if (!err && result && result.success) {
                    this.credentialHolders.push.apply(this.credentialHolders, _.map(result.data, function (ch) {
                        return new Honeywell.ISP.PeopleMgmt.CredentialHolderModel(ch);
                    }));
                    this.pagingInfo.startIndex += result.data.length;
                }
                if (cb) { cb.call(this); }
            });
        },
        loadNextItems: function () {
            if (this.lazyLoading()) {
                this.lazyLoading(false);
                this.getCredentialHolderList(function () {
                    this.lazyLoading(true);
                });
            }
        },
        toggleAccordionMenu: function () {
            this.publish(Honeywell.ISP.PeopleMgmt.events.toggle_accordion_menu);
        }
    });

})();
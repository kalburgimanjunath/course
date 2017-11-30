Honeywell.ISP.AccountMgmt.FeatureBasedModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.Features = ko.observableArray([]);                
    },
    getFeature: function (fName) {
        return _.find(this.Features(), function (f) {
            return f.FeatureName() === fName;
        });
    },
    setFeatures: function (data) {
        this.Features(_.map(data || [], function (f) {
            return new Honeywell.ISP.AccountMgmt.FeatureModel(f);
        }));
    },
    hasFeature: function (fName) {
        return _.some(this.Features(), function (f) {
            return f.FeatureName() === fName;
        });
    },
    toJson: function () {
        return _.map(_.filter(this.Features(), function (f) {
            return f.FeatureValues() != null && f.FeatureValues() != '';
        }), function (f) {
            return f.toJson();
        });
    }
});

Honeywell.ISP.AccountMgmt.FeatureModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.FeatureName = ko.observable(data.FeatureName);
        this.FeatureValues = ko.observable(data.FeatureValues);
        this.MinValue = ko.observable(data.MinValue);
        this.MaxValue = ko.observable(data.MaxValue);
        this.DefaultValue = ko.observable(data.DefaultValue);
        this.Type = ko.observable(data.Type);
        this.RepeatCount = ko.observable(data.RepeatCount);
        this.Value = ko.computed({
            read: function () {
                var value = (this.FeatureValues() != null && this.FeatureValues() != '') ? this.FeatureValues() : this.DefaultValue();
                if (value != null && value != '') {
                    switch (this.Type()) {
                        case Honeywell.ISP.AccountMgmt.dataType.Int:
                            var val = parseInt(value);
                            return isNaN(val) ? 0 : val;
                        case Honeywell.ISP.AccountMgmt.dataType.Bit:
                            return ["true", "1"].indexOf(value.toString().toLowerCase()) >= 0;
                    }
                }
                return value;
            },
            write: function (value) {
                this.FeatureValues(value && value.toString());
            },
            owner: this
        })
    },
    toJson: function () {
        return { FeatureName: this.FeatureName(), FeatureValues: this.FeatureValues(), RepeatCount: this.RepeatCount() };
    }
});

Honeywell.ISP.AccountMgmt.AccountModel = Honeywell.ISP.AccountMgmt.FeatureBasedModel.inherits({
    initialize: function (data) {
        Honeywell.ISP.AccountMgmt.FeatureBasedModel.prototype.initialize.call(this, data);
        this.Id = ko.observable();
        this.ParentId = ko.observable();
        this.Status = ko.observable();
        this.Name = ko.observable();
        this.Description = ko.observable();
        this.EntityType = ko.observable();
        this.ContactInfo = new Honeywell.ISP.AccountMgmt.ContactInfoModel();
        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
         data = data || {};
        this.Id(data.Id);
        this.ParentId(data.ParentId);
        this.Status(data.Status);
        this.Name(data.Name);
        this.Description(data.Description);
        this.EntityType(data.EntityType);
        this.ContactInfo.dataSource(data.ContactInfo);
        this.setFeatures(data.Features);
    },
    toJson: function () {
        var json = ko.mapping.toJS(this, { ignore: ['Features'] });
        json.Features = Honeywell.ISP.AccountMgmt.FeatureBasedModel.prototype.toJson.call(this);
        return json;
    }
});

Honeywell.ISP.AccountMgmt.UserModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.Id = ko.observable();
        this.FirstName = ko.observable();
        this.LastName = ko.observable();
        this.UserName = ko.observable();
        this.AccountId = ko.observable();
        this.Description = ko.observable();
        this.ContactInfo = new Honeywell.ISP.AccountMgmt.ContactInfoModel();
        this.CredentialInfo = new Honeywell.ISP.AccountMgmt.CredentialInfoModel();
        this.RoleInfo = new Honeywell.ISP.AccountMgmt.RoleInfoModel();
        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
         data = data || {};
        this.Id(data.Id);
        this.FirstName(data.FirstName);
        this.LastName(data.LastName);
        this.UserName(data.UserName);
        this.AccountId(data.AccountId);
        this.Description(data.Description);
        this.ContactInfo.dataSource(data.ContactInfo);
        this.CredentialInfo.dataSource(data.CredentialInfo);
        this.RoleInfo.dataSource(data.RoleInfo);
    },
    toJson: function () {
        return ko.mapping.toJS(this);
    }
});

Honeywell.ISP.AccountMgmt.ContactInfoModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.EmailAddress = ko.observable();
        this.MobileNumber = ko.observable();
        this.WorkPhone = ko.observable();
        this.Phone = ko.observable();
        this.FullAddress = ko.observable();
        this.Country = ko.observable();
        this.Region = ko.observable();
        this.City = ko.observable();
        this.AddressLine1 = ko.observable();
        this.AddressLine2 = ko.observable();
        this.ZipCode = ko.observable();
        this.dataSource(data);
    },
    dataSource: function (data) {
        data = data || {};
        this.EmailAddress(data.EmailAddress);
        this.MobileNumber(data.MobileNumber);
           this.WorkPhone(data.WorkPhone);
        this.Phone(data.Phone);
        this.FullAddress(data.FullAddress);
        this.Country(data.Country);
        this.Region(data.Region);
        this.City(data.City);
        this.AddressLine1(data.AddressLine1);
        this.AddressLine2(data.AddressLine2);
        this.ZipCode(data.ZipCode);
    },
    toJson: function () {
        return ko.mapping.toJS(this);
    }
});

Honeywell.ISP.AccountMgmt.CredentialInfoModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.Password = ko.observable();
            this.dataSource(data);
    },
    dataSource: function (data) {
        data = data || {};
        this.Password(data.Password);
    },
    toJson: function () {
        return ko.mapping.toJS(this);
        }
});

Honeywell.ISP.AccountMgmt.RoleInfoModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.RoleId = ko.observable();
        this.dataSource(data);
    },
    dataSource: function (data) {
        data = data || {};
        this.RoleId(data.RoleId);
    },
    toJson: function () {
        return ko.mapping.toJS(this);
    }
});

Honeywell.ISP.AccountMgmt.SiteDetailModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.CustomerInfo = new Honeywell.ISP.AccountMgmt.AccountModel();
        this.SiteInfo = new Honeywell.ISP.AccountMgmt.AccountModel();
        this.PrimaryOperatorInfo = new Honeywell.ISP.AccountMgmt.UserModel();
    },
    dataSource: function (data) {
        data = data || {};
        this.CustomerInfo.dataSource(data.CustomerInfo);
        this.SiteInfo.dataSource(data.SiteInfo);
        this.PrimaryOperatorInfo.dataSource(data.PrimaryOperatorInfo);
    },
    toJson: function ()
    {
        return {  CustomerInfo : this.CustomerInfo.toJson(), SiteInfo :  this.SiteInfo.toJson(), PrimaryOperatorInfo : this.PrimaryOperatorInfo.toJson() };
    }  
                  // ko.mapping.toJS(this);
    
});
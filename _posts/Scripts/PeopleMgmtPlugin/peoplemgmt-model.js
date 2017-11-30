Honeywell.ISP.PeopleMgmt.CredentialHolderModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.Name1 = ko.observable();
        this.Name2 = ko.observable();
        this.Name3 = ko.observable();
        this.DisplayName = ko.observable();
        this.EmployeeId = ko.observable();
        this.Email = ko.observable();
        this.Phone = ko.observable();
        this.Pin = ko.observable();
        this.Note1 = ko.observable();
        this.Note2 = ko.observable();
        this.Note3 = ko.observable();
        this.CredentialHolderTypeName = ko.observable();
        this.CredentialHolderStatusName = ko.observable();
        this.CredentialHolderTypeId = ko.observable();
        this.CredentialHolderSubTypeId = ko.observable();
        this.CredentialHolderStatusId = ko.observable();
        this.CreateDateTime = ko.observable();
        this.ActivationDateTime = ko.observable();
        this.ExpiryDateTime = ko.observable();
        this.AssociatedBlobs = ko.observableArray([]);
        this.AccessLevelIdentifiers = ko.observableArray([]);
        this.Credentials = ko.observableArray([]);
        this.Crc = ko.observable();
        this.AccountType = ko.observable();
        this.Status = ko.observable();
        this.Id = ko.observable();
        this.UniqueId = ko.observable();
        this.ParentId = ko.observable();
        this.Name = ko.observable();
        this.Description = ko.observable();
        this.TypeId = ko.observable();
        this.EntityType = ko.observable();
        this.IsActive = ko.observable();
        this.IsDefault = ko.observable();
        this.IsSystemEntity = ko.observable();
        this.HasChild = ko.observable();
        this.IsShared = ko.observable();
        this.IsSelected = ko.observable();
        this.FLName = ko.computed({
            read: function () {
                return this.Name1() + ' ' + this.Name3();
            }
        }, this);
        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
        data = data || {};
        this.Name1(data.Name1);
        this.Name2(data.Name2);
        this.Name3(data.Name3);
        this.DisplayName(data.DisplayName);
        this.EmployeeId(data.EmployeeId);
        this.Email(data.Email);
        this.Phone(data.Phone);
        this.Pin(data.Pin);
        this.Note1(data.Note1);
        this.Note2(data.Note2);
        this.Note3(data.Note3);
        this.CredentialHolderTypeName(data.CredentialHolderTypeName);
        this.CredentialHolderStatusName(data.CredentialHolderStatusName);
        this.CredentialHolderTypeId(data.CredentialHolderTypeId);
        this.CredentialHolderSubTypeId(data.CredentialHolderSubTypeId);
        this.CredentialHolderStatusId(data.CredentialHolderStatusId);
        this.CreateDateTime(data.CreateDateTime);
        this.ActivationDateTime(data.ActivationDateTime);
        this.ExpiryDateTime(data.ExpiryDateTime);
        this.AssociatedBlobs(data.AssociatedBlobs || []);
        this.AccessLevelIdentifiers(data.AccessLevelIdentifiers || []);
        this.Crc(data.Crc);
        this.AccountType(data.AccountType);
        this.Status(data.Status);
        this.Id(data.Id);
        this.UniqueId(data.UniqueId);
        this.ParentId(data.ParentId);
        this.Name(data.Name);
        this.Description(data.Description);
        this.TypeId(data.TypeId);
        this.EntityType(data.EntityType);
        this.IsActive(data.IsActive);
        this.IsDefault(data.IsDefault);
        this.IsSystemEntity(data.IsSystemEntity);
        this.HasChild(data.HasChild);
        this.IsShared(data.IsShared);
        this.Credentials(_.map(data.Credentials || [], function (c) {
            return new Honeywell.ISP.PeopleMgmt.CredentialModel(c);
        }));
    },
    toJson: function () {
        return ko.mapping.toJS(this);
    }
});

Honeywell.ISP.PeopleMgmt.CredentialModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {
        this.Password = ko.observable();
        this.LastUsedDevicePointId = ko.observable();
        this.LastAccessEventId = ko.observable();
        this.CredentialStatusId = ko.observable();
        this.AntiPassbackResetTime = ko.observable();
        this.MaxNumberOfDays = ko.observable();
        this.AbsenteeLimit = ko.observable();
        this.ThreatAuthority = ko.observable();
        this.ExtendedTimeUnlock = ko.observable();
        this.ActivationDateTime = ko.observable();
        this.ExpiryDateTime = ko.observable();
        this.CredentialSubStatusId = ko.observable();
        this.IsPrivacyEnabled = ko.observable();
        this.IsEscortRequired = ko.observable();
        this.IsTraceEnabled = ko.observable();
        this.IsMidnightForgiveEnabled = ko.observable();
        this.IsOfficeModeEnabled = ko.observable();
        this.IsOccupancyCountExempted = ko.observable();
        this.IsAntiPassBackExempted = ko.observable();
        this.CredentialHolderId = ko.observable();
        this.StatusNotes = ko.observable();
        this.CredentialNumber = ko.observable();
        this.IssueDateTime = ko.observable();
        this.IssueLevel = ko.observable();
        this.Pin = ko.observable();
        this.DuressCode = ko.observable();
        this.CredentialTypes = ko.observableArray();
        this.MaxUseCount = ko.observable();
        this.IsLimitedUseCount = ko.observable();
        this.CredentialType = ko.observable();
        this.TechnologyTypeIdentifiers = ko.observableArray();
        this.IsTemporary = ko.observable();
        this.Crc = ko.observable();
        this.AccountType = ko.observable();
        this.Status = ko.observable();
        this.Id = ko.observable();
        this.UniqueId = ko.observable();
        this.ParentId = ko.observable();
        this.DisplayName = ko.observable();
        this.Name = ko.observable();
        this.Description = ko.observable();
        this.TypeId = ko.observable();
        this.EntityType = ko.observable();
        this.IsActive = ko.observable();
        this.IsDefault = ko.observable();
        this.IsSystemEntity = ko.observable();
        this.HasChild = ko.observable();
        this.IsShared = ko.observable();
        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
        data = data || {};
        this.Password(data.Password);
        this.LastUsedDevicePointId(data.LastUsedDevicePointId);
        this.LastAccessEventId(data.LastAccessEventId);
        this.CredentialStatusId(data.CredentialStatusId);
        this.AntiPassbackResetTime(data.AntiPassbackResetTime);
        this.MaxNumberOfDays(data.MaxNumberOfDays);
        this.AbsenteeLimit(data.AbsenteeLimit);
        this.ThreatAuthority(data.ThreatAuthority);
        this.ExtendedTimeUnlock(data.ExtendedTimeUnlock);
        this.ActivationDateTime(data.ActivationDateTime);
        this.ExpiryDateTime(data.ExpiryDateTime);
        this.CredentialSubStatusId(data.CredentialSubStatusId);
        this.IsPrivacyEnabled(data.IsPrivacyEnabled);
        this.IsEscortRequired(data.IsEscortRequired);
        this.IsTraceEnabled(data.IsTraceEnabled);
        this.IsMidnightForgiveEnabled(data.IsMidnightForgiveEnabled);
        this.IsOfficeModeEnabled(data.IsOfficeModeEnabled);
        this.IsOccupancyCountExempted(data.IsOccupancyCountExempted);
        this.IsAntiPassBackExempted(data.IsAntiPassBackExempted);
        this.CredentialHolderId(data.CredentialHolderId);
        this.StatusNotes(data.StatusNotes);
        this.CredentialNumber(data.CredentialNumber);
        this.IssueDateTime(data.IssueDateTime);
        this.IssueLevel(data.IssueLevel);
        this.Pin(data.Pin);
        this.DuressCode(data.DuressCode);
        this.CredentialTypes(data.CredentialTypes || []);
        this.MaxUseCount(data.MaxUseCount);
        this.IsLimitedUseCount(data.IsLimitedUseCount);
        this.CredentialType(data.CredentialType);
        this.TechnologyTypeIdentifiers(data.TechnologyTypeIdentifiers || []);
        this.IsTemporary(data.IsTemporary);
        this.Crc(data.Crc);
        this.AccountType(data.AccountType);
        this.Status(data.Status);
        this.Id(data.Id);
        this.UniqueId(data.UniqueId);
        this.ParentId(data.ParentId);
        this.DisplayName(data.DisplayName);
        this.Name(data.Name);
        this.Description(data.Description);
        this.TypeId(data.TypeId);
        this.EntityType(data.EntityType);
        this.IsActive(data.IsActive);
        this.IsDefault(data.IsDefault);
        this.IsSystemEntity(data.IsSystemEntity);
        this.HasChild(data.HasChild);
        this.IsShared(data.IsShared);
    },
    toJson: function () {
        return ko.mapping.toJS(this);
    }
});
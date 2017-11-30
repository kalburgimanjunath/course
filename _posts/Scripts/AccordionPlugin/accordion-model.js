Honeywell.ISP.Accordion.AccordionModel = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {

        this.Id = ko.observable();
        this.Name = ko.observable();
        this.Count = ko.observable();
        this.MenuItems = ko.observableArray([]);

        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
        data = data || {};
        this.Id(data.Id);
        this.Name(data.Name);
        this.Count(data.Count);

        this.MenuItems(_.map(data.Items || [], function (item) {
            return new Honeywell.ISP.Accordion.MenuItem(item);
        }));
    },
    setCount: function (data) {
        _.each(this.MenuItems(), function (item) {
            item.setCount(data);
        });
    }
});

Honeywell.ISP.Accordion.MenuItem = Honeywell.ISP.WebUIFramework.BaseModel.inherits({
    initialize: function (data) {

        this.Id = ko.observable();
        this.ParentId = ko.observable();
        this.Name = ko.observable();
        this.DisplayName = ko.observable();
        this.Description = ko.observable();
        this.EntityType = ko.observable();
        this.Count = ko.observable();
        this.Items = ko.observableArray([]);
        this.Icon = ko.computed(function () {
            return 'ispicon_' + this.Name();
        }, this);

        if (data) {
            this.dataSource(data);
        }
    },
    dataSource: function (data) {
        data = data || {};
        this.Id(data.Id);
        this.ParentId(data.ParentId);
        this.Name(data.Name);
        this.DisplayName(data.DisplayName);
        this.Description(data.Description);
        this.EntityType(data.EntityType);
        this.Count(data.Count);

        this.Items(_.map(data.Items || [], function (item) {
            return new Honeywell.ISP.Accordion.MenuItem(item);
        }));

    },
    setCount: function (data) {
        if (this.EntityType()) {
            var names = this.EntityType().toUpperCase().split('|');
            this.Count(_.map(names, function (n) { return data[n] || 0; }).join(' | '));
        }
        _.each(this.Items(), function (item) {
            item.setCount(data);
        });
    }
});
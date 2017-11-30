Honeywell.ISP.Accordion.AccordionViewModel = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
    initializeViewModel: function (options) {
        this.bindAll('onItemSelect');
        this.initializeBinding(options);
    },
    initializeBinding: function (options) {
        this.model = new Honeywell.ISP.Accordion.AccordionModel();
        this.id = options.id;
        this.mode = options.mode;
        this.getAccordionItems(function () {
            this.getEntityCount();
        });
    },
    getAccordionItems: function (cb) {
        this.postDataRequest('/GetMenuItems', { id: this.id, mode: this.mode }, function (err, result) {
            if (!err && result && result.success) {
                this.model.dataSource(result.data);
                if (cb) { cb.call(this) }
            }
            else {
                this.ErrorMessage((result && result.errorMessage) || Resources.General_Error);
            }
        });
    },
    getEntityCount: function () {
        this.postDataRequest('/GetEntityCount', { id: this.id, mode: this.mode }, function (err, result) {
            if (!err && result && result.success) {
                this.model.setCount(result.data);
            }
            else {
                this.ErrorMessage((result && result.errorMessage) || Resources.General_Error);
            }
        });
    },
    onItemSelect: function (item) {
        var actions = [];
        switch (item.Name()) {
            case 'People|Groups':
                actions = ['28'];
                break;
        }
        Honeywell.ISP.Navigation.navigate(actions, Honeywell.ISP.Accordion.events.menu_item_selected, { mode: this.mode, id: this.id, action: item.Name(), entityCount: item.Count() });
    }
});
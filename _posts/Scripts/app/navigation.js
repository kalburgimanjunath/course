$(function () {
    var navigation = Honeywell.ISP.WebUIFramework.BaseViewModel.inherits({
        initializeViewModel: function () {
            this.actions = {};
        },
        getAction: function(actionName, cb) {
            if (!this.isActionLoaded(actionName)) {
                this.getPage('/GetPluginByAction', { actionName: actionName }, function (err, result) {
                    if (!err && result) {
                        cb.resolve(result);
                    }
                    else {
                        cb.reject(result);
                    }
                });
            }
            else {
                cb.resolve();
            }
        },
        loadActions: function(actionNames, cb) {
            if (actionNames && actionNames.length > 0) {
                blockUI();
                this.whenAll(actionNames.length, true, function (d, index) {
                    this.getAction(actionNames[index], d);
                }, function () {
                    unblockUI();
                    var args = Array.prototype.slice.call(arguments);
                    _.each(args, function (result, index) {
                        if (result) {
                            $('[data-action=' + actionNames[index] + ']').html(result);
                            this.actions[actionNames[index]] = true;
                        }
                    }, this);
                    if (cb) { cb.call(this); }
                }, function () {
                    unblockUI();
                });
            }
            else if(cb) {
                cb.call(this);
            }
        },
        isActionLoaded: function (actionName) {
            return !!this.actions[actionName];
        },
        navigate: function (actionNames, eventName, data) {
            this.loadActions(actionNames, function () {
                this.publish(eventName, data);
            })
        }
    });

    Honeywell.ISP.Navigation = new navigation({
        baseUrl: $('#navigationurl').data('url')
    });
});
(function (scope) {

    function define3rdPartyModules() {
        define('jquery', [], function () { return scope.jQuery; });
        define('ko', [], function () { return scope.ko; });
    }

    function loadPluginsAndBoot() {
        requirejs(['ko.bindingHandlers'], function () {

        });
    }

    define3rdPartyModules();
    loadPluginsAndBoot();

})(window);
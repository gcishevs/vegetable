var AdminApp;
(function (AdminApp) {
    var MenuItem = (function () {
        function MenuItem(name, displayName, url) {
            this.name = name;
            this.displayName = displayName;
            this.url = url;
        }
        return MenuItem;
    }());
    AdminApp.MenuItem = MenuItem;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=MenuItem.js.map
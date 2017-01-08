var AdminApp;
(function (AdminApp) {
    var BasePersonalInfo = (function () {
        function BasePersonalInfo(title, description, moniker, tags, email) {
            this.title = title;
            this.description = description;
            this.moniker = moniker;
            this.tags = tags;
            this.email = email;
        }
        return BasePersonalInfo;
    }());
    AdminApp.BasePersonalInfo = BasePersonalInfo;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=BasePersonalInfo.js.map
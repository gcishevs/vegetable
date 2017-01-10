var AdminApp;
(function (AdminApp) {
    var HolderInfo = (function () {
        function HolderInfo(title, description, moniker, tags, email, addresses, socialNetworks) {
            this.title = title;
            this.description = description;
            this.moniker = moniker;
            this.tags = tags;
            this.email = email;
            this.addresses = addresses;
            this.socialNetworks = socialNetworks;
        }
        return HolderInfo;
    }());
    AdminApp.HolderInfo = HolderInfo;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=HolderInfo.js.map
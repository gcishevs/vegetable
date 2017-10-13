var AdminApp;
(function (AdminApp) {
    var HolderInfo = (function () {
        function HolderInfo(holderId, title, description, moniker, tags, email, addresses
            //public socialNetworks: SocialNetwork[]
        ) {
            this.holderId = holderId;
            this.title = title;
            this.description = description;
            this.moniker = moniker;
            this.tags = tags;
            this.email = email;
            this.addresses = addresses;
        }
        return HolderInfo;
    }());
    AdminApp.HolderInfo = HolderInfo;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=HolderInfo.js.map
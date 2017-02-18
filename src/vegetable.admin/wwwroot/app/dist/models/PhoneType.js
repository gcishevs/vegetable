var AdminApp;
(function (AdminApp) {
    var PhoneTypeInfo = (function () {
        function PhoneTypeInfo(phoneType, displayName) {
            this.phoneType = phoneType;
            this.displayName = displayName;
        }
        return PhoneTypeInfo;
    }());
    AdminApp.PhoneTypeInfo = PhoneTypeInfo;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=PhoneType.js.map
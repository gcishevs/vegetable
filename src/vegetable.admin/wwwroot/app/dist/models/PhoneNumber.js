var AdminApp;
(function (AdminApp) {
    var PhoneNumber = (function () {
        function PhoneNumber(number, type) {
            this.number = number;
            this.type = type;
        }
        return PhoneNumber;
    }());
    AdminApp.PhoneNumber = PhoneNumber;
    (function (PhoneNumberType) {
        PhoneNumberType[PhoneNumberType["Classic"] = 1] = "Classic";
        PhoneNumberType[PhoneNumberType["Cell"] = 2] = "Cell";
    })(AdminApp.PhoneNumberType || (AdminApp.PhoneNumberType = {}));
    var PhoneNumberType = AdminApp.PhoneNumberType;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=PhoneNumber.js.map
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
    var PhoneNumberType;
    (function (PhoneNumberType) {
        PhoneNumberType[PhoneNumberType["Classic"] = 1] = "Classic";
        PhoneNumberType[PhoneNumberType["Cell"] = 2] = "Cell";
    })(PhoneNumberType = AdminApp.PhoneNumberType || (AdminApp.PhoneNumberType = {}));
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=PhoneNumber.js.map
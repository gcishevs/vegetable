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
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=PhoneNumber.js.map
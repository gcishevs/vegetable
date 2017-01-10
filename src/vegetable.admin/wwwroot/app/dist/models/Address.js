var AdminApp;
(function (AdminApp) {
    var Address = (function () {
        function Address(description, country, state, city, postalCode, street, unit, isPrimary, phoneNumbers) {
            this.description = description;
            this.country = country;
            this.state = state;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.unit = unit;
            this.isPrimary = isPrimary;
            this.phoneNumbers = phoneNumbers;
        }
        return Address;
    }());
    AdminApp.Address = Address;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=Address.js.map
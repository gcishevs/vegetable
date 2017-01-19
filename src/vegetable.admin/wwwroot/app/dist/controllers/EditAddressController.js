/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var EditAddressController = (function () {
        function EditAddressController($mdDialog, addressToEdit) {
            this.$mdDialog = $mdDialog;
            this.addressToEdit = addressToEdit;
            this.newAddress = null;
            if (addressToEdit) {
                this.newAddress =
                    {
                        city: addressToEdit.city,
                        country: addressToEdit.country,
                        street: addressToEdit.street,
                        state: addressToEdit.state,
                        description: addressToEdit.description,
                        unit: addressToEdit.unit,
                        postalCode: addressToEdit.postalCode,
                        phoneNumbers: [],
                        isPrimary: false
                    };
            }
            else {
                this.newAddress =
                    {
                        city: "",
                        country: "",
                        street: "",
                        state: "",
                        description: "",
                        unit: "",
                        postalCode: "",
                        phoneNumbers: [],
                        isPrimary: false
                    };
            }
        }
        EditAddressController.prototype.submitNewAddress = function () {
            this.$mdDialog.hide(this.newAddress);
        };
        EditAddressController.prototype.cancelEditAddress = function () {
            this.$mdDialog.cancel();
        };
        ;
        EditAddressController.$inject = ['$mdDialog', 'addressToEdit'];
        return EditAddressController;
    }());
    AdminApp.EditAddressController = EditAddressController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=EditAddressController.js.map
/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var EditAddressController = (function () {
        function EditAddressController($mdDialog, addressToEdit, yandexGeoService) {
            this.$mdDialog = $mdDialog;
            this.addressToEdit = addressToEdit;
            this.yandexGeoService = yandexGeoService;
            this.currentAddress = null;
            this.newCoordinates = null;
            this.phoneTypes = null;
            this.phoneTypes = [
                {
                    type: 1,
                    displayName: "classic"
                },
                {
                    type: 2,
                    displayName: "cell"
                },
            ];
            if (addressToEdit) {
                this.currentAddress =
                    {
                        city: addressToEdit.city,
                        country: addressToEdit.country,
                        street: addressToEdit.street,
                        state: addressToEdit.state,
                        description: addressToEdit.description,
                        unit: addressToEdit.unit,
                        postalCode: addressToEdit.postalCode,
                        phoneNumbers: addressToEdit.phoneNumbers || [],
                        points: addressToEdit.points
                    };
            }
            else {
                this.currentAddress =
                    {
                        city: "",
                        country: "",
                        street: "",
                        state: "",
                        description: "",
                        unit: "",
                        postalCode: "",
                        phoneNumbers: [],
                        points: ''
                    };
            }
        }
        EditAddressController.prototype.submitNewAddress = function (form) {
            var _this = this;
            if (this.isReadyToGetNewCoordinates(form)) {
                var query = "\u0433\u043E\u0440\u043E\u0434 " + this.currentAddress.city + ",+" + this.currentAddress.street + ",+" + this.currentAddress.unit;
                var coordinates = this.yandexGeoService.GetPointsByAddress(query).then(function (result) {
                    _this.currentAddress.points =
                        _this.processCoordinates(result);
                    _this.$mdDialog.hide(_this.currentAddress);
                });
            }
            else {
                this.$mdDialog.hide(this.currentAddress);
            }
        };
        EditAddressController.prototype.cancelEditAddress = function () {
            this.$mdDialog.cancel();
        };
        ;
        EditAddressController.prototype.addNewPhoneNumber = function () {
            var emptyPhone = {
                number: '',
                type: this.phoneTypes[0].type
            };
            this.currentAddress.phoneNumbers.push(emptyPhone);
        };
        EditAddressController.prototype.removeCurrentPhone = function (index) {
            this.currentAddress.phoneNumbers.splice(index, 1);
        };
        EditAddressController.prototype.isReadyToGetNewCoordinates = function (form) {
            if (!form)
                return false;
            var allElements = this.getElementsByAttribute('changePoints');
            for (var _i = 0, allElements_1 = allElements; _i < allElements_1.length; _i++) {
                var element = allElements_1[_i];
                var dirtyStatus = form[element.name].$dirty;
                if (dirtyStatus) {
                    return true;
                }
            }
            return false;
        };
        EditAddressController.prototype.getElementsByAttribute = function (attrName) {
            var matchingElements = [];
            var allElements = document.getElementsByTagName('input');
            for (var i = 0, n = allElements.length; i < n; i++) {
                if (allElements[i].getAttribute(attrName) !== null) {
                    matchingElements.push(allElements[i]);
                }
            }
            return matchingElements;
        };
        EditAddressController.prototype.processCoordinates = function (result) {
            if (result && result.data.response.GeoObjectCollection.featureMember.length > 0) {
                var newPoints = result.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                var pointsToReverseArray = newPoints.split(" ").reverse();
                if (pointsToReverseArray.length == 2) {
                    return pointsToReverseArray.join(",");
                }
            }
            return "0,0";
        };
        EditAddressController.$inject = ['$mdDialog', 'addressToEdit', 'yandexGeoService'];
        return EditAddressController;
    }());
    AdminApp.EditAddressController = EditAddressController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=EditAddressController.js.map
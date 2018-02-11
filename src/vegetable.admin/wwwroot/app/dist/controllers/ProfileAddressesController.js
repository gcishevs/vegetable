/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ProfileAddressesController = (function () {
        function ProfileAddressesController($mdDialog, holderService, mdDialogOption) {
            var _this = this;
            this.$mdDialog = $mdDialog;
            this.holderService = holderService;
            this.mdDialogOption = mdDialogOption;
            this.currentAddress = null;
            this.holderAddresses = [];
            this.holderService.GetCurrentHolder()
                .then(function (success) {
                _this.currentHolder = success;
                _this.holderAddresses = _this.currentHolder.addresses;
            });
        }
        ProfileAddressesController.prototype.showAddAddressDialog = function (ev) {
            var _this = this;
            this.$mdDialog.show(this.createDialogOption(ev, null)).then(function (answer) {
                _this.holderAddresses.push(answer);
                _this.currentHolder.addresses = _this.holderAddresses;
                _this.holderService.SaveHolder(_this.currentHolder);
            }, function () {
            });
        };
        ProfileAddressesController.prototype.showEditAddressDialog = function (ev, curAddress) {
            var _this = this;
            this.$mdDialog.show(this.createDialogOption(ev, curAddress))
                .then(function (answer) {
                curAddress.city = answer.city;
                curAddress.state = answer.state;
                curAddress.street = answer.street;
                curAddress.postalCode = answer.postalCode;
                curAddress.unit = answer.unit;
                curAddress.description = answer.description;
                curAddress.points = answer.points;
                curAddress.phoneNumbers = answer.phoneNumbers;
                _this.holderService.SaveHolder(_this.currentHolder);
            }, function () {
            });
        };
        ProfileAddressesController.prototype.cancelEditAddress = function () {
            this.$mdDialog.cancel();
        };
        ;
        ProfileAddressesController.prototype.createDialogOption = function (ev, currentAddress) {
            var option = {
                controller: 'editAddressController',
                controllerAs: 'editAddress',
                templateUrl: 'app/pages/personal_info/address/edit/editaddress.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                fullscreen: true,
                clickOutsideToClose: true,
                locals: {
                    addressToEdit: currentAddress
                }
            };
            return option;
        };
        ProfileAddressesController.prototype.processCoordinatePoints = function (points) {
            var result = points.split(",");
            return result;
        };
        ProfileAddressesController.prototype.removeAddress = function (index) {
            this.holderAddresses.splice(index, 1);
            this.currentHolder.addresses = this.holderAddresses;
            this.holderService.SaveHolder(this.currentHolder);
        };
        ProfileAddressesController.$inject = ['$mdDialog', 'holderService'];
        return ProfileAddressesController;
    }());
    AdminApp.ProfileAddressesController = ProfileAddressesController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProfileAddressesController.js.map
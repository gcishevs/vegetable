/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ProfileAddressesController = (function () {
        function ProfileAddressesController($mdDialog, mdDialogOption) {
            this.$mdDialog = $mdDialog;
            this.mdDialogOption = mdDialogOption;
            this.newAddress = null;
            this.fakeAddresses = [];
            this.map = null;
            this.marker = [];
            this.fakeAddresses = [
                {
                    description: 'Главный офис',
                    country: 'Россия',
                    state: 'Краснодарский край',
                    city: 'Краснодар',
                    postalCode: '350000',
                    street: 'ул.Уличная',
                    unit: 'дом 100, кв. 100',
                    isPrimary: true,
                    phoneNumbers: [
                        {
                            number: '+1234567800',
                            type: 2
                        },
                        {
                            number: '+3216548701',
                            type: 1
                        }
                    ]
                },
                {
                    description: 'Загородное отделение',
                    country: 'Россия',
                    state: 'Краснодарский край',
                    city: 'Станица Станичная',
                    postalCode: '351234',
                    street: 'ул.Загородноуличная',
                    unit: 'дом 100',
                    isPrimary: false,
                    phoneNumbers: [
                        {
                            number: '+1111111111',
                            type: 2
                        },
                        {
                            number: '+2222222222',
                            type: 2
                        }
                    ]
                }
            ];
            this.map = {
                center: [55.76, 37.64],
                zoom: 10
            };
            this.marker = [57.18, 35.55];
        }
        ProfileAddressesController.prototype.showAddAddressDialog = function (ev) {
            var _this = this;
            this.$mdDialog.show(this.createDialogOption(ev, null)).then(function (answer) {
                _this.fakeAddresses.push(answer);
            }, function () {
            });
        };
        ProfileAddressesController.prototype.showEditAddressDialog = function (ev, curAddress) {
            this.$mdDialog.show(this.createDialogOption(ev, curAddress))
                .then(function (answer) {
                curAddress.city = answer.city;
                curAddress.state = answer.state;
                curAddress.street = answer.street;
                curAddress.postalCode = answer.postalCode;
                curAddress.unit = answer.unit;
                curAddress.description = answer.description;
            }, function () {
            });
        };
        ProfileAddressesController.prototype.submitNewAddress = function () {
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
        ProfileAddressesController.prototype.removeAddress = function (index) {
            this.fakeAddresses.splice(index, 1);
        };
        return ProfileAddressesController;
    }());
    ProfileAddressesController.$inject = ['$mdDialog'];
    AdminApp.ProfileAddressesController = ProfileAddressesController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProfileAddressesController.js.map
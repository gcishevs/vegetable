/// <reference path="../_all.ts" />
var AdminApp;
(function (AdminApp) {
    var ProfileAddressesController = (function () {
        function ProfileAddressesController() {
            this.fakeAddresses = [];
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
                            type: 1
                        },
                        {
                            number: '+3216548701',
                            type: 2
                        }
                    ]
                },
                {
                    description: 'Загороднее отделение',
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
                            type: 1
                        },
                        {
                            number: '+2222222222',
                            type: 2
                        }
                    ]
                }
            ];
        }
        return ProfileAddressesController;
    }());
    AdminApp.ProfileAddressesController = ProfileAddressesController;
})(AdminApp || (AdminApp = {}));
//# sourceMappingURL=ProfileAddressesController.js.map
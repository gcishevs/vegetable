/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileAddressesController {

        newAddress: Address = null;
        fakeAddresses: Address[] = [];
        map: any = null;
        marker: any[] = [];

        static $inject = ['$mdDialog'];

        constructor(private $mdDialog: ng.material.MDDialogService, private mdDialogOption: ng.material.MDDialogOptions) {
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
                    phoneNumbers: 
                    [
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
                    phoneNumbers:
                    [
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
            ]        

            this.map = {
                center: [55.76, 37.64], // Москва
                zoom: 10
            };
            this.marker = [57.18, 35.55];
            
        }

        showAddAddressDialog(ev: MouseEvent): void {

            this.$mdDialog.show(this.createDialogOption(ev, null)).then((answer) => {
                this.fakeAddresses.push(answer);                    
                }, function () {
                    
                });
        }

        showEditAddressDialog(ev: MouseEvent, curAddress: Address): void {    
            this.$mdDialog.show(this.createDialogOption(ev, curAddress))
                .then((answer) => {
                    curAddress.city = answer.city;
                    curAddress.state = answer.state;
                    curAddress.street = answer.street;
                    curAddress.postalCode = answer.postalCode;
                    curAddress.unit = answer.unit;
                    curAddress.description = answer.description;
                }, function () {

                });
        }

        submitNewAddress(): void {
        }

        cancelEditAddress(): void {
            this.$mdDialog.cancel();
        };

        createDialogOption(ev: MouseEvent, currentAddress: Address): ng.material.MDDialogOptions {
            var option: ng.material.MDDialogOptions =
                {
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
        }

        removeAddress(index: number) {
            this.fakeAddresses.splice(index, 1);
        }
    }
}
/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileAddressesController {

        currentAddress: Address = null;
        holderAddresses: Address[] = [];
        currentHolder: HolderInfo;

        static $inject = ['$mdDialog', 'holderService'];

        constructor(private $mdDialog: ng.material.MDDialogService,
            private holderService: IHolderService,
            private mdDialogOption: ng.material.MDDialogOptions) {
            this.holderService.GetCurrentHolder()
                .then((success) => {
                    this.currentHolder = success;
                    this.holderAddresses = this.currentHolder.addresses;
                })
        }

        showAddAddressDialog(ev: MouseEvent): void {
            this.$mdDialog.show(this.createDialogOption(ev, null)).then((answer) => {
                this.holderAddresses.push(answer);
                this.currentHolder.addresses = this.holderAddresses;
                this.holderService.SaveHolder(this.currentHolder);
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
                    curAddress.points = answer.points;
                    curAddress.phoneNumbers = answer.phoneNumbers;
                    this.holderService.SaveHolder(this.currentHolder);
                }, function () {

                });
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

        private processCoordinatePoints(points: string): string[] {
            var result = points.split(",");
            return result;
        }

        removeAddress(index: number) {
            this.holderAddresses.splice(index, 1);
            this.currentHolder.addresses = this.holderAddresses;
            this.holderService.SaveHolder(this.currentHolder);

        }
    }
}
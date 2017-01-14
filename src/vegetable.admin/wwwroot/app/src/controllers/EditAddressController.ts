/// <reference path="../_all.ts" />
module AdminApp {
    export class EditAddressController {

        newAddress: Address = null;

        static $inject = ['$mdDialog', 'addressToEdit'];

        constructor(private $mdDialog: ng.material.MDDialogService, private addressToEdit: Address) {
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

        submitNewAddress(): void {
            this.$mdDialog.hide(this.newAddress);
        }

        cancelEditAddress(): void {
            this.$mdDialog.cancel();
        };
    }
}
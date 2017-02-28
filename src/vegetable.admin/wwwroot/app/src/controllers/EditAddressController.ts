/// <reference path="../_all.ts" />
module AdminApp {
    export class EditAddressController {

        currentAddress: Address = null;
        newCoordinates: number[] = null;
        phoneTypes: PhoneTypeInfo[] = null;

        static $inject = ['$mdDialog', 'addressToEdit', 'yandexGeoService'];

        constructor(private $mdDialog: ng.material.MDDialogService,
            private addressToEdit: Address,
            private yandexGeoService: IYandexGeoService) {
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

        submitNewAddress(form: ng.IFormController): void {
            if (this.isReadyToGetNewCoordinates(form)) {
                var query = `город ${this.currentAddress.city},+${this.currentAddress.street},+${this.currentAddress.unit}`;
                var coordinates = this.yandexGeoService.GetPointsByAddress(query).then((result: ng.IHttpPromiseCallbackArg<any>) => {
                    this.currentAddress.points =
                        this.processCoordinates(result);
                    this.$mdDialog.hide(this.currentAddress);
                });
            }
            else {
                this.$mdDialog.hide(this.currentAddress);
            }

        }

        cancelEditAddress(): void {
            this.$mdDialog.cancel();
        };

        addNewPhoneNumber(): void {
            var emptyPhone: PhoneNumber = {
                number: '',
                type: this.phoneTypes[0].type
            }
            this.currentAddress.phoneNumbers.push(emptyPhone);
        }

        removeCurrentPhone(index: number): void {
            this.currentAddress.phoneNumbers.splice(index, 1);
        }

        isReadyToGetNewCoordinates(form: ng.IFormController): boolean {
            if (!form)
                return false;

            var allElements = this.getElementsByAttribute('changePoints');
            for (var element of allElements) {
                var dirtyStatus = form[element.name].$dirty;
                if (dirtyStatus) {
                    return true;
                }
            }

            return false;
        }

        private getElementsByAttribute(attrName: string): HTMLInputElement[] {
            var matchingElements: HTMLInputElement[] = [];
            var allElements = document.getElementsByTagName('input');
            for (var i = 0, n = allElements.length; i < n; i++) {
                if (allElements[i].getAttribute(attrName) !== null) {
                    matchingElements.push(allElements[i]);
                }
            }
            return matchingElements;
        }

        private processCoordinates(result: any): string {
            if (result && result.data.response.GeoObjectCollection.featureMember.length > 0) {
                var newPoints = result.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                var pointsToReverseArray: any[] = newPoints.split(" ").reverse();
                if (pointsToReverseArray.length == 2) {
                    return pointsToReverseArray.join(",");
                }
            }
            return "0,0";
        }
    }
}
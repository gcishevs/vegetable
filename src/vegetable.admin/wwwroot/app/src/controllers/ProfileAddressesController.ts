/// <reference path="../_all.ts" />
module AdminApp {
    export class ProfileAddressesController {

        fakeAddresses: Address[] = [];
        map: any = null;
        marker: any[] = [];

        constructor() {
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
                    description: 'Загороднее отделение',
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
    }
}
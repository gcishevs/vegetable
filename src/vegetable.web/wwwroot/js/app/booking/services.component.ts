import { Component, OnInit } from '@angular/core';

import { BookingService } from './booking.service';

declare var $: any;


@Component({
    selector: 'pws-services',
    templateUrl: 'js/app/booking/services.component.html'
})

export class ServicesComponent {

    services: string[];
    errorMessage: string;

    constructor(private _bookingService: BookingService) { }

    ngOnInit(): void {
        this._bookingService.getServices()
            .subscribe(services => this.services = services,
                       error => this.errorMessage = <any> error)
    }

    nextStep(): void {
        $('#step2Title').trigger('click');
        $('#step2Title').removeClass('uk-disabled');
        $('#step2Container').removeClass('pws-disabled');
   }


}
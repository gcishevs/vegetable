import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BookingService } from './booking.service';

declare var $: any;


@Component({
    selector: 'pws-services',
    templateUrl: 'js/app/booking/services.component.html'
})

export class ServicesComponent {

    @Output() serviceClicked: EventEmitter<string> = new EventEmitter<string>();

    services: string[];
    errorMessage: string;
    selectedService: string;
   


    constructor(private _bookingService: BookingService) { }

    ngOnInit(): void {
        this._bookingService.getServices()
            .subscribe(services => this.services = services,
                       error => this.errorMessage = <any> error)
    }

    nextStep(service: string): void {
        this.selectedService = service;
        this.serviceClicked.emit(service);
        $('#step2Title').trigger('click');
        $('#step2Title').removeClass('uk-disabled');
        $('#step2Container').removeClass('pws-disabled');
   }


}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BookingService } from './booking.service';

declare var $: any;


@Component({
    selector: 'pws-confirmation',
    templateUrl: 'js/app/booking/confirmation.component.html'
})

export class ConfirmationComponent {

    constructor(private _bookingService: BookingService) { }

    ngOnInit(): void { }

}
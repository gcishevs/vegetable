import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from './customer';
import { DateTimeCustom } from './dateTimeCustom';

import { BookingService } from './booking.service';

declare var $: any;


@Component({
    selector: 'pws-confirmation',
    templateUrl: 'js/app/booking/confirmation.component.html'
})

export class ConfirmationComponent implements OnInit {

     @Input() service: string;
     @Input() dateTime: DateTimeCustom = { date: '', time: '' };
        
     customer: Customer = { firstName: '', lastName: '', email: '', phoneNumber: '' };
    
    constructor(private _bookingService: BookingService) { }

    ngOnInit(): void {
        this.dateTime = { date: '', time: '' };
    }

    book(): void {}


}
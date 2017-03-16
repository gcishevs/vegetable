import { Component, OnInit } from '@angular/core';

import { BookingService } from './booking.service';


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


}
import { Component } from '@angular/core';

@Component({
    selector: 'pws-wizard',
    templateUrl: 'js/app/booking/wizard.component.html'
})

export class WizardComponent {
    showNavigation: boolean = false;

    startBooking(): void {
        this.showNavigation = true;
    }
}
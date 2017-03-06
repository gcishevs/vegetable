import { Component } from '@angular/core';

@Component({
    selector: 'pws-wizard',
    templateUrl: 'js/app/booking/wizard.component.html'
})

export class WizardComponent {
    currentStep: number = 1;
    showNavigation: boolean = false;

    prevStep(): void {
        this.currentStep--;
    }

    nextStep(): void {
        this.currentStep++;
    }

    setClass(step: number): string {
        if (step == this.currentStep) return 'medium' + step;
        return '';
    }

    setIconClass(step: number): string {
        if (step <= this.currentStep) return '';
        return 'paso' + step;
    }

    setLabelClass(step: number): string {
        if (step == this.currentStep) return 'medium';
        return '';
    }


    startBooking(): void {
        this.showNavigation = true;
    }
}
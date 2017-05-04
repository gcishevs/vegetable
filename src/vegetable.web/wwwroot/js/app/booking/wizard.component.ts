import { Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'pws-wizard',
    templateUrl: 'js/app/booking/wizard.component.html'
})

export class WizardComponent {
    currentStep: number = 0;
    service: string;

    constructor() {
    }
    
    prevStep(): void {
        this.currentStep--;
    }

    nextStep(): void {
        this.currentStep++;
    }

    setClass(step: number): string {
        if (step == this.currentStep) return 'uk-open';
        return '';
    }

    onServiceClicked(message: string): void {
        this.service = message;
    }

    resetService(): void{
        this.service = "";
    }

}
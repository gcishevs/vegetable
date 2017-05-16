import { Component } from '@angular/core';
import { DateTimeCustom } from './dateTimeCustom';

declare var $: any;

@Component({
    selector: 'pws-wizard',
    templateUrl: 'js/app/booking/wizard.component.html'
})

export class WizardComponent {
    currentStep: number = 0;
    service: string;
    dateTime: DateTimeCustom; 

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

    onDateTimeSelected(message: DateTimeCustom): void {
        this.dateTime = message;
    }
    
    resetService(): void{
        this.service = "";
    }

    resetDateTime(): void {
        this.dateTime = null;
    }

}
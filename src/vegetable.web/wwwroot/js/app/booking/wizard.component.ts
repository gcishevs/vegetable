import { Component } from '@angular/core';

@Component({
    selector: 'pws-wizard',
    templateUrl: 'js/app/booking/wizard.component.html'
})

export class WizardComponent {
    currentStep: number = 1;
    
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
}
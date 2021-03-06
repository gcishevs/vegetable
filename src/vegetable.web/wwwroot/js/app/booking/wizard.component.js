"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WizardComponent = (function () {
    function WizardComponent() {
        this.currentStep = 0;
        this.dateTime = { date: '', time: '' };
    }
    WizardComponent.prototype.prevStep = function () {
        this.currentStep--;
    };
    WizardComponent.prototype.nextStep = function () {
        this.currentStep++;
    };
    WizardComponent.prototype.setClass = function (step) {
        if (step == this.currentStep)
            return 'uk-open';
        return '';
    };
    WizardComponent.prototype.onServiceClicked = function (message) {
        this.service = message;
    };
    WizardComponent.prototype.onDateTimeSelected = function (message) {
        this.dateTime = message;
    };
    WizardComponent.prototype.resetService = function () {
        this.service = "";
        this.dateTime = { date: '', time: '' };
        $('#step2Title').addClass('uk-disabled');
        $('#step2Container').addClass('pws-disabled');
        $('#step3Title').addClass('uk-disabled');
        $('#step3Container').addClass('pws-disabled');
    };
    WizardComponent.prototype.resetDateTime = function () {
        this.dateTime = { date: '', time: '' };
        $('#step3Title').addClass('uk-disabled');
        $('#step3Container').addClass('pws-disabled');
    };
    return WizardComponent;
}());
WizardComponent = __decorate([
    core_1.Component({
        selector: 'pws-wizard',
        templateUrl: 'js/app/booking/wizard.component.html'
    }),
    __metadata("design:paramtypes", [])
], WizardComponent);
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map
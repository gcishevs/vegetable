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
var core_1 = require('@angular/core');
var booking_service_1 = require('./booking.service');
var ServicesComponent = (function () {
    function ServicesComponent(_bookingService) {
        this._bookingService = _bookingService;
        this.serviceClicked = new core_1.EventEmitter();
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookingService.getServices()
            .subscribe(function (services) { return _this.services = services; }, function (error) { return _this.errorMessage = error; });
    };
    ServicesComponent.prototype.nextStep = function (service) {
        this.selectedService = service;
        this.serviceClicked.emit(service);
        $('#step2Title').trigger('click');
        $('#step2Title').removeClass('uk-disabled');
        $('#step2Container').removeClass('pws-disabled');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ServicesComponent.prototype, "serviceClicked", void 0);
    ServicesComponent = __decorate([
        core_1.Component({
            selector: 'pws-services',
            templateUrl: 'js/app/booking/services.component.html'
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map
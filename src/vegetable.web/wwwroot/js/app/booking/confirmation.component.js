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
var dateTimeCustom_1 = require("./dateTimeCustom");
var booking_service_1 = require("./booking.service");
var ConfirmationComponent = (function () {
    function ConfirmationComponent(_bookingService) {
        this._bookingService = _bookingService;
        this.dateTime = { date: '', time: '' };
        this.customer = { firstName: '', lastName: '', email: '', phoneNumber: '' };
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.dateTime = { date: '', time: '' };
    };
    ConfirmationComponent.prototype.book = function () { };
    return ConfirmationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ConfirmationComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", dateTimeCustom_1.DateTimeCustom)
], ConfirmationComponent.prototype, "dateTime", void 0);
ConfirmationComponent = __decorate([
    core_1.Component({
        selector: 'pws-confirmation',
        templateUrl: 'js/app/booking/confirmation.component.html'
    }),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], ConfirmationComponent);
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map
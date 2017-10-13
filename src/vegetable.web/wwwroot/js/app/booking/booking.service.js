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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var BookingService = (function () {
    function BookingService(_http) {
        this._http = _http;
        this._servicesUrl = 'api/booking/services';
        this._timeAvailabilityUrl = 'api/booking/timeAvailabilty';
    }
    BookingService.prototype.getServices = function () {
        return this._http.get(this._servicesUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookingService.prototype.getMonthAvailableTime = function (service, year, month) {
        var params = new http_1.URLSearchParams();
        params.set('service', service);
        params.set('year', year.toString());
        params.set('month', month.toString());
        return this._http.get(this._timeAvailabilityUrl, { search: params })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookingService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return BookingService;
}());
BookingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map
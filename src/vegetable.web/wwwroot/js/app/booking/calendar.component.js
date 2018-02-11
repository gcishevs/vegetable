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
var CalendarComponent = (function () {
    function CalendarComponent() {
        this.calendar = { firstWeek: [], secondWeek: [], thirdWeek: [], fourthWeek: [], fifthWeek: [], sixthWeek: [] };
        moment.locale('en');
        this._monthsArray = moment.months();
        this._monthsShortArray = moment.monthsShort();
        this.year = moment().year();
        this.month = moment().month();
        this.date = moment().date();
        this.monthShort = this._monthsShortArray[this.month];
        this.weekArray = moment.weekdays();
        this.weekDay = this.weekArray[moment(this.year + "-" + (this.month + 1) + "-" + this.date, "YYYY-MM-DD").day()];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.fillCalendar();
    };
    CalendarComponent.prototype.ngOnChanges = function () {
    };
    CalendarComponent.prototype.initMonthYear = function () {
        this.monthFull = this._monthsArray[this.month];
        this._daysInMonth = moment(this.year + "-" + (this.month + 1), "YYYY-MM").daysInMonth();
        this._startOfMonth = moment(this.year + "-" + (this.month + 1), "YYYY-MM").startOf('month').day();
    };
    CalendarComponent.prototype.fillCalendar = function () {
        this.clearCalendar();
        this.initMonthYear();
        var daysInWeek = 7;
        var monthShift = daysInWeek - this._startOfMonth;
        this.fillWeek(this._startOfMonth, 1, monthShift, this.calendar.firstWeek);
        this.fillWeek(0, (monthShift + 1), (monthShift + daysInWeek), this.calendar.secondWeek);
        this.fillWeek(0, (monthShift + 1 + daysInWeek), (monthShift + 2 * daysInWeek), this.calendar.thirdWeek);
        this.fillWeek(0, (monthShift + 1 + 2 * daysInWeek), (monthShift + 3 * daysInWeek), this.calendar.fourthWeek);
        this.fillWeek(0, (monthShift + 1 + 3 * daysInWeek), (monthShift + 4 * daysInWeek), this.calendar.fifthWeek);
        this.fillWeek(0, (monthShift + 1 + 4 * daysInWeek), (monthShift + 5 * daysInWeek), this.calendar.sixthWeek);
    };
    CalendarComponent.prototype.fillWeek = function (firstDay, start, end, week) {
        for (var i = start; i <= end; i++) {
            if (i > this._daysInMonth) {
                return;
            }
            week[firstDay] = i;
            firstDay++;
        }
    };
    CalendarComponent.prototype.clearCalendar = function () {
        this.calendar.firstWeek.length = 0;
        this.calendar.secondWeek.length = 0;
        this.calendar.thirdWeek.length = 0;
        this.calendar.fourthWeek.length = 0;
        this.calendar.fifthWeek.length = 0;
        this.calendar.sixthWeek.length = 0;
    };
    CalendarComponent.prototype.nextMonth = function () {
        if (this.month == 11) {
            this.month = 0;
            this.year += 1;
        }
        else {
            this.month += 1;
        }
        this.fillCalendar();
    };
    CalendarComponent.prototype.previousMonth = function () {
        if (this.month == 0) {
            this.month = 11;
            this.year -= 1;
        }
        else {
            this.month -= 1;
        }
        this.fillCalendar();
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'pws-calendar',
            templateUrl: 'js/app/booking/calendar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map
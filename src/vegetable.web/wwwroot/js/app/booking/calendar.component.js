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
var dateTimeCustom_1 = require('./dateTimeCustom');
var CalendarComponent = (function () {
    function CalendarComponent(_bookingService) {
        this._bookingService = _bookingService;
        this.dateTimeSelected = new core_1.EventEmitter();
        this.times = {};
        this.calendar = { firstWeek: [], secondWeek: [], thirdWeek: [], fourthWeek: [], fifthWeek: [], sixthWeek: [] };
        this.calendarAvailability = { firstWeekClasses: [], secondWeekClasses: [], thirdWeekClasses: [], fourthWeekClasses: [], fifthWeekClasses: [], sixthWeekClasses: [] };
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
    };
    CalendarComponent.prototype.ngOnChanges = function (changes) {
        if (changes["service"] && this.service) {
            this.getMonthAvailabilityTime();
        }
    };
    CalendarComponent.prototype.getMonthAvailabilityTime = function () {
        var _this = this;
        this._bookingService.getMonthAvailableTime(this.service, this.year, this.month)
            .subscribe(function (times) { return _this.times = times; }, function (error) { return _this.errorMessage = error; }, function () { return _this.fillCalendar(); });
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
        this.fillWeek(this._startOfMonth, 1, monthShift, this.calendar.firstWeek, this.calendarAvailability.firstWeekClasses);
        this.fillWeek(0, (monthShift + 1), (monthShift + daysInWeek), this.calendar.secondWeek, this.calendarAvailability.secondWeekClasses);
        this.fillWeek(0, (monthShift + 1 + daysInWeek), (monthShift + 2 * daysInWeek), this.calendar.thirdWeek, this.calendarAvailability.thirdWeekClasses);
        this.fillWeek(0, (monthShift + 1 + 2 * daysInWeek), (monthShift + 3 * daysInWeek), this.calendar.fourthWeek, this.calendarAvailability.fourthWeekClasses);
        this.fillWeek(0, (monthShift + 1 + 3 * daysInWeek), (monthShift + 4 * daysInWeek), this.calendar.fifthWeek, this.calendarAvailability.fifthWeekClasses);
        this.fillWeek(0, (monthShift + 1 + 4 * daysInWeek), (monthShift + 5 * daysInWeek), this.calendar.sixthWeek, this.calendarAvailability.sixthWeekClasses);
    };
    CalendarComponent.prototype.fillWeek = function (firstDay, start, end, week, classes) {
        for (var i = start; i <= end; i++) {
            if (i > this._daysInMonth) {
                return;
            }
            week[firstDay] = i;
            classes[i] = this.getAvailability(i);
            firstDay++;
        }
    };
    CalendarComponent.prototype.clearCalendar = function () {
        this.calendar = { firstWeek: [], secondWeek: [], thirdWeek: [], fourthWeek: [], fifthWeek: [], sixthWeek: [] };
    };
    CalendarComponent.prototype.getAvailability = function (day) {
        var result = this.times[day].availableTime.length * 100 / +this.times[day].count;
        var classT = '';
        if (result === 0) {
            classT = 'busy-unavailable';
        }
        else if (result >= 25 && result < 50) {
            classT = 'busy-qr';
        }
        else if (result >= 50 && result < 75) {
            classT = 'busy-half';
        }
        else if (result >= 75 && result < 100) {
            classT = 'busy-thqr';
        }
        else {
            classT = '';
        }
        return classT;
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
        this.getMonthAvailabilityTime();
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
        this.getMonthAvailabilityTime();
    };
    CalendarComponent.prototype.daySelected = function (day) {
        this.selectedDate = moment(this.year + "-" + (this.month + 1) + "-" + day, "YYYY-MM-DD");
        this.selectedDateUI = this.weekArray[this.selectedDate.day()] + ', ' + this.monthFull + ' ' + day + ', ' + this.year;
        this.availableTime = this.times[day.toString()].availableTime;
    };
    CalendarComponent.prototype.nextStep = function (time) {
        this.selectedTime = time;
        var dateTime = new dateTimeCustom_1.DateTimeCustom();
        dateTime.date = this.selectedDateUI;
        dateTime.time = time;
        this.dateTimeSelected.emit(dateTime);
        $('#step3Title').trigger('click');
        $('#step3Title').removeClass('uk-disabled');
        $('#step3Container').removeClass('pws-disabled');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalendarComponent.prototype, "service", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CalendarComponent.prototype, "dateTimeSelected", void 0);
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'pws-calendar',
            templateUrl: 'js/app/booking/calendar.component.html'
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map
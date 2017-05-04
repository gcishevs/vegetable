import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { BookingService } from './booking.service';
import { Calendar } from './calendar';
import { ITimeResult } from './timeResult';
declare var moment: any;

@Component({
    selector: 'pws-calendar',
    templateUrl: 'js/app/booking/calendar.component.html'
})

export class CalendarComponent implements OnInit, OnChanges {
    @Input() service: string;

    private _monthsArray: string[];
    private _monthsShortArray: string[];
    private _daysInMonth: number;
    private _startOfMonth: number;      
    year: number;
    month: number;
    date: string;
    weekArray: string[];
    weekDay: string;
    monthShort: string;
    monthFull: string;
    selectedDate: any;
    selectedDateUI: string;
    availableTime: string[];
    errorMessage: string;

    times: { [id: string]: ITimeResult; } = {};

    calendar: Calendar = { firstWeek: [], secondWeek: [], thirdWeek: [], fourthWeek: [], fifthWeek: [], sixthWeek: [] }


    constructor(private _bookingService: BookingService) {
        moment.locale('en');
        this._monthsArray = moment.months();
        this._monthsShortArray = moment.monthsShort()
        this.year = moment().year();
        this.month = moment().month();
        this.date = moment().date();
        this.monthShort = this._monthsShortArray[this.month]
        this.weekArray = moment.weekdays();
        this.weekDay = this.weekArray[moment(this.year + "-" + (this.month + 1) + "-" + this.date, "YYYY-MM-DD").day()];
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["service"] && this.service) {           
            this.getMonthAvailabilityTime();
        }
    }

    private getMonthAvailabilityTime(): void {
        this._bookingService.getMonthAvailableTime(this.service, this.year, this.month)
            .subscribe(times => this.times = times,
            error => this.errorMessage = <any>error,
            () => this.fillCalendar())
    }

    private initMonthYear(): void {
        this.monthFull = this._monthsArray[this.month];
        this._daysInMonth = moment(this.year + "-" + (this.month + 1), "YYYY-MM").daysInMonth();
        this._startOfMonth = moment(this.year + "-" + (this.month + 1), "YYYY-MM").startOf('month').day();
    }

    private fillCalendar(): void {
        this.clearCalendar();
        this.initMonthYear();

        var daysInWeek: number = 7;
        var monthShift: number = daysInWeek - this._startOfMonth;
             
        this.fillWeek(this._startOfMonth, 1, monthShift, this.calendar.firstWeek);
        this.fillWeek(0, (monthShift + 1), (monthShift + daysInWeek), this.calendar.secondWeek)
        this.fillWeek(0, (monthShift + 1 + daysInWeek), (monthShift + 2 * daysInWeek), this.calendar.thirdWeek)
        this.fillWeek(0, (monthShift + 1 + 2 * daysInWeek), (monthShift + 3 * daysInWeek), this.calendar.fourthWeek)
        this.fillWeek(0, (monthShift + 1 + 3 * daysInWeek), (monthShift + 4 * daysInWeek), this.calendar.fifthWeek)
        this.fillWeek(0, (monthShift + 1 + 4 * daysInWeek), (monthShift + 5 * daysInWeek), this.calendar.sixthWeek)
    }

    private fillWeek(firstDay: number, start: number, end: number, week: number[]): void {
        for (var i = start; i <= end; i++) {
            if (i > this._daysInMonth) {
                return;
            }
            week[firstDay] = i;      
            firstDay++;
        }

    }

    private clearCalendar(): void {
        this.calendar = { firstWeek: [], secondWeek: [], thirdWeek: [], fourthWeek: [], fifthWeek: [], sixthWeek: [] };
    }

    getAvailability(day: number): string {
            var result = this.times[day].availableTime.length * 100 / +this.times[day].count
            var classT = '';
            if (result === 0) { classT = 'busy-unavailable' }
            else if (result >= 25 && result < 50) { classT = 'busy-qr' }
            else if (result >= 50 && result < 75) { classT = 'busy-half'}
            else if (result >= 75 && result < 100) { classT = 'busy-thqr'}
            else { classT = '' }

            return classT;
    }

    nextMonth(): void {
        if (this.month == 11) {
            this.month = 0;
            this.year += 1;            
        }
        else {
            this.month += 1;
        }
        this.fillCalendar();
        this.getMonthAvailabilityTime();
    }

    previousMonth(): void {
        if (this.month == 0) {
            this.month = 11;
            this.year -= 1;
        }
        else {
            this.month -= 1;
        }
        this.fillCalendar();
        this.getMonthAvailabilityTime();
    }

    daySelected(day: number): void {
        this.selectedDate = moment(this.year + "-" + (this.month + 1) + "-" + day, "YYYY-MM-DD");
        this.selectedDateUI = this.weekArray[this.selectedDate.day()] + ', ' + this.monthFull + ' ' + day + ', ' + this.year;
        this.availableTime = this.times[day.toString()].availableTime;
    }
}
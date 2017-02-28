import { Component, OnInit, OnChanges } from '@angular/core';
import { ICalendar } from './calendar'
declare var moment: any;

@Component({
    selector: 'pws-calendar',
    templateUrl: 'js/app/booking/calendar.component.html'
})

export class CalendarComponent implements OnInit, OnChanges {
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
    
    calendar: ICalendar = { firstWeek: [], secondWeek: [], thirdWeek: [], fourthWeek: [], fifthWeek: [], sixthWeek: [] }


    constructor() {
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
        this.fillCalendar();
    }

    ngOnChanges(): void {

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
        this.calendar.firstWeek.length = 0;
        this.calendar.secondWeek.length = 0;
        this.calendar.thirdWeek.length = 0;
        this.calendar.fourthWeek.length = 0;
        this.calendar.fifthWeek.length = 0;
        this.calendar.sixthWeek.length = 0;
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
    }
}
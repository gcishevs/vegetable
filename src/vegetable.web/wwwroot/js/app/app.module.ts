import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CalendarComponent } from './booking/calendar.component';
import { ServicesComponent } from './booking/services.component';
import { WizardComponent } from './booking/wizard.component';
import { BookingService } from './booking/booking.service';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, CalendarComponent, ServicesComponent, WizardComponent],
    providers: [BookingService],
    bootstrap: [AppComponent]
})

export class AppModule { }

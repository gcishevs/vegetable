import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './booking/calendar.component';
import { ServicesComponent } from './booking/services.component';
import { WizardComponent } from './booking/wizard.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, CalendarComponent, ServicesComponent, WizardComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }

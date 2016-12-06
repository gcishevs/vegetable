import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PersonalInfoComponent } from './components/personalinfo/personalinfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTypeaheadBasic } from './components/typeahead/typeahead.component';
import { RlTagInputModule } from 'angular2-tag-input';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        PersonalInfoComponent,
        HomeComponent,
        NgbdTypeaheadBasic
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        NgbModule.forRoot(),
        FormsModule,
        RlTagInputModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'personal-info', component: PersonalInfoComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}

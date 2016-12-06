import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'personalInfo',
    template: require('./personalinfo.component.html')
})

export class PersonalInfoComponent {
    public model: string;

    //TODO: need to create new special component for Tag
    public autocompleteTags = [];
    public autocompleteItems = [
        'Haircut',
        'Needlework',
        'Medicine',
        'Manicure',
        'Sport'
    ];
}

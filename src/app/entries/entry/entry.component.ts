import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.css']
})
export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular_Basics';
    description: string = 'A description of my first photo.';
    comments: any[] = [
        {name: 'Lunchbox', text: 'This is great!'},
        {name: 'Ziggy', text: 'This is medium!'},
        {name: 'Hemingway', text: 'I don\'t like.'}
    ]
}
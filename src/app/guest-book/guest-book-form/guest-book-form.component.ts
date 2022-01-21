import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createGuestInvite } from '../state/actions/guest-book-page.actions';

@Component({
    selector: 'app-guest-book-form',
    templateUrl: './guest-book-form.component.html',
    styleUrls: ['./guest-book-form.component.scss']
})
export class GuestBookFormComponent  {

    guestBookForm = new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl(''),
        author: new FormControl(''),
    })

    constructor(private store: Store) { }

    onSubmit(){
        this.store.dispatch(createGuestInvite({guestInvite: this.guestBookForm.value}));
    }
};
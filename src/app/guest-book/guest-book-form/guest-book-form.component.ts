import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createGuestInvite } from '../state/actions/guest-book-page.actions';

@Component({
    selector: 'app-guest-book-form',
    templateUrl: './guest-book-form.component.html',
    styleUrls: ['./guest-book-form.component.scss']
})
export class GuestBookFormComponent {

    name: FormControl = new FormControl('');
    surname: FormControl = new FormControl('');
    email: FormControl = new FormControl('');
    message: FormControl = new FormControl('', [
        Validators.required, Validators.minLength(20)
    ]);
    author: FormControl = new FormControl('', [
        Validators.required
    ]);

    guestBookForm = new FormGroup({
        name: this.name,
        surname: this.surname,
        email: this.email,
        message: this.message,
        author: this.author
    })

    constructor(private store: Store) { }

    onSubmit() {
        this.guestBookForm.valid && this.store.dispatch(createGuestInvite({ guestInvite: this.guestBookForm.value }));
    }

    getErrorMessage(field: FormControl): string {
        if (field.hasError('required')) {
            return 'You must enter the value.'
        }

        if (field.hasError('minlength')) {
            return `Min length is ${field.errors!['minlength'].requiredLength} letters.`
        }

        return 'Field is invalid.'
    }
};
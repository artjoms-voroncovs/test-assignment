import { guestBookReducer } from './state/guest-book-reducer';
import { NgModule } from "@angular/core";
import { GuestBookRoutingModule } from './guest-book-routing.module';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { GuestBookComponent } from './guest-book.component';
import { GuestBookFormComponent } from './guest-book-form/guest-book-form.component';
import { GuestListComponent } from './guest-list/guest-list.component';

@NgModule({
    declarations: [
        GuestBookComponent,
        GuestBookFormComponent,
        GuestListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        GuestBookRoutingModule,
        StoreModule.forFeature('guest-book', guestBookReducer),
    ]
})
export class GuestBookModule {}
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestInvite } from '../state/shared/types';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: GuestInvite ,
    ) { }

    close(): void {
        this.dialogRef.close();
    }
}
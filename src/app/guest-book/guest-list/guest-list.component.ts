import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { GuestInvite } from '../state/shared/types';
import { selectGuestInvites } from '../state/selectors/guest-book.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-guest-list',
    templateUrl: './guest-list.component.html',
    styleUrls: ['./guest-list.component.scss'],
})
export class GuestListComponent implements OnInit, AfterViewInit, OnDestroy {

    guestsInvites$!: Observable<GuestInvite[]>
    guestsInvites!: GuestInvite[];
    displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'author'];
    dataSource!: MatTableDataSource<GuestInvite>;
    guestsInvitesSubscription!: Subscription

    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private store: Store,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.guestsInvites$ = this.store.select(selectGuestInvites);

        this.guestsInvitesSubscription = this.guestsInvites$.subscribe((invites: GuestInvite[]) => {
            this.guestsInvites = invites;
            this.dataSource = new MatTableDataSource<GuestInvite>(invites);
            this.dataSource.sort = this.sort;
        })
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    ngOnDestroy(){
        this.guestsInvitesSubscription.unsubscribe();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(inviteId: number): void {
        this.dialog.open(DialogComponent, {
            width: '700px',
            data: this.guestsInvites.find((invite: GuestInvite) => inviteId === invite.id)
        })
    }
}
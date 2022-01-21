import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { GuestInvite } from '../state/shared/types';
import { selectGuestInvites } from '../state/selectors/guest-book.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-guest-list',
    templateUrl: './guest-list.component.html',
    styleUrls: ['./guest-list.component.scss'],
})
export class GuestListComponent implements OnInit, AfterViewInit {

    guestsInvites$!: Observable<GuestInvite[]>
    displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'author'];
    dataSource!: MatTableDataSource<GuestInvite>;

    @ViewChild(MatSort) sort!: MatSort;
    
    constructor(private store: Store) { }

    ngOnInit() {
        this.guestsInvites$ = this.store.select(selectGuestInvites);

        this.guestsInvites$.subscribe((invites: GuestInvite[]) => {
            this.dataSource = new MatTableDataSource<GuestInvite>(invites);
        })
    }

    ngAfterViewInit(){
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event){
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
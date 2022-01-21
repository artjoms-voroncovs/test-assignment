import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GuestBookState } from '../guest-book-reducer';

const selectGuestBookFeatureSelector = createFeatureSelector<GuestBookState>('guest-book');

export const selectGuestInvites = createSelector(
    selectGuestBookFeatureSelector,
    (store: GuestBookState) => {
        return store.guestInvites;
    }
)
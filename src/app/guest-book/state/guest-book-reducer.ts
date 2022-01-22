import { GuestInvite } from './shared/types';
import { createReducer, on } from '@ngrx/store';
import { guestBookPageActions } from './actions';

export interface GuestBookState {
    guestInvites: GuestInvite[]
};

export const initialState: GuestBookState = {
    guestInvites: []
};

export const guestBookReducer = createReducer(
    initialState, on(guestBookPageActions.createGuestInvite, (state, action): GuestBookState => {
        // Increment id value
        const guestInvite: GuestInvite = {
            ...action.guestInvite,
            id: state.guestInvites.length ? state.guestInvites[state.guestInvites.length - 1].id + 1 : 0
        }
        return {
            ...state,
            guestInvites: [...state.guestInvites, guestInvite]
        }
    })
)
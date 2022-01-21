import { GuestInvite } from './shared/types';
import { createReducer, on } from '@ngrx/store';
import { guestBookPageActions } from './actions';

export interface GuestBookState {
    guestInvites: GuestInvite[]
};

const initialState: GuestBookState = {
    guestInvites: [
        {
            name: 'atest',
            surname: 'test',
            email: 'test',
            message: 'test',
            author: 'test',
            id: 0,
        },
        {
            name: 'ctest',
            surname: 'test',
            email: 'test',
            message: 'test',
            author: 'test',
            id: 1,
        },
        {
            name: 'btest',
            surname: 'test',
            email: 'test',
            message: 'test',
            author: 'test',
            id: 2,
        }
    ]
};

export const guestBookReducer = createReducer(
    initialState, on(guestBookPageActions.createGuestInvite, (state, action): GuestBookState => {
        // Increment id value
        const guestInvite: GuestInvite = {
            ...action.guestInvite,
            id: state.guestInvites[state.guestInvites.length - 1].id + 1
        }
        return {
            ...state,
            guestInvites: [...state.guestInvites, guestInvite]
        }
    })
)
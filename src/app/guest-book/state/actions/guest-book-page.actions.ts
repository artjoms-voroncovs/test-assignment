import { createAction, props } from '@ngrx/store';
import { GuestInvite } from '../shared/types';

export const createGuestInvite = createAction('[Guest Book] Create guest invite', props<{ guestInvite: GuestInvite }>());
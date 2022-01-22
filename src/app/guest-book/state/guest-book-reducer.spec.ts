import * as fromReducer from './guest-book-reducer';
import { createGuestInvite } from './actions/guest-book-page.actions';

describe('guestBookReducer', () => {
    describe('unknown action', () => {
        it('Should return default state', () => {
            const { initialState } = fromReducer;
            const action = {
                type: 'Unknown'
            };

            const state = fromReducer.guestBookReducer(initialState, action);

            expect(state).toBe(initialState);
        })
    })

    describe('createGuestInvite action', () => {
        it('Should create guest invite and increment id for each new guest invite', () => {
            const { initialState } = fromReducer;
            const action = createGuestInvite({
                guestInvite: {
                    name: 'atest',
                    surname: 'test',
                    email: 'test',
                    message: 'test',
                    author: 'test',
                    id: 0,
                }
            })

            const state = fromReducer.guestBookReducer(initialState, action);
            const state2 = fromReducer.guestBookReducer(state, action);


            expect(state.guestInvites[0].id).toBe(0);
            expect(state2.guestInvites[1].id).toBe(1);
        })
    })

})
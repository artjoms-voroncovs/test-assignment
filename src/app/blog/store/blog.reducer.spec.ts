import { loadPostsSuccess, loadPostsFailure, loadCommentsFailure, loadCommentsSuccess } from './actions/blog-api.actions';
import { loadPosts, selectPost, clearSelectedPost, loadComments } from './actions/blog-page.actions';
import * as fromReducer from './blog.reducer';

describe('blogReducer', () => {
    describe('unknown action', () => {
        it('Should return default state', () => {
            const { initialState } = fromReducer;
            const action = {
                type: 'Unknown'
            };

            const state = fromReducer.blogReducer(initialState, action);

            expect(state).toBe(initialState);
        })
    })

    describe('loadPosts action', () => {
        it('Should set posts loading value to true', () => {
            const { initialState } = fromReducer;

            const state = fromReducer.blogReducer(initialState, loadPosts);

            expect(state.postsLoading).toBe(true);
        })
    })

    describe('loadPostsSuccess action', () => {
        it('Should set new posts and posts loading value to false', () => {
            const { initialState } = fromReducer;
            const action = loadPostsSuccess({
                posts: [
                    {
                        userId: 0,
                        id: 0,
                        title: 'New post title',
                        body: 'New post body'
                    }
                ]
            });

            const state = fromReducer.blogReducer(initialState, action);

            expect(state.posts[0].title).toBe('New post title');
            expect(state.postsLoading).toBe(false);
        })
    })


    describe('loadPostsFailure action', () => {
        it('Should set new error and posts loading value to false', () => {
            const { initialState } = fromReducer;
            const action = loadPostsFailure({ error: 'Something went wrong' });

            const state = fromReducer.blogReducer(initialState, action);

            expect(state.error).toBe('Something went wrong');
            expect(state.postsLoading).toBe(false);
        })
    })

    describe('selectPost action', () => {
        it('Should set currentPostId', () => {
            const { initialState } = fromReducer;

            const action = selectPost({ currentPostId: 0 });
            const state = fromReducer.blogReducer(initialState, action);

            expect(state.currentPostId).toBe(0);
        })
    })

    describe('clearSelectedPost action', () => {
        it('Should set currentPostId', () => {
            const { initialState } = fromReducer;
            const stateWithCurrentPostId = {
                ...initialState,
                currentPostId: 1
            }

            const state = fromReducer.blogReducer(stateWithCurrentPostId, clearSelectedPost);

            expect(state.currentPostId).toBe(null);
        })
    })

    describe('loadComments action', () => {
        it('Should set posts loading value to true', () => {
            const { initialState } = fromReducer;

            const state = fromReducer.blogReducer(initialState, loadComments);

            expect(state.commentsLoading).toBe(true);
        })
    })

    describe('loadCommentsSuccess action', () => {
        it('Should set new posts and posts loading value to false', () => {
            const { initialState } = fromReducer;
            const action = loadCommentsSuccess({
                comments: [
                    {
                        postId: 1,
                        name: 'John',
                        email: 'john@mail.com',
                        body: 'New comment'
                    }
                ]
            });

            const state = fromReducer.blogReducer(initialState, action);

            expect(state.comments[0].body).toBe('New comment');
            expect(state.commentsLoading).toBe(false);
        })
    })

    describe('loadCommentsFailure action', () => {
        it('Should set new error and posts loading value to false', () => {
            const { initialState } = fromReducer;
            const action = loadCommentsFailure({ error: 'Something went wrong' });

            const state = fromReducer.blogReducer(initialState, action);

            expect(state.error).toBe('Something went wrong');
            expect(state.commentsLoading).toBe(false);
        })
    })

});

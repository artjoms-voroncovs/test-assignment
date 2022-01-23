import { createReducer, on } from '@ngrx/store';
import { blogApiActions, blogPageActions } from './actions'
import { Post, Comment } from './shared/types';


export interface BlogState {
    posts: Post[]
    comments: Comment[]
    currentPostId: number | null,
    commentsLoading: boolean
    postsLoading: boolean,
    error: string
}

export const initialState: BlogState = {
    posts: [],
    comments: [],
    currentPostId: null,
    postsLoading: false,
    commentsLoading: false,
    error: ''
}

export const blogReducer = createReducer<BlogState>(
    initialState,
    on(blogPageActions.loadPosts, (state): BlogState => {
        return {
            ...state,
            postsLoading: true
        }
    }),
    on(blogApiActions.loadPostsSuccess, (state, action): BlogState => {
        return {
            ...state,
            posts: [
                ...action.posts
            ],
            postsLoading: false
        }
    }),
    on(blogApiActions.loadPostsFailure, (state, action): BlogState => {
        return {
            ...state,
            postsLoading: false,
            error: action.error
        }
    }),
    on(blogPageActions.selectPost, (state, action): BlogState => {
        return {
            ...state,
            currentPostId: action.currentPostId
        }
    }),
    on(blogPageActions.clearSelectedPost, (state): BlogState => {
        return {
            ...state,
            currentPostId: null
        }
    }),
    on(blogPageActions.loadComments, (state): BlogState => {
        return {
            ...state,
            commentsLoading: true
        }
    }),
    on(blogApiActions.loadCommentsSuccess, (state, action): BlogState => {
        return {
            ...state,
            comments: action.comments,
            commentsLoading: false
        }
    }),
    on(blogApiActions.loadCommentsFailure, (state, action): BlogState => {
        return {
            ...state,
            commentsLoading: false,
            error: action.error
        }
    }),
    on(blogPageActions.clearComments, (state, action): BlogState => {
        return {
            ...state,
            comments: []
        }
    })
);
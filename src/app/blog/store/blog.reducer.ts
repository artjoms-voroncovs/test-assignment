import { createReducer, on } from '@ngrx/store';
import { blogApiActions } from './actions'
import { Post, Comment } from './shared/types';


export interface BlogState {
    posts: Post[]
    comments: Comment[]
    currentPostId: number | null
}

const initialState: BlogState = {
    posts: [],
    comments: [],
    currentPostId: null
}

export const blogReducer = createReducer<BlogState>(
    initialState,
    on(blogApiActions.loadPostsSuccess, (state, action): BlogState => {
        return {
            ...state,
            posts: [
                ...action.posts
            ]
        }
    })
);
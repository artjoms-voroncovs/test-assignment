import { createAction, props } from '@ngrx/store';
import { Post, Comment } from '../shared/types';

export const loadPostsSuccess = createAction('[Blog] Load posts success', props<{posts: Post[]}>());
export const loadPostsFailure = createAction('[Blog] Load posts failure', props<{error: any}>());
export const loadCommentsSuccess = createAction('[Blog] Load comments success', props<{comments: Comment[]}>());
export const loadCommentsFailure = createAction('[Blog] Load comments failure', props<{error: any}>());
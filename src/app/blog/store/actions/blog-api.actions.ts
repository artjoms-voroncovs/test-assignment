import { createAction, props } from '@ngrx/store';
import { Post } from '../shared/types';

export const loadPostsSuccess = createAction('[Blog] Load posts success', props<{posts: Post[]}>());

export const loadPostsFailure = createAction('[Blog] Load posts failure', props<{error: any}>());
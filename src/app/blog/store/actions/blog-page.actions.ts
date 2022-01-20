import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Blog] Load posts');
export const selectPost = createAction('[Blog] Select current post', props<{currentPostId: number}>());
export const clearSelectedPost = createAction('[Blog] Clear selected post');
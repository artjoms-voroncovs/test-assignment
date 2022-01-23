import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Blog] Load posts');
export const selectPost = createAction('[Blog] Select current post', props<{currentPostId: number}>());
export const clearSelectedPost = createAction('[Blog] Clear selected post');
export const loadComments = createAction('[Blog] Load comments', props<{postId: number}>());
export const clearComments = createAction('[Blog] Clear comments');

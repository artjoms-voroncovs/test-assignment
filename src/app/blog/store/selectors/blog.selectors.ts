import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BlogState } from '../blog.reducer';

export const selectBlogFeatureState = createFeatureSelector<BlogState>('blog');

export const selectBlogPosts = createSelector(
    selectBlogFeatureState,
    (state: BlogState) => state.posts
);

export const selectCurrentPostId = createSelector(
    selectBlogFeatureState,
    (state: BlogState) => state.currentPostId
);

export const selectCurrentPost = createSelector(
    selectBlogFeatureState,
    selectCurrentPostId,
    (state: BlogState, currentPostId: number | null) => {
        const post = state.posts.find(post => post.id === currentPostId);
        return post ? post : null;
    }
);

export const selectPostsLoading = createSelector(
    selectBlogFeatureState,
    (state: BlogState) => {
        return state.postsLoading;
    }
);
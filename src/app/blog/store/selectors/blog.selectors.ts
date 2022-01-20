import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BlogState } from '../blog.reducer';

export const selectBlogFeatureState = createFeatureSelector<BlogState>('blog');

export const selectBlogPosts = createSelector(
    selectBlogFeatureState,
    (state: BlogState) => state.posts
);
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { BlogService } from '../blog.service';
import { blogApiActions, blogPageActions } from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Post } from './shared/types';

@Injectable()
export class BlogEffects {

    constructor(private actions$: Actions, private blogService: BlogService) { }

    loadPosts$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(blogPageActions.loadPosts),
                mergeMap(() => this.blogService.loadPosts()
                    .pipe(
                        map(posts => blogApiActions.loadPostsSuccess({ posts })),
                        catchError(error => of(blogApiActions.loadPostsFailure({ error })))
                    )
                )
            );
    });

}
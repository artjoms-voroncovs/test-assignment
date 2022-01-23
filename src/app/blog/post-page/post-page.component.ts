import { clearComments } from '../state/actions/blog-page.actions';
import { Comment } from '../state/shared/types';
import { selectCurrentPost, selectComments, selectCommentsLoading } from '../state/selectors/blog.selectors';
import { Component, AfterViewInit, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { blogPageActions } from '../state/actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../state/shared/types';

@Component({
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, AfterViewInit, OnDestroy {

    post$!: Observable<Post | null>
    postId: number = 0;
    comments$!: Observable<Comment[]>
    commentsLimit: number = 3;
    commentsLoading$!: Observable<boolean>

    constructor(
        private route: ActivatedRoute,
        private store: Store
    ) {

    }

    ngOnInit() {
        this.postId = +this.route.snapshot.params['id'];
        this.store.dispatch(blogPageActions.selectPost({ currentPostId: this.postId }));

        this.post$ = this.store.select(selectCurrentPost);
        this.comments$ = this.store.select(selectComments);
        this.commentsLoading$ = this.store.select(selectCommentsLoading)
    }

    ngAfterViewInit() {
        this.store.dispatch(blogPageActions.loadComments({ postId: this.postId }));
    }

    ngOnDestroy() {
        this.store.dispatch(clearComments());
    }

    showMore() {
        this.commentsLimit = this.commentsLimit + 3;
    }
}
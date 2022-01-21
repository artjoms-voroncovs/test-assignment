
import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, DoCheck } from "@angular/core";
import { blogPageActions } from './store/actions';
import { Store } from '@ngrx/store';
import { selectBlogPosts, selectCurrentPost, selectPostsLoading, selectComments } from './store/selectors/blog.selectors';
import { Observable, Subscription, Subscriber, combineLatest, forkJoin } from 'rxjs';
import { Post, Comment } from './store/shared/types';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterContentInit {
    posts$: Observable<Post[]> = new Observable<Post[]>();
    postsLoading$: Observable<boolean> = new Observable<boolean>();
    // currentPost$: Observable<Post | null> = new Observable<Post | null>();
    // comments$: Observable<Comment[]> = new Observable<Comment[]>();
    // currentPostAndComments!:  {currentPost: Observable<Post | null>, comments: Observable<Comment[]>};
    // currentPostSubscription!: Subscription;

    constructor(
        public dialog: MatDialog,
        private store: Store,
        public route: ActivatedRoute,
        public location: Location
    ) { }

    ngOnInit() {
        this.store.dispatch(blogPageActions.loadPosts());
        this.posts$ = this.store.select(selectBlogPosts);
        this.postsLoading$ = this.store.select(selectPostsLoading);
        //this.currentPost$ = this.store.select(selectCurrentPost);
        //this.comments$ = this.store.select(selectComments);
        //this.currentPostAndComments = { currentPost: this.currentPost$, comments: this.comments$ };

        // this.currentPostSubscription = this.currentPost$.subscribe((currentPost) => {
        //     if (currentPost !== null) {
        //         this.store.dispatch(blogPageActions.loadComments({ postId: currentPost.id }));
        //         this.openDialog()
        //     };
        // })
    }

    ngAfterContentInit() {
        const postId = +this.route.snapshot.params['id'];
        if (postId) this.onPostSelect(postId)
    }

    // ngOnDestroy() {
    //     this.store.dispatch(blogPageActions.clearSelectedPost());
    //     this.currentPostSubscription.unsubscribe();
    // }

    onPostSelect($event: any) {
        //this.store.dispatch(blogPageActions.selectPost({ currentPostId: $event }));
        // Replace state without component rerendering.
        //this.location.replaceState('/blog/post/' + $event);
    }

    // openDialog(): void {
    //     const dialogRef = this.dialog.open(DialogComponent, {
    //         width: '700px',
    //         data: this.currentPostAndComments
    //     })

    //     dialogRef.afterClosed().subscribe(() => {
    //         this.store.dispatch(blogPageActions.clearSelectedPost())
    //     })
    // }
}

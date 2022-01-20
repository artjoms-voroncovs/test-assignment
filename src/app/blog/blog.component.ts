
import { Component, OnInit, OnDestroy } from "@angular/core";
import { blogPageActions } from './store/actions';
import { Store } from '@ngrx/store';
import { selectBlogPosts, selectCurrentPost, selectPostsLoading } from './store/selectors/blog.selectors';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Post } from './store/shared/types';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

    posts$: Observable<Post[]> = new Observable<Post[]>();
    postsLoading$: Observable<boolean> = new Observable<boolean>();
    currentPost!: Post;
    currentPostSubscribe!: Subscription;

    constructor(
        private store: Store,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.store.dispatch(blogPageActions.loadPosts());
        this.posts$ = this.store.select(selectBlogPosts);
        this.postsLoading$ = this.store.select(selectPostsLoading);

        this.currentPostSubscribe = this.store.select(selectCurrentPost).subscribe((post: Post | null) => {
            if (post) {
                this.currentPost = post;
                this.openDialog();
                console.log('postOpened')
            }
        });
    }

    ngOnDestroy(){
        this.currentPostSubscribe.unsubscribe()
    }

    onPostSelect($event: any) {
        this.store.dispatch(blogPageActions.selectPost({ currentPostId: $event }));
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '700px',
            data: this.currentPost
        })

        dialogRef.afterClosed().subscribe(result => {
            this.store.dispatch(blogPageActions.clearSelectedPost())
        })
    }
}

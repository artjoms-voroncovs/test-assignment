import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: './guest-book.component.html',
    styleUrls: ['./guest-book.component.scss']
})
export class GuestBookComponent {
    constructor(
        public dialog: MatDialog,
        public route: ActivatedRoute,
        public location: Location
        ) { }



        //ngOnInit() {
            //this.currentPost$ = this.store.select(selectCurrentPost);
            //this.comments$ = this.store.select(selectComments);
            //this.currentPostAndComments = { currentPost: this.currentPost$, comments: this.comments$ };
    
            // this.currentPostSubscription = this.currentPost$.subscribe((currentPost) => {
            //     if (currentPost !== null) {
            //         this.store.dispatch(blogPageActions.loadComments({ postId: currentPost.id }));
            //         this.openDialog()
            //     };
            // })
        //}
    
        // ngAfterContentInit() {
        //     const postId = +this.route.snapshot.params['id'];
        //     if (postId) this.onPostSelect(postId)
        // }
    
        // ngOnDestroy() {
        //     this.store.dispatch(blogPageActions.clearSelectedPost());
        //     this.currentPostSubscription.unsubscribe();
        // }
    
        //onPostSelect($event: any) {
            //this.store.dispatch(blogPageActions.selectPost({ currentPostId: $event }));
            // Replace state without component rerendering.
            //this.location.replaceState('/blog/post/' + $event);
        //}
    
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
import { Component, OnInit } from "@angular/core";
import { blogPageActions } from './store/actions';
import { Store } from '@ngrx/store';
import { selectBlogPosts } from './store/selectors/blog.selectors';
import { Observable } from 'rxjs';
import { Post } from './store/shared/types';

@Component({
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

    posts$: Observable<Post[]> = new Observable<Post[]>();

    constructor(private store: Store) { }

    ngOnInit(){
        this.store.dispatch(blogPageActions.loadPosts());
        this.posts$ = this.store.select(selectBlogPosts);
        
    }
}
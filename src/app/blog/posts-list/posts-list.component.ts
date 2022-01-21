import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Post } from '../store/shared/types';
import { Store } from '@ngrx/store';
import { selectBlogPosts } from '../store/selectors/blog.selectors';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
    posts$!: Observable<Post[] | null>;

    constructor(private store: Store){}

    ngOnInit(){
        this.posts$ = this.store.select(selectBlogPosts);
    }
}

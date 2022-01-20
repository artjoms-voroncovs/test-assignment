import { Component, Input } from "@angular/core";
import { Post } from '../store/shared/types';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html'
})
export class PostsListComponent {
    @Input() posts: Post[] | null = [];
}

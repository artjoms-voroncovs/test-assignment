import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Post } from '../store/shared/types';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
    @Input() posts: Post[] | null = [];
    @Output() postSelect: EventEmitter<number> = new EventEmitter();

    onClick(postId: number){
        this.postSelect.emit(postId);
    }
}

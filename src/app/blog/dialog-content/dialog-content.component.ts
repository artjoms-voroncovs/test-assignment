import { Comment } from './../store/shared/types';
import { Component, Input, OnInit } from "@angular/core";
import { Post } from '../store/shared/types';

@Component({
    selector: 'app-dialog-content',
    templateUrl: './dialog-content.component.html',
    styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
    @Input() post: Post | null = null; 
    @Input() comments: Comment[] | null = [];
}
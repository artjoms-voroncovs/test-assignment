import { Component, Input } from "@angular/core";
import { Post } from '../store/shared/types';

@Component({
    selector: 'app-dialog-content',
    templateUrl: './dialog-content.component.html',
    styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
    @Input() data: any; 
}
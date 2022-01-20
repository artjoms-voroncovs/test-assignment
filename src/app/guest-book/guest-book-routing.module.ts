import { GuestBookComponent } from './guest-book.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Route[] = [
    { path: '', component: GuestBookComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class GuestBookRouterModule { }
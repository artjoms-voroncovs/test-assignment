import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { GuestBookRouterModule } from './guest-book-routing.module';

@NgModule({
    imports: [
        GuestBookRouterModule
    ]
})
export class GuestBookModule {}
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from "@angular/core";
import { BlogRoutingModule } from './blog-routing.module';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/blog.reducer';
import { BlogEffects } from './store/blog.effects';
import { BlogComponent } from './blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BlogComponent,
        PostsListComponent
    ],
    imports: [
        BlogRoutingModule,
        StoreModule.forFeature('blog', blogReducer),
        EffectsModule.forFeature([BlogEffects]),
        CommonModule
    ],
    providers: []
})
export class BlogModule { }
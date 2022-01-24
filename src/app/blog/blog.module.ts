import { PostPageComponent } from './post-page/post-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from "@angular/core";
import { BlogRoutingModule } from './blog-routing.module';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './state/blog.reducer';
import { BlogEffects } from './state/blog.effects';
import { BlogComponent } from './blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { CommentCardComponent } from './comment-card/comment-card.component';

@NgModule({
    declarations: [
        BlogComponent,
        PostsListComponent,
        PostCardComponent,
        PostPageComponent,
        CommentCardComponent
    ],
    imports: [
        BlogRoutingModule,
        StoreModule.forFeature('blog', blogReducer),
        EffectsModule.forFeature([BlogEffects]),
        CommonModule,
        MaterialModule
    ],
    providers: [],
})
export class BlogModule { }
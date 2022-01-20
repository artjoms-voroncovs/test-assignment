import { PostCardComponent } from './post-card/post-card.component';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from "@angular/core";
import { BlogRoutingModule } from './blog-routing.module';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/blog.reducer';
import { BlogEffects } from './store/blog.effects';
import { BlogComponent } from './blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        BlogComponent,
        PostsListComponent,
        PostCardComponent,
        DialogComponent
    ],
    imports: [
        BlogRoutingModule,
        StoreModule.forFeature('blog', blogReducer),
        EffectsModule.forFeature([BlogEffects]),
        CommonModule,
        MaterialModule
    ],
    providers: []
})
export class BlogModule { }
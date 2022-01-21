import { PostPageComponent } from './post-page/post-page.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from "@angular/core";
import { PostsListComponent } from './posts-list/posts-list.component';
import { BlogComponent } from './blog.component';

const routes: Route[] = [
    {
        component: BlogComponent, path: '', children: [
            { path: '', component: PostsListComponent },
            { path: 'post/:id', component: PostPageComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
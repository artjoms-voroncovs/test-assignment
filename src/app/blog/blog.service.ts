import { API_URL_DI_TOKEN } from './../api';
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Comment } from './state/shared/types';


@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(
        private httpClient: HttpClient,
         @Inject(API_URL_DI_TOKEN) private apiUrl: string
    ){}

    loadPosts(): Observable<Post[]>{
        return this.httpClient.get<Post[]>(`${this.apiUrl}/posts`);
    }

    loadComments(postId: number): Observable<Comment[]>{
        return this.httpClient.get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
    }
}
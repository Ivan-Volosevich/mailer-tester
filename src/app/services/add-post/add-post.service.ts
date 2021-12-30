import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewsPost } from '../../interface/news-post.model';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private http: HttpClient) { }

  sendNewPost(newPost: NewsPost) {
    return this.http.post<NewsPost>('/news/add-post', newPost);
  }
}

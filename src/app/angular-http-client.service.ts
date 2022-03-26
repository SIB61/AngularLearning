import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/types';
@Injectable({
  providedIn: 'root',
})
export class AngularHttpClientService {
  /// readonly ROOT_URL = "https://jsonplaceholder.typicode.com"
  readonly ROOT_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.ROOT_URL + '/posts');
  }
  createPost(post: Post): Observable<Post> {
    post.userId = 1;
    post.id = 12;
    return this.httpClient.post<Post>(this.ROOT_URL + '/posts', post);
  }
}

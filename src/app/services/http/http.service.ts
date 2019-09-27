import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Post} from "../../example-http/example-http.component";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private postsObs = new BehaviorSubject<Array<Post>>([]);
  posts$ = this.postsObs.asObservable();



  constructor(private http: HttpClient) {
    this.getPosts2();
  }

  //HttpInterceptor - mozna logowac kazde zapytanie, dopisywac naglowki ktore powtarzaja sie w kazdym zapytaniu

  getPosts2() {
    return this.http.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts").subscribe(posts => {
        this.postsObs.next(posts);
      },
      error => {
        console.log(error);
      });
  }

  // pobieramy wszystkie posty
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts");
  }

  // pobieramy jeden post o danym id
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  // pobieramy wszytskie posty usera podajac w parametrze jego id user
  getPostByUser(idUser: number): Observable<Array<Post>> {
    const params = new HttpParams().set('userId', String(idUser));
    return this.http.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts",
      {
        params: params
      }
    );
  }

  // dodajemy nowy post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", post);
  }

  // aktualizacja/podmieniamy post
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>("https://jsonplaceholder.typicode.com/posts/" + post.id, post);
  }

  // usuwamy post
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  // put bierze caly obiekt i zastepuje go na serwerze, wszystko nadpisuje czyli nawet usuwa pola jak nie damy go w body
  // patch mozemy zmienic jedna wartosc w poscie a reszta pozostaje bez zmian, update pol w obiektach
  // aktualizacja pol w obiekcie
  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>("https://jsonplaceholder.typicode.com/posts/" + post.id, post);
  }
}

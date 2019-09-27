import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http/http.service";
import {HttpErrorResponse} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-example-http',
  templateUrl: './example-http.component.html',
  styleUrls: ['./example-http.component.css']
})
export class ExampleHttpComponent implements OnInit {

  //async pipe
  allPosts$: Observable<Array<Post>>;

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
  }

  getPosts3(){
    this.allPosts$ = this.httpService.posts$;
  }

  getPostsToObservable(){
    this.allPosts$ = this.httpService.getPosts();
  }

  // .retry(3) jezeli rzuci bledem to jeszcze 3 razy sprobujemy odpytac serwer
  getPosts() {
    this.httpService.getPosts().subscribe(
      (posts: Array<Post>) => {
        console.log(posts);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getPost() {
    this.httpService.getPost(1).subscribe((post: Post) => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe((posts: Array<Post>) => {
      console.log(posts);
    });
  }

  addPost() {
    const newPost: Post = {
      body: 'Pierwszy post w angularze',
      id: null,
      title: 'Moj post',
      userId: 1
    };
    this.httpService.addPost(newPost).subscribe((newPostFromHttp: Post) => {
      console.log(newPostFromHttp);
    });
  }

  updatePost() {
    const updatePost: Post = {
      body: 'nowy wpis',
      id: 1,
      userId: 1
    };
    this.httpService.updatePost(updatePost).subscribe((updatedPost: Post) => {
      console.log(updatedPost);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const changePost: Post = {
      id: 1,
      body: "zmieniam zawartosc"
    };
    this.httpService.changePost(changePost).subscribe(post => {
      console.log(post);
    });
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

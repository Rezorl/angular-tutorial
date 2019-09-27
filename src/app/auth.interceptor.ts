import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

//dokleja do kazdego zapytania auth token
export class AuthInterceptor implements HttpInterceptor{

  private headers = new HttpHeaders().set('Autorization','token');

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = req.clone({headers: this.headers});
    return next.handle(reqClone);
  }

}

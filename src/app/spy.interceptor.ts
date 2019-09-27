import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class SpyInterceptor implements HttpInterceptor{

  //kazde zapytanie idace na serwer przechodzi przez te motode
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Zapytanie wykonano dnia: ', new Date());
    console.log('Zapytanie na adres: ', req.url);
    return next.handle(req);
  }

}

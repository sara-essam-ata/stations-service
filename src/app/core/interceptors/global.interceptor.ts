// import { HttpInterceptorFn } from '@angular/common/http';

// export const globalInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl: string ='https://jsonplaceholder.typicode.com/';

    let newRequest = request.clone({
      url: baseUrl + request.url
    });

    return next.handle(newRequest);
  }
}
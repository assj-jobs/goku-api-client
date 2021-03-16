import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true
    });
    return next
        .handle(req)
        .pipe(
        tap(event => {
                if (event instanceof HttpResponse) {}
                }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                    this.router.navigate(['/login']);
                    }
                }
            })
        );
  }
}
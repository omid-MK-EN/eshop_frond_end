import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {domain_name} from "./path_tools"



export class EshopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let myRequest: HttpRequest<any> = req;
    const myRequest = req.clone({
      url: domain_name + req.url
    });

    return next.handle(myRequest);
  }

}

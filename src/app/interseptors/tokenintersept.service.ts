import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParametresService } from '../services/parametres.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterseptService implements HttpInterceptor {

  constructor(private paramService: ParametresService) { }

  intercept(request, next) {
    var token = this.paramService.getToken();
    let newRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
    return next.handle(newRequest)
  }
}

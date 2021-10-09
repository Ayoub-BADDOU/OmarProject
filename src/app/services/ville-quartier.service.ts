import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VilleQuartierService {

  Url = "http://localhost:2022" + "/ville_quartier";
  constructor(private http: HttpClient) { }

  getVilles() {
    return this.http.get(this.Url + '/getVilles')
  }

}

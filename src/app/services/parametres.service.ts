import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  Url = "http://localhost:2022";
  constructor(private storage: Storage, public http: HttpClient) { }

  getCategories() {
    return this.http.get(this.Url + "/category" + "/getCategories")
  }

  getProductByCategory(id) {
    return this.http.post(this.Url + "/product" + "/getProductByCategory", { id })
  }
  setProduct(data) {
    return this.http.post(this.Url + "/product" + "/putProduct", data)
  }

  getHistoryOrdersConso() {
    return this.http.get(this.Url + "/orders" + "/getOrdersConsommateur")
  }

  // for authentification
  async getToken() {
    return await this.storage.get('token');
  }



}

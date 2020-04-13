import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  // private urlAPI = 'http://localhost:8080/promociones/verpromociones';
  private urlAPI = 'http://192.168.137.1:8080/promociones/verpromociones/';

  constructor(protected http: HttpClient) { }

  getPromociones() {
    return this.http.get(this.urlAPI);
  }

}

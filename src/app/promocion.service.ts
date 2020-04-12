import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(protected http: HttpClient) { }

  getPromociones() {
    return this.http.get('http://localhost:8080/promociones/verpromociones');
  }

}

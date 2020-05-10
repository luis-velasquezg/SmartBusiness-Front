import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  // private urlAPI = 'http://localhost:8080/smartbusiness/api/v1/promociones/';
  private urlAPI = 'http://192.168.137.1:8080/smartbusiness/api/v1/promociones';

  constructor(protected http: HttpClient) { }

  getPromocionesSugeridas(): Observable<any> {
    return this.http.get(this.urlAPI);
  }

  getPromocionesAplicadas(): Observable<any> {
    return this.http.get(this.urlAPI + '/guardadas/');
  }


}

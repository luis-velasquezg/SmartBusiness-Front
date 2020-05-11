import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promocion } from './classes/promocion';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  private urlAPI = 'http://localhost:8080/smartbusiness/api/v1/promociones';
  // private urlAPI = 'http://192.168.137.1:8080/smartbusiness/api/v1/promociones';

  constructor(protected http: HttpClient) { }

  getPromocionesSugeridas(): Observable<any> {
    return this.http.get(this.urlAPI);
  }

  getPromocionesAplicadas(): Observable<any> {
    return this.http.get(this.urlAPI + '/guardadas/');
  }

  // postPromocion(promocion: Promocion): Observable<any> {
  //   return this.http.post(this.urlAPI, promocion);
  // }


  
  postPromocion(promocion: Promocion) {
    // console.log(promocion)
    return this.http.post<Promocion>(this.urlAPI, promocion, httpOptions)/*.pipe(
      tap((newHero: RegistroActividadDTO) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<RegistroActividadDTO>('agregarRegistro'))
  );*/.subscribe();
  }


}

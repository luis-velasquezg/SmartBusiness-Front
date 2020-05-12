import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion.service';
import { Promocion } from '../../../classes/promocion';


@Component({
  selector: 'app-promociones-sugeridas',
  templateUrl: './promociones-sugeridas.component.html',
  styleUrls: ['./promociones-sugeridas.component.css']
})
export class PromocionesSugeridasComponent implements OnInit {

  title = 'Promociones Sugeridas';
  // promociones: any;
  promociones: Promocion[];
  mensaje: any;
  // error = false;

  constructor(
    protected promocionService: PromocionService
  ) { }

  ngOnInit(){
    this.promocionService.getPromocionesSugeridas()
    .subscribe(
      (data) => {
        this.promociones = data;
        console.log(this.promociones);
        // this.error = false;
      },
      (error) => {
        console.error(error);
        // this.error = true;
        // this.promociones-sugeridas = [];
      }
    );

    // this.promocionService.postPromocion(this.promocion)
    // .subscribe(
    //   data => {
    //     // this.promocion = data;
    //     this.mensaje = data;
    //   }
    // );

  }

  guardarPromocion(promocionNueva: Promocion): void {
    console.log(promocionNueva);
    this.mensaje = this.promocionService.postPromocion(promocionNueva);

  }


  

  /* ******
  // updateRegistro(registroActividadDTO: RegistroActividadDTO): Observable<any> {
  //   return this.http.put( 'http://localhost:8080/docente-api/registrosactividad/', registroActividadDTO, httpOptions).pipe(
  //       tap(_ => this.log(`updateRegistro id=${registroActividadDTO.id}`)),
  //       catchError(this.handleError<any>('updateRegistro'))
  //   );
  // }

  // save(): void {
  //   this.registroService.updateRegistro(this.registroActividad)
  //       .subscribe(() => this.goBack());
  // }
  */

}

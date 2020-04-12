import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  promociones: any;

  constructor(
    protected promocionService: PromocionService
  ) { }

  ngOnInit(){
    this.promocionService.getPromociones()
    .subscribe(
      (data) => {
        this.promociones = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion.service';

@Component({
  selector: 'app-promociones-aplicadas',
  templateUrl: './promociones-aplicadas.component.html',
  styleUrls: ['./promociones-aplicadas.component.css']
})
export class PromocionesAplicadasComponent implements OnInit {

  promociones: any;

  constructor(protected promocionService: PromocionService) { }

  ngOnInit() {
    this.promocionService.getPromocionesAplicadas()
    .subscribe(
      (data) => {
        this.promociones = data;
        console.log(this.promociones);
      }
    )
  }

}

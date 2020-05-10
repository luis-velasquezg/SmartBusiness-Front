import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  promociones: any;
  // error = false;

  
  constructor() {}

  ngOnInit(): void {}

// constructor(
  //   protected promocionService: PromocionService
  // ) { }

  // ngOnInit(){
  //   this.promocionService.getPromociones()
  //   .subscribe(
  //     (data) => {
  //       this.promociones = data;
  //       // this.error = false;
  //     },
  //     (error) => {
  //       console.error(error);
  //       // this.error = true;
  //       // this.promociones = [];
  //     }
  //   );
  // }

}

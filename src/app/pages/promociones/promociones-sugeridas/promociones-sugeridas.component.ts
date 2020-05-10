import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion.service';

@Component({
  selector: 'app-promociones-sugeridas',
  templateUrl: './promociones-sugeridas.component.html',
  styleUrls: ['./promociones-sugeridas.component.css']
})
export class PromocionesSugeridasComponent implements OnInit {

  promociones: any;
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
  }

}

import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  title = 'Promociones';
  promociones: any;
  // error = false;

  
  constructor() {}

  ngOnInit(): void {}

}

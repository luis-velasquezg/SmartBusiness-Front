import { Component, OnInit } from '@angular/core';
import { PromocionService } from './promocion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'smartbusiness-front';

  promociones: any ;

  constructor(
    protected promocionService: PromocionService
  ) { }

  ngOnInit() {
    this.promocionService.getPromociones()
    .subscribe(
      (data) => { // Success''
        this.promociones = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

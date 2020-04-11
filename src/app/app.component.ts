import { Component, OnInit } from '@angular/core';
import { PromocionService } from './promocion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'smartbusiness-front';

  users: any[] = [];
  // promociones: any[] = [];


  constructor(
    protected promocionService: PromocionService
  ) { }

  ngOnInit() {
    this.promocionService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

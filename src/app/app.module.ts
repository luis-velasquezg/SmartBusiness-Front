import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicio
import { PromocionService } from './promocion.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { PromocionesAplicadasComponent } from './pages/promociones/promociones-aplicadas/promociones-aplicadas.component';
import { PromocionesSugeridasComponent } from './pages/promociones/promociones-sugeridas/promociones-sugeridas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PromocionesComponent,
    HomeComponent,
    AboutComponent,
    PromocionesAplicadasComponent,
    PromocionesSugeridasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PromocionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

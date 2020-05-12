import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { PromocionesAplicadasComponent } from './pages/promociones/promociones-aplicadas/promociones-aplicadas.component';
import { PromocionesSugeridasComponent } from './pages/promociones/promociones-sugeridas/promociones-sugeridas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'promociones', component: PromocionesComponent,},
  { path: 'promociones-aplicadas', component: PromocionesAplicadasComponent},
  {path: 'promociones-sugeridas', component: PromocionesSugeridasComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

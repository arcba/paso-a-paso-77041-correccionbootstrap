import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MockArticulosFamiliasService } from './services/mock-articulos-familias.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticulosFamiliasService } from './services/articulos-familias.service';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MockArticulosService } from './services/mock-articulos.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    MockArticulosFamiliasService,
    ArticulosFamiliasService,
    MockArticulosService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule {}

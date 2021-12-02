import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { ShortsComponent } from './categorias/shorts/shorts.component';
import { AcessoriosComponent } from './categorias/acessorios/acessorios.component';
import { BrasileirosComponent } from './categorias/brasileiros/brasileiros.component';
import {CasacosComponent} from './categorias/casacos/casacos.component';
import {ChuteirasComponent} from './categorias/chuteiras/chuteiras.component'
import {EuropeusComponent} from './categorias/europeus/europeus.component';
import {MeiaoComponent} from './categorias/meiao/meiao.component';
import {RetroComponent} from './categorias/retro/retro.component';
import {SelecoesComponent} from './categorias/selecoes/selecoes.component';
import {CamisasComponent} from './categorias/camisas/camisas.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CategoriasComponent,
    AcessoriosComponent,
    BrasileirosComponent,
    CasacosComponent,
    ChuteirasComponent,
    EuropeusComponent,
    MeiaoComponent,
    RetroComponent,
    SelecoesComponent,
    CamisasComponent,
    ShortsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

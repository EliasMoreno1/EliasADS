import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './categorias/acessorios/acessorios.component';
import { BrasileirosComponent } from './categorias/brasileiros/brasileiros.component';
import { CamisasComponent } from './categorias/camisas/camisas.component';
import { CasacosComponent } from './categorias/casacos/casacos.component';
import { ChuteirasComponent } from './categorias/chuteiras/chuteiras.component';
import { EuropeusComponent } from './categorias/europeus/europeus.component';
import { MeiaoComponent } from './categorias/meiao/meiao.component';
import { RetroComponent } from './categorias/retro/retro.component';
import { SelecoesComponent } from './categorias/selecoes/selecoes.component';
import { ShortsComponent } from './categorias/shorts/shorts.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent },
  {path: 'acessorios', component: AcessoriosComponent },
  {path: 'brasileiros', component:BrasileirosComponent },
  {path: 'camisas', component:CamisasComponent },
  {path: 'casacos', component: CasacosComponent},
  {path: 'europeus', component:EuropeusComponent },
  {path: 'meiao', component: MeiaoComponent},
  {path: 'retro', component:RetroComponent },
  {path: 'selecoes', component:SelecoesComponent },
  {path: 'shorts', component:ShortsComponent },
  {path: 'chuteiras', component:ChuteirasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

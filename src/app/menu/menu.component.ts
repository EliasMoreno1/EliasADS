import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias:any = [
    {
      nome:'Acessórios',
      rota:'acessorios'
    },
    {
      nome:'Brasileiros',
      rota:'brasileiros'
    },
    {
      nome:'Camisas',
      rota:'camisas'
    },
    {
      nome:'Casacos',
      rota:'casacos'
    },
    {
      nome:'Chuteiras',
      rota:'chuteiras'
    },
    {
      nome:'Europeus',
      rota:'europeus'
    },
    {
      nome:'Meião',
      rota:'meiao'
    },
    {
      nome:'Retrô',
      rota:'retro'
    },
    {
      nome:'Seleções',
      rota:'selecoes'
    },
    {
      nome:'Shorts',
      rota:'shorts'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {
  itens:any=[
    {produto:'Mini Bola Milan Puma Icon - Preto+Vermelho'},
    {produto:'Bola Campo Kappa 8708 Verde Limao/Preto UN '},
    {produto:'Bola Futebol Campo Adidas UEFA '},
    {produto:'Champions League Pyrostorm '},
    {produto:'Bomba De Ar Poker Extreme C/ Bico Agulha - Azul'},
    {produto:'Bomba de Ar Ação Única Stadium Preto - Preto'},
    {produto:'Bomba De Ar Poker Extreme C/ Bico Agulha - Verde'},
    {produto:'Faixa de Capitão Poker Elástica - Azul+Preto'},
    {produto:'Cotoveleira Futsal Realtex Preto P - Preto'},
    {produto:'Joelheira Goleiro Mania De Futsal Premium - Preto'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent implements OnInit {
  itens:any=[
    {produto:'Jogo de Camisa Para Futebol Ax Esportes Vermelho Com Azul - 10+1'},
    {produto:'Kit 10 Camisas De Times De Futebol Europeu (bordada) Atacado A.J'},
    {produto:'Camisa de Time Brasileiros e europeus 2021 I'},
    {produto:'Camisa Puma Itália Away 2021 Juvenil - 10 Anos'},
    {produto:'Camisa Adidas Oficial México 1 Infantil 2018'},
    {produto:'Camisa Adidas Espanha Away 2021 Juvenil - 10'},
    {produto:'Camisa Manchester City Juvenil Away 21/22 s/n°'},
    {produto:'Adidas Camisa Argentina 1 Branca - Infantil Futebol 9-'},
    {produto:'Camisa Manchester City Juvenil Third 20/21 s/n°'},
    {produto:'Camisa 2 Juventus 21/22 Adidas - Unissex - Preto'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

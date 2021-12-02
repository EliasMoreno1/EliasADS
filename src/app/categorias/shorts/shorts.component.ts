import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
  itens:any=[
    {produto:'Bermuda Penalty X Preta'},
    {produto:'Bermuda Dray Lisa Preta'},
    {produto:'Bermuda Flamengo Ring Preta'},
    {produto:'Calção Umbro TWR Striker Vermelho'},
    {produto:'Bermuda Dray Friso Preta'},
    {produto:'Bermuda Fila Club Azul Marinho'},
    {produto:'Bermuda Kappa Carlo Variantes Preta'},
    {produto:'Bermuda Umbro TWR Fabric New Marinho'},
    {produto:'Bermuda Puma Performance Knit 10 Preta'},
    {produto:'Bermuda Fila Curve Pro Azul'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

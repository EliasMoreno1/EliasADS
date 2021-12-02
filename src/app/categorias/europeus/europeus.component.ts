import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europeus',
  templateUrl: './europeus.component.html',
  styleUrls: ['./europeus.component.css']
})
export class EuropeusComponent implements OnInit {
  itens:any=[
    {produto:'Camisa de Time Futebol Europeu '},
    {produto:'Camisa Joma Torino Third 2022'},
    {produto:'Camisa Umbro Burnley Treino 2020 Vinho'},
    {produto:'Jaqueta Puma Manchester City Pré Jogo Azul e Branca'},
    {produto:'Jaqueta Puma Borussia Dortmund Pré Jogo Preta'},
    {produto:'Jaqueta de Chuva Adidas Benfica 2021'},
    {produto:'Polo Adidas Benfica 2021 Vermelha'},
    {produto:'Camisa Macron PAOK Fourth 2021'},
    {produto:'Camisa Nike Barcelona Third Goleiro 2020'},
    {produto:'Camisa Umbro Burnley Away 2021 Manga Longa'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

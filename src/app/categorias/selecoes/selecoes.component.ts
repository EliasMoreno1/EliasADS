import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecoes',
  templateUrl: './selecoes.component.html',
  styleUrls: ['./selecoes.component.css']
})
export class SelecoesComponent implements OnInit {
  itens:any=[
    {produto:'Camisa Liga Retrô Brasil Faixa Feminino - Feminino - Amarelo'},
    {produto:'Camisa Seleção Da França I 20/21 Nike - Masculina'},
    {produto:'Camisa Seleção Suiça Home 20/21 s/n° Torcedor'},
    {produto:'Camiseta Uniforme França Seleção Do Mundo de Futebol'},
    {produto:'Camisa Seleção Italia Personalizada Camiseta Futebol Atividade Esportes'},
    {produto:'Camisa Seleção Espanha Infantil Home 20/21 s/no'},
    {produto:'Camisa Puma Itália Away 2021 Juvenil - 10 Anos'},
    {produto:'Camisa Puma Áustria Home 2020'},
    {produto:'Camisa Da Seleção Argentina Copa Da Europa Uniformes de Futebol Fora'},
    {produto:'Adidas Camisa Brasil Amarela - Masculino Originals P'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

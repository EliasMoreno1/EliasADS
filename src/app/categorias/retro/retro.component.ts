import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.css']
})
export class RetroComponent implements OnInit {
  itens:any=[
    {produto:'Camisa Jamaica Retrô No 10 Masculina - Masculino - Preto'},
    {produto:'08/09 Camiset Barcelona Retro Home Short Sleeve Camisa de Futebol Messi'},
    {produto:'Camisa Itália Retrô No 10 Masculina - Masculino - Branco'},
    {produto:'Camisa de Futebol Retrô 1994 Argentina Home Maradona #10 Home'},
    {produto:'Barcelona Retro Futebol Camisa 1996/1997 Personalizada Nome'},
    {produto:'10/11 Bayern Retro Home Camisa de Futebol Uniformes 2010/2011 Retrô'},
    {produto:'2010 Inter Milan Home Retro Camisa de Futebol Short Sleeve Home'},
    {produto:'Boca Juniors Home Retro Futebol Camisa 1999 Personalizada Nome'},
    {produto:'Camisa Nigéria Retrô No 10 Masculina - Masculino - Verde'},
    {produto:'Camisa Liga Retrô Brasil Faixa Feminino - Feminino - Amarelo'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casacos',
  templateUrl: './casacos.component.html',
  styleUrls: ['./casacos.component.css']
})
export class CasacosComponent implements OnInit {
  itens:any=[
    {produto:'Jaqueta Corta Vento Palmeiras Maior Campeão Masculina - Verde+Branco'},
    {produto:'Jaqueta Palmeiras Trilobal Bomber Masculina - Verde escuro'},
    {produto:'Jaqueta Corta Vento Corinthians Nike Sportwears Masculina - Preto+Roxo'},
    {produto:'Jaqueta Moletom Corinthians Juvenil Nike Team Pride - Preto+Branco'},
    {produto:'Jaqueta Corta Vento Corinthians Duo Masculina - Preto+Branco'},
    {produto:'aqueta Corta Vento Palmeiras Maior Campeão Masculina - Marinho+Azul'},
    {produto:'Jaqueta Corta Vento Liverpool Masculina - Vermelho+Branco'},
    {produto:'Jaqueta Corta Vento Roma Masculina - Vinho+Amarelo'},
    {produto:'Jaqueta Cruzeiro 21/22 Adidas Chuva Masculina - Azul+Branco'},
    {produto:'Jaqueta Barcelona Nike Academy Masculina - Grená+Marinho'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

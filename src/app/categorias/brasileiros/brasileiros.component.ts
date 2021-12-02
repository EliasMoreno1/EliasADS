import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brasileiros',
  templateUrl: './brasileiros.component.html',
  styleUrls: ['./brasileiros.component.css']
})
export class BrasileirosComponent implements OnInit {
  itens:any=[
    {produto:'Camisa Corinthians I 21/22 s/n° Torcedor Nike Masculina'},
    {produto:'Camisa Corinthians Pré-Jogo Nike Masculina'},
    {produto:'Camisa Flamengo II 21/22 s/n° Torcedor Adidas Masculina'},
    {produto:'Camisa Corinthians Juvenil Academy Pro 21/22 Nike'},
    {produto:'Camisa Avaí III 21/22 s/n° Torcedor Umbro Masculina'},
    {produto:'Camisa São Paulo 2008 Edição Especial Capitães RetrôMania Masculina'},
    {produto:'Camisa Vasco II 21/22 s/n° Torcedor Kappa'},
    {produto:'Camisa Bahia 1988 Edição Especial Capitães RetrôMania Masculina'},
    {produto:'Camisa Santos Black Edição Limitada 21/22 s/n° Torcedor Umbro Feminina'},
    {produto:'Camisa Ceará III 21/22 s/n° Torcedor Vozão Masculina'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

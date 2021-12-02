import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuteiras',
  templateUrl: './chuteiras.component.html',
  styleUrls: ['./chuteiras.component.css']
})
export class ChuteirasComponent implements OnInit {
  itens:any=[
    {produto:'Chuteira Society Nike Beco 2 TF - Vermelho+Branco'},
    {produto:'Chuteira Futsal Adidas Deportivo - Verde+Preto'},
    {produto:'Chuteira Campo Juvenil Nike Phantom Academy DF - Verde água'},
    {produto:'Chuteira Society Adidas Deportivo - Verde+Preto'},
    {produto:'Chuteira Society Grama Sintética Runway Winner Masculino - Branco'},
    {produto:'Chuteira Society Nike Beco 2 TF - Preto+Cobre'},
    {produto:'Chuteira Nemeziz 19.4 Fxg Adidas - Branco'},
    {produto:'Chuteira Campo Kappa Movement - Preto+Dourado'},
    {produto:'Chuteira Society Kappa Fast - Preto'},
    {produto:'Chuteira Futsal Nike Beco 2 - Preto+Dourado'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

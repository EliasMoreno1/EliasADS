import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meiao',
  templateUrl: './meiao.component.html',
  styleUrls: ['./meiao.component.css']
})
export class MeiaoComponent implements OnInit {
  itens:any=[
    {produto:'Kit 10 Meiões de Futebol Adulto - Top roupas, Preto'},
    {produto:'Kit 10 Meiões de Futebol Adulto - Cores Variadas - Top Roupas'},
    {produto:'Kit 10 Meiões de Futebol Adulto - Branco - Top roupas, Branco'},
    {produto:'Meião Futebol Longo Profissional'},
    {produto:'Meião de Futebol Degrade Adulto'},
    {produto:'Meião Adulto Penalty Matis Treino'},
    {produto:'Kit 13 Pares Meião Futebol Preto Produto Alta Qualidade Top Gled'},
    {produto:'Meião Futebol Kanxa Top Profissional 33 ao 38'},
    {produto:'Meião Penalty Sete, Preto'},
    {produto:'Meião Penalty Storm Juvenil'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

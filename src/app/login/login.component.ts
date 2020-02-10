import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ctm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public listTemperature = [
    {id: 1, name: 'Quente', icon: 'hot'},
    {id: 2, name: 'Morno', icon: 'warm'},
    {id: 3, name: 'Frio', icon: 'cold'}
  ];
  public listChanger = [
    {id: 1, name: 'Verde (atualizada)', icon: 'dot-green'},
    {id: 2, name: 'Amarela (à vencer)', icon: 'dot-yellow'},
    {id: 3, name: 'Vermelha (vencida)', icon: 'dot-alert'}
  ];
  
  constructor() { }

  ngOnInit() {
  }



}

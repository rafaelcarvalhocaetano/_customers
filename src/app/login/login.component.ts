import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ctm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public showFilter = false;

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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      temp: [],
      late: [],
      is_favorite: [],
      is_incorporation: [],
      is_not_incorporation: []
    });
  }

  public showFilterAction() {
    this.showFilter = !this.showFilter;
  }



}

import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ctm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public showFilter = true;
  public showDot = false;
  public openFilter = false;
  public showOpenDrop = false;
  public corp = false;
  public inCorp = false;
  public isFavorite = false;

  public listTemperature = [
    {id: 1, name: 'Quente', icon: 'hot'},
    {id: 2, name: 'Morno', icon: 'warm'},
    {id: 3, name: 'Frio', icon: 'cold'}
  ];
  public listChanger = [
    {id: 1, name: 'Verde', icon: 'dot-green'},
    {id: 2, name: 'Amarela', icon: 'dot-yellow'},
    {id: 3, name: 'Vermelha', icon: 'dot-alert'}
  ];

  @HostListener('document:click', ['$event'])
  onClick(ev) {
    if (this.showFilter) {
      if (!this.eRef.nativeElement.contains(ev.target)) {
        this.validator();
        this.showFilter = false;
      }
    }
  }

  constructor(
    private fb: FormBuilder,
    private eRef: ElementRef
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      temp: [],
      late: [],
      isFavorite: [],
      corporator: [],
      notCorporator: []
    });
  }

  public showFilterAction() {
    this.showFilter = !this.showFilter;
  }

  public search() {
    console.log(' search() ', this.form.value);
  }

  public tempData(event) {
    this.form.get('temp').setValue(event.name);
  }

  public changeData(event) {
    this.form.get('late').setValue(event.name);
  }

  public validator(): boolean {
    if (this.form.get('temp').value ||
      this.form.get('late').value ||
      this.form.get('isFavorite').value ||
      this.form.get('corporator').value ||
      this.form.get('notCorporator').value) {
        this.showDot = true;
    } else {
      this.showDot = false;
    }
    return this.showDot;
  }

  public resetForm() {
    this.form.reset();
  }

  public selectField(name: string) {
    this.isFavorite = !this.isFavorite;
    this.form.get(name).setValue(this.isFavorite);
  }

  public selectIncorporator() {
    this.corp = !this.corp;
    this.inCorp = false;
    this.form.get('corporator').setValue(this.corp);
    this.form.get('notCorporator').setValue(this.inCorp);
  }

  public selectNotCorp() {
    this.inCorp = !this.inCorp;
    this.corp = false;
    this.form.get('corporator').setValue(this.corp);
    this.form.get('notCorporator').setValue(this.inCorp);
  }



}

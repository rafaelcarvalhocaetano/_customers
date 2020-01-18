import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardOptions } from 'src/app/core/models/card';

@Component({
  selector: 'ctm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public open = true;

  @Output()
  public senClosed = new EventEmitter<boolean>();

  @Input()
  public optionsEdit?: CardOptions;  // uid | data

  public form: FormGroup;

  public options = [
    { description: 'Lead'},
    { description: 'Client'}
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      name: [null],
      firstName: [null],
      phone: [null],
      email: [null, [Validators.email]],
      user: [null]
    });
  }

  public submitForm() {
    console.log('FORM ', this.form.value);
    this.senClosed.emit(false);
  }

}

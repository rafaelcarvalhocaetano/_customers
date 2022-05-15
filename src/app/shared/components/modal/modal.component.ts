import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ctm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  public open = false;

  @Input()
  public formValue = {
    id: null,
    name: null,
    color: null,
    firstName: null,
    phone: null,
    email: null,
    client: null,
    lead: null,
  };

  public senClosed = false;

  @Output()
  public value = new EventEmitter<any>();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.formValue.id && null, [Validators.required]],
      name: [this.formValue.name && null, [Validators.required]],
      color: [this.formValue.color && null, [Validators.required]],
      firstName: [this.formValue.firstName && null, [Validators.required]],
      phone: [this.formValue.phone && null, [Validators.required]],
      email: [
        this.formValue.email && null,
        [Validators.email, Validators.required],
      ],
      client: [this.formValue.client && null, [Validators.required]],
      lead: [this.formValue.lead && null, [Validators.required]],
    });
  }

  public submitForm() {
    console.log(this.form.value);
    if (this.form.get('email').valid) {
      if (this.form.get('lead').value && this.form.get('client').value) {
        this.form.get('color').setValue(1);
      }
      if (this.form.get('lead').value && !this.form.get('client').value) {
        this.form.get('color').setValue(2);
      }
      if (!this.form.get('lead').value && this.form.get('client').value) {
        this.form.get('color').setValue(3);
      }
      this.value.emit({
        value: this.form.value,
        status: false,
      });
    }
  }

  public closeModal(): void {
    this.value.emit({
      value: this.form.value,
      status: false,
    });
  }
}

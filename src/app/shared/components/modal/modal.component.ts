import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DashService } from 'src/app/core/services/dash-service/dash.service';

@Component({
  selector: 'ctm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public open = false;

  @Input() public id: string;

  @Output()
  public senClosed = new EventEmitter<boolean>();

  public form: FormGroup;

  public options = [
    { description: 'Lead'},
    { description: 'Client'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: DashService
  ) { }

  ngOnInit() {
    this.createForm();
    this.updateForm();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null],
      colorId: [null],
      firstName: [null],
      phone: [null],
      email: [null, [Validators.email]],
      user: [null]
    });
  }

  private updateForm() {
    if (this.id) {
      this.service.findById(this.id).subscribe(resp => {
        this.form.patchValue({
          id: resp.id,
          name: resp.name,
          colorId: resp.colorId,
          firstName: resp.firstName,
          phone: resp.phone,
          email: resp.email,
          user: resp.user.toLowerCase()
        });
      });
    }
  }

  public submitForm() {
    if (this.id) {
      this.service.updateCustomer(this.form.value).subscribe(() => {
        this.senClosed.emit(false);
        this.service.findALlCustomer().subscribe(x => this.service.sendCustomer(x));
      });
    } else {
      this.service.createCustomer(this.form.value).subscribe(() => {
        this.senClosed.emit(false);
        this.service.findALlCustomer().subscribe(x => this.service.sendCustomer(x));
      });
    }
  }

}

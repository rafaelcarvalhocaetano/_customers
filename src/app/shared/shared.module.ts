import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardsComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardsComponent } from './components/cards/cards.component';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';

@NgModule({
  declarations: [
    CardsComponent,
    DashHeaderComponent
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
    CardsComponent,
    DashHeaderComponent
  ]
})
export class SharedModule { }

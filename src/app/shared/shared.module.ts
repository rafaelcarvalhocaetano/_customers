import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardsComponent } from './components/cards/cards.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    CardsComponent,
    SideMenuComponent
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
    SideMenuComponent
  ]
})
export class SharedModule { }

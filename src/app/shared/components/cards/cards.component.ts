import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ctm-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() card = {
    uuid: null,
    color: 1,
    typeClient: null,
    name: null,
    firstName: null
  };

}

import { Component, Input, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

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

  @Output()
  public clickEmitter = new EventEmitter<any>();
  @Output()
  public closeModal = new EventEmitter<boolean>();

  public showModal = false;

  public actions = [
    {
      id: 1,
      action: 'Update'
    },
    {
      id: 2,
      action: 'Delete'
    },
    {
      id: 3,
      action: 'Visited'
    }
  ];

  @HostListener('document:click', ['$event'])
  onClick(ev) {
    if (this.showModal) {
      if (!this.eRef.nativeElement.contains(ev.target)) {
        this.showModal = false;
        this.closeModal.emit(this.showModal);
      }
    }
  }

  constructor(private eRef: ElementRef) { }

  public openModal() {
    this.showModal = !this.showModal;
  }

}

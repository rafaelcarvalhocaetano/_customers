import {
  Component,
  Input,
  EventEmitter,
  Output,
  HostListener,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'ctm-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card = {
    id: null,
    color: null,
    client: false,
    lead: false,
    name: null,
    firstName: null,
  };

  @Output()
  public clickEmitter = new EventEmitter<any>();

  public closeModal = new EventEmitter<boolean>();
  public showModal = false;

  public actions = [
    {
      id: 1,
      action: 'Update',
    },
    {
      id: 2,
      action: 'Delete',
    },
    {
      id: 3,
      action: 'Visited',
    },
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

  constructor(private eRef: ElementRef) {}

  public openModal(): void {
    this.showModal = !this.showModal;
  }

  public typeClient(): string {
    if (this.card.lead && this.card.client) {
      return 'Super Client';
    }
    if (this.card.lead && !this.card.client) {
      return 'Lead';
    }
    if (!this.card.lead && this.card.client) {
      return 'Client';
    }
    return '';
  }
}

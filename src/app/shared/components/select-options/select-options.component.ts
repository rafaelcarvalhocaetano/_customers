import { Component, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ctm-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent {

  @Input()
  public text = '';

  @Input()
  public changeLate = false;

  @Input()
  public listOptions = [];

  @Output()
  public sendChange = new EventEmitter<string>();

  public showDropDown = false;
  public listChange = ['(atualizada)', '(à vencer)', '(vencida)'];

  @HostListener('document:click', ['$event'])
  onClick(ev) {
    ev.preventDefault();
    if (this.showDropDown) {
      if (!this.eRef.nativeElement.contains(ev.target)) {
        this.showDropDown = false;
      }
    }
  }

  constructor(
    private eRef: ElementRef
  ) { }

  public actioDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  public select(datatext: string) {
    this.text = datatext;
    this.showDropDown = false;
  }

}

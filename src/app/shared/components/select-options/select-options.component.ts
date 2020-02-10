import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'ctm-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent {

  public showDropDown = false;
  public text = 'Temperatura';

  public listTemperature = [
    {id: 1, name: 'Quente', icon: 'hot'},
    {id: 2, name: 'Morno', icon: 'warm'},
    {id: 3, name: 'Frio', icon: 'cold'}
  ];

  @HostListener('document:click', ['$event'])
  onClick(ev) {
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

import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ctm-dash-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output()
  public onAction: EventEmitter<string> = new EventEmitter<string>();

  public listActionDashboard: string[] = [
    "fas fa-plus",
    "fas fa-sort-amount-up-alt",
    "fas fa-cog",
    "fas fa-search",
  ];

  selectAction(index: number): void {
    const listAction: string[] = ["create", "order", "settings", "search"];
    this.onAction.emit(listAction[index]);
  }
}

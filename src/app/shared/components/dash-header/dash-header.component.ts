import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ctm-dash-header",
  templateUrl: "./dash-header.component.html",
  styleUrls: ["./dash-header.component.scss"],
})
export class DashHeaderComponent {
  @Output()
  public onAction = new EventEmitter<string>();

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

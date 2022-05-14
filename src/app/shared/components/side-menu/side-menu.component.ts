import { Component } from "@angular/core";

@Component({
  selector: "ctm-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent {
  public openModal = false;

  public listMenu = [
    {
      router: "/dashboard",
      icon: "far fa-dot-circle",
    },
    {
      router: "/login",
      icon: "fas fa-briefcase",
    },
    {
      router: "/filter",
      icon: "fas fa-box",
    },
    {
      router: "#",
      icon: "fas fa-signal",
    },
    {
      router: "#",
      icon: "fas fa-cog",
    },
  ];
}

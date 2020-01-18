import { Component } from '@angular/core';
import { DashService } from '../core/services/dash-service/dash.service';

@Component({
  selector: 'ctm-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  public openModal = false;

  public listMenu = [
    {
      router: '/dashboard',
      icon: 'far fa-dot-circle'
    },
    {
      router: '/login',
      icon: 'fas fa-briefcase'
    },
    {
      router: '#',
      icon: 'fas fa-box'
    },
    {
      router: '#',
      icon: 'fas fa-signal'
    },
    {
      router: '#',
      icon: 'fas fa-cog'
    },
  ];

}

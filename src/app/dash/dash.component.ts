import { Component } from '@angular/core';
import { CardOptions } from '../core/models/card';

@Component({
  selector: 'ctm-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {

  public openEditCard = false;
  public loader = false;
  public actions: CardOptions;
  public cards = [
    {
      uuid: '1232kjkj399-32882730-0h231--3230',
      color: 1,
      typeClient: 'lead',
      name: 'Rafael',
      firstName: 'Carvalho Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-30',
      color: 2,
      typeClient: 'client',
      name: 'Rosemeire',
      firstName: 'Ribeiro Braz'
    },
    {
      uuid: '4rt616g-9---9-9-9-923812321',
      color: 1,
      typeClient: 'lead',
      name: 'Vitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '4rt616g-9923812321',
      color: 1,
      typeClient: 'client',
      name: 'Heitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-0h231--3230',
      color: 1,
      typeClient: 'lead',
      name: 'Rafael',
      firstName: 'Carvalho Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-30',
      color: 2,
      typeClient: 'client',
      name: 'Rosemeire',
      firstName: 'Ribeiro Braz'
    },
    {
      uuid: '4rt616g-9---9-9-9-923812321',
      color: 1,
      typeClient: 'lead',
      name: 'Vitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '4rt616g-9923812321',
      color: 1,
      typeClient: 'client',
      name: 'Heitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-30',
      color: 2,
      typeClient: 'client',
      name: 'Rosemeire',
      firstName: 'Ribeiro Braz'
    },
    {
      uuid: '4rt616g-9---9-9-9-923812321',
      color: 1,
      typeClient: 'lead',
      name: 'Vitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '4rt616g-9923812321',
      color: 1,
      typeClient: 'client',
      name: 'Heitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-0h231--3230',
      color: 1,
      typeClient: 'lead',
      name: 'Rafael',
      firstName: 'Carvalho Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-30',
      color: 2,
      typeClient: 'client',
      name: 'Rosemeire',
      firstName: 'Ribeiro Braz'
    },
    {
      uuid: '4rt616g-9---9-9-9-923812321',
      color: 1,
      typeClient: 'lead',
      name: 'Vitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '4rt616g-9923812321',
      color: 1,
      typeClient: 'client',
      name: 'Heitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-0h231--3230',
      color: 1,
      typeClient: 'lead',
      name: 'Rafael',
      firstName: 'Carvalho Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-30',
      color: 2,
      typeClient: 'client',
      name: 'Rosemeire',
      firstName: 'Ribeiro Braz'
    },
    {
      uuid: '4rt616g-9---9-9-9-923812321',
      color: 1,
      typeClient: 'lead',
      name: 'Vitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '4rt616g-9923812321',
      color: 1,
      typeClient: 'client',
      name: 'Heitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '1232kjkj399-32882730-30',
      color: 2,
      typeClient: 'client',
      name: 'Rosemeire',
      firstName: 'Ribeiro Braz'
    },
    {
      uuid: '4rt616g-9---9-9-9-923812321',
      color: 1,
      typeClient: 'lead',
      name: 'Vitor',
      firstName: 'Ribeiro Caetano'
    },
    {
      uuid: '4rt616g-9923812321',
      color: 1,
      typeClient: 'client',
      name: 'Heitor',
      firstName: 'Ribeiro Caetano'
    }
  ];

  public clickEvent(data) {
    if (data.operationType === 1) {
      this.actions = data;
      this.openEditCard = true;
    }
  }

}

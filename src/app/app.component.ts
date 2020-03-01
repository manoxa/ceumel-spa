import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: MenuItem[] = [];

  ngOnInit(){
      
    this.menuItems = [{
        label: 'Operações',
        items: [
            {label: 'Fluxo de Caixa', icon: 'fa fa-plus', routerLink: ['caixa/fluxo-caixa'], routerLinkActiveOptions: { exact: true }},
            {label: 'PDV', icon: 'fa fa-download', routerLink: ['caixa/pdv'], routerLinkActiveOptions: { exact: true }}
        ]
    },
    {
        label: 'Estoque',
        items: [
            {label: 'Undo', icon: 'fa fa-refresh', routerLink: [''], routerLinkActiveOptions: { exact: true }},
            {label: 'Redo', icon: 'fa fa-repeat', routerLink: [''], routerLinkActiveOptions: { exact: true }}
        ]
    },
    {
        label: 'Cadastro',
        items: [
            {label: 'Undo', icon: 'fa fa-refresh', routerLink: [''], routerLinkActiveOptions: { exact: true }},
            {label: 'Redo', icon: 'fa fa-repeat', routerLink: [''], routerLinkActiveOptions: { exact: true }}
        ]
    },
    {
        label: 'Administração',
        items: [
            {label: 'Undo', icon: 'fa fa-refresh', routerLink: [''], routerLinkActiveOptions: { exact: true }},
            {label: 'Redo', icon: 'fa fa-repeat', routerLink: [''], routerLinkActiveOptions: { exact: true }}
        ]
    }
  ];
  }

  public goHome() {
  
  }


}

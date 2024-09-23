import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})

export class MenuBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: ['/home']
        },
        {
          label: 'Pessoa',
          icon: 'pi pi-user',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list',
                  routerLink: ['/pessoa-list']
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus',
                  routerLink: ['/pessoa-form']
              }
          ]
        },
        {
          label: 'Grupos de Finanças',
          icon: 'pi pi-th-large',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list'
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus'
              }
          ]
        },
        {
          label: 'Lançamentos',
          icon: 'pi pi-upload',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list'
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus'
              }
          ]
        },
        {
          label: 'Metas',
          icon: 'pi pi-chart-line',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list'
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus'
              }
          ]
        },
        {
          label: 'Relatórios',
          icon: 'pi pi-chart-bar',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list'
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus'
              }
          ]
        }
    ]
}
}

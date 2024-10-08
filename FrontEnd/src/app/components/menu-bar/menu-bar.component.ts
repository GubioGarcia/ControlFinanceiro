import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MenubarModule,
    SelectButtonModule,
    FormsModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})

export class MenuBarComponent implements OnInit {
  items: MenuItem[] | undefined;
  temas: any[] | undefined;
  temaSelecionado: string | undefined;

  constructor(private renderer: Renderer2) {}

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
                  icon: 'pi pi-list',
                  routerLink: ['/grupo-list']
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus',
                  routerLink: ['/grupo-form']
              }
          ]
        },
        {
          label: 'Lançamentos',
          icon: 'pi pi-upload',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list',
                  routerLink: ['/lancamento-list']
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus',
                  routerLink: ['/lancamento-form']
              }
          ]
        },
        {
          label: 'Metas',
          icon: 'pi pi-chart-line',
          items: [
              {
                  label: 'Listar',
                  icon: 'pi pi-list',
                  routerLink: ['/meta-list']
              },
              {
                  label: 'Adicionar',
                  icon: 'pi pi-plus',
                  routerLink: ['/meta-form']
              }
          ]
        },
        {
          label: 'Relatórios',
          icon: 'pi pi-chart-bar',
          routerLink: ['/home']
        }
    ];

    this.temas = [
      {
        label: 'Claro',
        icon: 'pi pi-sun',
        value: 'bootstrap4-light-blue'
      },
      {
        label: 'Escuro',
        icon: 'pi pi-moon',
        value: 'bootstrap4-dark-blue'
      }
    ]

    this.temaSelecionado = 'bootstrap4-light-blue';
    this.changeTheme(this.temaSelecionado);
  }

  changeTheme(theme: string) {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      this.renderer.setAttribute(themeLink, 'href', `assets/themes/${theme}/theme.css`);
    }
  }
}

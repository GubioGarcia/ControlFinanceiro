import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { ButtonModule } from 'primeng/button';
import { GrupoService } from '../../../services/grupo.service';
import { Grupo } from '../../../models/Grupo';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-grupo-list',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    MenuBarComponent,
    RouterModule,
    CommonModule,
    DialogModule
  ],
  templateUrl: './grupo-list.component.html',
  styleUrl: './grupo-list.component.css'
})
export class GrupoListComponent {
  grupos: Grupo[];
  displayDialog: boolean = false;
  grupoSelecionado?: Grupo;

  constructor(private grupoService: GrupoService) {
    this.grupos = this.grupoService.listarGrupo();
  }

  viewGrupo(grupo: Grupo) {
    this.grupoSelecionado = grupo;
    this.displayDialog = true;
  }
}

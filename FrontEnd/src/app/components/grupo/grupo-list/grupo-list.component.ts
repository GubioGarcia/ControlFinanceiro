import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { ButtonModule } from 'primeng/button';
import { GrupoService } from '../../../services/grupo.service';
import { Grupo } from '../../../models/Grupo';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { Pessoa } from '../../../models/Pessoa';

@Component({
  selector: 'app-grupo-list',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    MenuBarComponent,
    RouterModule,
    CommonModule,
    DialogModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './grupo-list.component.html',
  styleUrl: './grupo-list.component.css'
})
export class GrupoListComponent {
  nome: string = '';
  descricao: string = '';
  saldo: number = 0;
  pessoa: Pessoa = new Pessoa('', '', '');
  grupos: Grupo[] = [];

  displayDialogView: boolean = false;
  displayDialogEdit: boolean = false;
  displayErrorDialog: boolean = false;
  grupoSelecionado?: Grupo;
  router: any;
  errorMessage: string = '';

  constructor(private grupoService: GrupoService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.grupoService.get().subscribe({
      next: (response: Grupo[]) => {
        this.grupos = response;
      },
      error: (err) => {
        console.error('Erro ao carregar grupos', err);
      }
    });
  }

  viewGrupo(grupo: Grupo) {
    this.grupoSelecionado = grupo;
    this.displayDialogView = true;
  }

  editGrupo(grupo: Grupo) {
    this.grupoSelecionado = { ...grupo };
    this.displayDialogEdit = true;
  }

  deletarGrupo(id: number): void {
    if (confirm('Deseja excluir esse grupo?')) {
      this.grupoService.deletarGrupo(id).subscribe({
        next: () => {
          this.grupos = this.grupos.filter(g => g.id !== id);
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Grupo excluído com sucesso!'});
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao excluir grupo.'});
        }
      });
    }
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    if (this.grupoSelecionado) {
      this.grupoSelecionado.saldo = event.target.value;
    }
  }
}

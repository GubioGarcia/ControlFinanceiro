import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Meta } from '../../../models/Meta';
import { TipoCategoria } from '../../../models/TipoCategoria';
import { MetaService } from '../../../services/meta.service';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    MenuBarComponent,
    RouterModule,
    CommonModule,
    DialogModule,
    FormsModule,
    ToastModule,
    DropdownModule
  ],
  providers: [MessageService],
  templateUrl: './meta-list.component.html',
  styleUrls: ['./meta-list.component.css']
})
export class MetaListComponent {
  metas: Meta[] = [];
  displayDialogView: boolean = false;
  displayDialogEdit: boolean = false;
  displayErrorDialog: boolean = false;
  metaSelecionada?: Meta;
  errorMessage: string = '';

  tipos: TipoCategoria[] = [
    { label: 'ENTRADA', value: 'ENTRADA' },
    { label: 'SAIDA', value: 'SAIDA' }
  ];

  categorias: TipoCategoria[] = [
    { label: 'ALIMENTACAO', value: 'ALIMENTACAO' },
    { label: 'TRANSPORTE', value: 'TRANSPORTE' },
    { label: 'LAZER', value: 'LAZER' },
    { label: 'SAUDE', value: 'SAUDE' },
    { label: 'EDUCACAO', value: 'EDUCACAO' },
    { label: 'OUTROS', value: 'OUTROS' }
  ];

  constructor(private metaService: MetaService, private messageService: MessageService) {}

  ngOnInit() {
    this.metaService.get().subscribe((response: Meta[]) => {
      this.metas = response;
    });
  }

  viewMeta(meta: Meta) {
    this.metaSelecionada = meta;
    this.displayDialogView = true;
  }

  editMeta(meta: Meta) {
    this.metaSelecionada = { ...meta };
    this.displayDialogEdit = true;
  }

  updateMeta() {
    if (this.metaSelecionada) {
      if (!this.metaSelecionada.meta || this.metaSelecionada.meta.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A Meta não pode estar vazia.' });
        return;
      }
      if (this.metaSelecionada.valor < 1 || this.metaSelecionada.valor.toString().trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O valor da meta deve ser positivo.' });
        return;
      }
      if (!this.metaSelecionada.descricao || this.metaSelecionada.descricao.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A descrição da meta é obrigatória.' });
        return;
      }
      if (!this.metaSelecionada.tipo || this.metaSelecionada.tipo.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe o tipo da meta.' });
        return;
      }
      if (!this.metaSelecionada.categoria || this.metaSelecionada.categoria.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe a categoria da meta.' });
        return;
      }

      const updatedMeta: Meta = {
        ...this.metaSelecionada,
        tipo: this.metaSelecionada.tipo,
        categoria: this.metaSelecionada.categoria
      };

      this.metaService.atualizarMeta(this.metaSelecionada.id, updatedMeta).subscribe({
        next: (response) => {
          this.metas = this.metas.map(p => p.id === response.id ? response : p);
          this.displayDialogEdit = false;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Meta atualizada com sucesso!' });
        },
        error: (err) => {
          console.error('Erro ao atualizar meta', err);
          this.errorMessage = err.error.message || 'Erro ao atualizar a meta';
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: this.errorMessage });
        }
      });
    }
  }

  deletarMeta(id: number): void {
    if (confirm('Deseja excluir essa meta?')) {
      this.metaService.deleteMeta(id).subscribe({
        next: () => {
          this.metas = this.metas.filter(p => p.id !== id);
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Meta excluída com sucesso!' });
        },
        error: (err) => {
          console.error('Erro ao excluir a meta', err);
          this.errorMessage = err.error.message || 'Erro ao excluir a meta';
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: this.errorMessage });
        }
      });
    }
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    if (this.metaSelecionada) {
      this.metaSelecionada.valor = Number(event.target.value);
    }
  }
}

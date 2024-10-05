import { Component } from '@angular/core';
import { Lancamento } from '../../../models/Lancamento';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { LancamentoService } from '../../../services/lancamento.service';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { Grupo } from '../../../models/Grupo';
import { Pessoa } from '../../../models/Pessoa';
import { TipoCategoria } from '../../../models/TipoCategoria';

@Component({
  selector: 'app-lancamento-list',
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
  templateUrl: './lancamento-list.component.html',
  styleUrl: './lancamento-list.component.css'
})
export class LancamentoListComponent {
  lancamentos: Lancamento[] = [];
  displayDialogView: boolean = false;
  displayDialogEdit: boolean = false;
  displayErrorDialog: boolean = false;
  lancamentoSelecionado?: Lancamento;
  errorMessage: string = '';
  router: any;

  nome = '';
  descricao = '';
  valor = 0.00;
  data = '';
  tipo: TipoCategoria | null = null;
  categoria: TipoCategoria | null = null;
  grupo: Grupo = new Grupo('','',0, new Pessoa('','',''));

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

  constructor(private lancamentoService: LancamentoService, private messageService: MessageService) {}

  ngOnInit() {
    this.lancamentoService.get().subscribe({
      next: (response: Lancamento[]) => {
        this.lancamentos = response;
      },
      error: (err) => {
        console.error('Erro ao carregar os lançamentos', err);
      }
    });
  }

  viewLancamento(lancamento: Lancamento) {
    this.lancamentoSelecionado = lancamento;
    this.displayDialogView = true;
  }

  editLancamento(lancamento: Lancamento) {
    this.lancamentoSelecionado = { ...lancamento };
    this.displayDialogEdit = true;
  }

  updateLancamento() {
    if (this.lancamentoSelecionado) {
      if (!this.lancamentoSelecionado.nome || this.lancamentoSelecionado.nome.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O Nome não pode estar vazio.' });
        return;
      }
      if (!this.lancamentoSelecionado.descricao || this.lancamentoSelecionado.descricao.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A Descrição não pode estar vazia.' });
        return;
      }
      if (!this.lancamentoSelecionado.data) {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A data não pode estar vazia.' });
        return;
      }
      if (!this.lancamentoSelecionado.tipo || this.lancamentoSelecionado.tipo.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe o tipo do lançamento.' });
        return;
      }
      if (!this.lancamentoSelecionado.categoria || this.lancamentoSelecionado.categoria.trim() === '') {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe a categoria do lançamento.' });
        return;
      }

      const lancamentoAtualizado = {
        ...this.lancamentoSelecionado,
        tipo: this.lancamentoSelecionado.tipo,
        categoria: this.lancamentoSelecionado.categoria
      };
      this.lancamentoService.atualizarLancamento(lancamentoAtualizado.id, lancamentoAtualizado).subscribe({
        next: (response) => {
          this.lancamentos = this.lancamentos.map(l => l.id === response.id ? response : l);
          this.displayDialogEdit = false;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Lançamento atualizado com sucesso!' });
        },
        error: (err) => {
          console.error('Erro ao atualizar o lançamento', err);
          this.errorMessage = err.error.message || 'Erro ao atualizar o lançamento';
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: this.errorMessage });
        }
      });
    }
  }

  deletarLancamento(id: number): void {
    if (confirm('Deseja excluir esse lançamento?')) {
      this.lancamentoService.deletarLancamento(id).subscribe({
        next: () => {
          this.lancamentos = this.lancamentos.filter(l => l.id !== id);
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Lançamento excluído com sucesso!'});
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao excluir o lançamento.'});
        }
      });
    }
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    if (this.lancamentoSelecionado) {
      this.lancamentoSelecionado.valor = event.target.value;
    }
  }
}

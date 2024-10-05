import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { LancamentoListComponent } from '../lancamento-list/lancamento-list.component';
import { LancamentoService } from '../../../services/lancamento.service';
import { Lancamento } from '../../../models/Lancamento';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { TipoCategoria } from '../../../models/TipoCategoria';
import { Grupo } from '../../../models/Grupo';
import { Pessoa } from '../../../models/Pessoa';
import { GrupoService } from '../../../services/grupo.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-lancamento-form',
  standalone: true,
  imports: [
    FormsModule,
    MenuBarComponent,
    FloatLabelModule,
    ButtonModule,
    LancamentoListComponent,
    ToastModule,
    DropdownModule,
    CalendarModule
  ],
  providers: [MessageService],
  templateUrl: './lancamento-form.component.html',
  styleUrl: './lancamento-form.component.css'
})
export class LancamentoFormComponent {
  nome = '';
  descricao = '';
  valor = 0.00;
  data: Date = new Date();
  tipo: TipoCategoria | null = null;
  categoria: TipoCategoria | null = null;
  grupo: Grupo = new Grupo('','',0, new Pessoa('','',''));
  grupos: Grupo[] = [];
  grupoSelecionado?: Grupo;

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

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private grupoService: GrupoService
  ) {}

  ngOnInit() {
    this.grupoService.get().subscribe({
      next: (response: Grupo[]) => {
        this.grupos = response;
      },
      error: (err) => {
        console.error('Erro ao carregar pessoas', err);
      }
    });
  }

  adicionarLancamento() {
    if (!this.nome || this.nome.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A Meta não pode estar vazia.' });
      return;
    }
    if (!this.descricao || this.descricao.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A descrição da meta é obrigatória.' });
      return;
    }
    if (this.valor < 1 || this.valor.toString().trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O valor da meta deve ser positivo.' });
      return;
    }
    if (!this.data) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A descrição da meta é obrigatória.' });
      return;
    }
    if (!this.tipo || !this.tipo.value) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe o tipo da meta.' });
      return;
    }
    if (!this.categoria || !this.categoria.value) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe a categoria da meta.' });
      return;
    }
    if (!this.grupoSelecionado) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Selecione um Grupo.' });
      return;
    }

    const novoLancamento = new Lancamento(
      this.nome,
      this.descricao,
      this.valor,
      this.data,
      this.tipo.value,
      this.categoria.value,
      this.grupoSelecionado);
      this.lancamentoService.adicionarLancamento(novoLancamento).subscribe({
        next: () => {
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Lançamento adicionado com sucesso!'});
          this.limparFormulario();
        },
        error: (err) => {
          console.error('Erro ao adicionar lançamento', err);
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao adicionar lançamento.'});
        }
    });
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    this.valor = event.target.value;
  }

  limparFormulario() {
    this.nome = '';
    this.descricao = '';
    this.valor = 0;
    this.data = new Date();
    this.tipo = null;
    this.categoria = null;
    this.grupoSelecionado = undefined;
  }
}

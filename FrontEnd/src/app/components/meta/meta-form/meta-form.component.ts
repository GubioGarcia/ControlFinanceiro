import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { MessageService } from 'primeng/api';
import { Meta } from '../../../models/Meta';
import { MetaListComponent } from '../meta-list/meta-list.component';
import { MetaService } from '../../../services/meta.service';
import { ToastModule } from 'primeng/toast';
import { TipoCategoria } from '../../../models/TipoCategoria';

@Component({
  selector: 'app-meta-form',
  standalone: true,
  imports: [
    FormsModule,
    MenuBarComponent,
    FloatLabelModule,
    ButtonModule,
    MetaListComponent,
    ToastModule,
    DropdownModule
  ],
  providers: [MessageService],
  templateUrl: './meta-form.component.html',
  styleUrl: './meta-form.component.css'
})
export class MetaFormComponent {
  meta: string = '';
  valor: number = 0;
  descricao: string = '';
  tipo: TipoCategoria | null = null;
  categoria: TipoCategoria | null = null;

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

  adicionarMeta() {
    if (!this.meta || this.meta.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A Meta não pode estar vazia.' });
      return;
    }
    if (this.valor < 1 || this.valor.toString().trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O valor da meta deve ser positivo.' });
      return;
    }
    if (!this.descricao || this.descricao.trim() === '') {
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

    const novaMeta = new Meta(this.meta, this.valor, this.descricao, this.tipo.value, this.categoria.value);

    this.metaService.adicionarMeta(novaMeta).subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Meta adicionada com sucesso!'});
        this.limparFormulario();
      },
      error: (err) => {
        console.error('Erro ao adicionar a meta', err);
        const errorMessage = err.error.message || 'Erro ao adicionar a meta.';
        this.messageService.add({severity: 'error', summary: 'Erro', detail: errorMessage});
      }
    });
  }

  limparFormulario() {
    this.meta = '';
    this.valor = 0;
    this.descricao = '';
    this.tipo = null;
    this.categoria = null;
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    this.valor = event.target.value;
  }
}

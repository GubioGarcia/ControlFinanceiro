import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { LancamentoListComponent } from '../lancamento-list/lancamento-list.component';
import { LancamentoService } from '../../../services/lancamento.service';
import { Lancamento } from '../../../models/Lancamento';

@Component({
  selector: 'app-lancamento-form',
  standalone: true,
  imports: [
    FormsModule,
    MenuBarComponent,
    FloatLabelModule,
    ButtonModule,
    LancamentoListComponent
  ],
  templateUrl: './lancamento-form.component.html',
  styleUrl: './lancamento-form.component.css'
})
export class LancamentoFormComponent {
  nome = '';
  descricao = '';
  valor = 0.00;
  data = '';

  constructor(private lancamentoService: LancamentoService) {}

  adicionarLancamento() {
    const novoLancamento = new Lancamento(this.nome, this.descricao, this.valor, this.data);
    this.lancamentoService.adicionarLancamento(novoLancamento);
    alert('Lancamento adicionado com sucesso!');
  }
}

import { Component } from '@angular/core';
import { Lancamento } from '../../../models/Lancamento';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { LancamentoService } from '../../../services/lancamento.service';

@Component({
  selector: 'app-lancamento-list',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    MenuBarComponent,
    RouterModule,
    CommonModule,
    DialogModule
  ],
  templateUrl: './lancamento-list.component.html',
  styleUrl: './lancamento-list.component.css'
})
export class LancamentoListComponent {
  lancamentos: Lancamento[];
  displayDialog: boolean = false;
  lancamentoSelecionado?: Lancamento;

  constructor(private lancamentoService: LancamentoService) {
    this.lancamentos = this.lancamentoService.listarLancamento();
  }

  viewLancamento(lancamento: Lancamento) {
    this.lancamentoSelecionado = lancamento;
    this.displayDialog = true;
  }
}

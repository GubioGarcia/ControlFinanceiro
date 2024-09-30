import { Component } from '@angular/core';
import { Pessoa } from '../../../models/Pessoa';
import { PessoaService } from '../../../services/pessoa.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'pessoa-form-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    TableModule,
    MenuBarComponent,
    DialogModule
  ],
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.css'
})
export class PessoaListComponent {
  pessoas: Pessoa[];
  displayDialog: boolean = false;
  pessoaSelecionada?: Pessoa;

  constructor(private pessoaService: PessoaService) {
    this.pessoas = this.pessoaService.listarPessoas();
  }

  // Exibe pessoa através de uma dialog
  viewPessoa(pessoa: Pessoa) {
    this.pessoaSelecionada = pessoa;
    this.displayDialog = true;
  }
}

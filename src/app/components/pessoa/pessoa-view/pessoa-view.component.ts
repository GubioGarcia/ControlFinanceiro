import { Component } from '@angular/core';
import { Pessoa } from '../../../models/Pessoa';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../../../services/pessoa.service';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';

@Component({
  selector: 'pessoa-view',
  standalone: true,
  imports: [
    CommonModule,
    MenuBarComponent
  ],
  templateUrl: './pessoa-view.component.html',
  styleUrl: './pessoa-view.component.css'
})
export class PessoaViewComponent {
  pessoa?: Pessoa;

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pessoa = this.pessoaService.obterPessoa(id);
  }
}

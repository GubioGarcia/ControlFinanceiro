import { Component } from '@angular/core';
import { PessoaService } from '../../../services/pessoa.service';
import { Pessoa } from '../../../models/Pessoa';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PessoaListComponent } from '../pessoa-list/pessoa-list.component';
import { ButtonModule } from 'primeng/button';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';

@Component({
  selector: 'pessoa-form',
  standalone: true,
  imports: [
    FormsModule,
    FloatLabelModule,
    PessoaListComponent,
    ButtonModule,
    MenuBarComponent
  ],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';

  constructor(private pessoaService: PessoaService) {}

  adicionarPessoa() {
    const novaPessoa = new Pessoa(this.nome, this.cpf, this.email);
    this.pessoaService.adicionarPessoa(novaPessoa);
    alert('Pessoa adicionada com sucesso!');
  }
}

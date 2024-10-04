import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { GrupoService } from '../../../services/grupo.service';
import { Grupo } from '../../../models/Grupo';
import { PessoaService } from '../../../services/pessoa.service';
import { Pessoa } from '../../../models/Pessoa';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-grupo-form',
  standalone: true,
  imports: [
    FormsModule,
    MenuBarComponent,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [MessageService],
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent implements OnInit {
  nome: string = '';
  descricao: string = '';
  saldo: number = 0.00;
  pessoa: Pessoa = new Pessoa('', '', '');
  pessoas: Pessoa[] = [];
  pessoaSelecionada?: Pessoa;

  constructor(
    private grupoService: GrupoService,
    private pessoaService: PessoaService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.pessoaService.get().subscribe({
      next: (response: Pessoa[]) => {
        this.pessoas = response;
      },
      error: (err) => {
        console.error('Erro ao carregar pessoas', err);
      }
    });
  }

  apenasNumeros(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
    this.saldo = event.target.value;
  }

  adicionarGrupo() {
    if (!this.nome || this.nome.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O Nome não pode estar vazio.' });
      return;
    }
    if (!this.descricao || this.descricao.trim() === '') {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'A descrição não pode estar vazio.' });
      return;
    }
    if (this.saldo < 1) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O Saldo deve ser positivo.' });
      return;
    }
    if (!this.pessoaSelecionada) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Selecione uma pessoa.' });
      return;
    }

    const novoGrupo = new Grupo(this.nome, this.descricao, this.saldo, this.pessoaSelecionada);
    this.grupoService.adicionarGrupo(novoGrupo).subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Grupo adicionado com sucesso!'});
        this.limparFormulario();
      },
      error: (err) => {
        console.error('Erro ao adicionar grupo', err);
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao adicionar grupo.'});
      }
    });
  }

  limparFormulario() {
    this.nome = '';
    this.descricao = '';
    this.saldo = 0;
    this.pessoaSelecionada = undefined;
  }
}

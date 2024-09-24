import { Component } from '@angular/core';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { GrupoService } from '../../../services/grupo.service';
import { Grupo } from '../../../models/Grupo';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { GrupoListComponent } from '../grupo-list/grupo-list.component';

@Component({
  selector: 'app-grupo-form',
  standalone: true,
  imports: [
    FormsModule,
    MenuBarComponent,
    FloatLabelModule,
    ButtonModule,
    GrupoListComponent
  ],
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent {
  nome: string = '';
  descricao: string = '';
  saldo: number = 0.00;

  constructor(private grupoService: GrupoService) {}

  adicionarGrupo() {
    const novoGrupo = new Grupo(this.nome, this.descricao, this.saldo);
    this.grupoService.adicionarGrupo(novoGrupo);
    alert('Grupo adicionado com sucesso!');
  }
}

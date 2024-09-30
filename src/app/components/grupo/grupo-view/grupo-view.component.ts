import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { Grupo } from '../../../models/Grupo';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from '../../../services/grupo.service';

@Component({
  selector: 'app-grupo-view',
  standalone: true,
  imports: [
    CommonModule,
    MenuBarComponent
  ],
  templateUrl: './grupo-view.component.html',
  styleUrl: './grupo-view.component.css'
})
export class GrupoViewComponent {
  grupo?: Grupo;

  constructor(private route: ActivatedRoute, private grupoService: GrupoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.grupo = this.grupoService.obterGrupo(id);
  }
}

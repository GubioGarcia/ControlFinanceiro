import { Component } from '@angular/core';
import { MetaService } from '../../../services/meta.service';
import { Meta } from '../../../models/Meta';
import { MetaListComponent } from '../meta-list/meta-list.component';
import { FormsModule } from '@angular/forms';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-meta-form',
  standalone: true,
  imports: [
    FormsModule,
    MenuBarComponent,
    FloatLabelModule,
    ButtonModule,
    MetaListComponent
  ],
  templateUrl: './meta-form.component.html',
  styleUrl: './meta-form.component.css'
})
export class MetaFormComponent {
  meta: string = '';
  valor: number = 0.00;
  descricao: string = '';

  constructor(private metaService: MetaService) {}

  adicionarMeta() {
    const novaMeta = new Meta(this.meta, this.valor, this.descricao);
    this.metaService.adicionarMeta(novaMeta);
    alert('Meta adiconada com sucesso');
  }
}

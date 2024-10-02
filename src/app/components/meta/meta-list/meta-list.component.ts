import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Meta } from '../../../models/Meta';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-meta-list',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    MenuBarComponent,
    RouterModule,
    CommonModule,
    DialogModule
  ],
  templateUrl: './meta-list.component.html',
  styleUrl: './meta-list.component.css'
})
export class MetaListComponent {
  metas: Meta[];
  displayDialog: boolean = false;
  metaSelecionada?: Meta;

  constructor(private metaService: MetaService) {
    this.metas = this.metaService.listarMeta();
  }

  viewMeta(meta: Meta) {
    this.metaSelecionada = meta;
    this.displayDialog = true;
  }
}

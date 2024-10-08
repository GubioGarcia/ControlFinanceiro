import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PessoaFormComponent } from './components/pessoa/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { GrupoFormComponent } from './components/grupo/grupo-form/grupo-form.component';
import { GrupoListComponent } from './components/grupo/grupo-list/grupo-list.component';
import { LancamentoFormComponent } from './components/lancamento/lancamento-form/lancamento-form.component';
import { LancamentoListComponent } from './components/lancamento/lancamento-list/lancamento-list.component';
import { MetaFormComponent } from './components/meta/meta-form/meta-form.component';
import { MetaListComponent } from './components/meta/meta-list/meta-list.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pessoa-form', component: PessoaFormComponent},
  {path: 'pessoa-list', component: PessoaListComponent},
  {path: 'grupo-form', component: GrupoFormComponent},
  {path: 'grupo-list', component: GrupoListComponent},
  {path: 'lancamento-form', component: LancamentoFormComponent },
  {path: 'lancamento-list', component: LancamentoListComponent},
  {path: 'meta-form', component: MetaFormComponent},
  {path: 'meta-list', component: MetaListComponent}
];

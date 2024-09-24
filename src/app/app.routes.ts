import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PessoaFormComponent } from './components/pessoa/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { PessoaViewComponent } from './components/pessoa/pessoa-view/pessoa-view.component';
import { GrupoFormComponent } from './components/grupo/grupo-form/grupo-form.component';
import { GrupoListComponent } from './components/grupo/grupo-list/grupo-list.component';
import { GrupoViewComponent } from './components/grupo/grupo-view/grupo-view.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pessoa-form', component: PessoaFormComponent},
  {path: 'pessoa-list', component: PessoaListComponent},
  {path: 'pessoa-view/:id', component: PessoaViewComponent},
  {path: 'grupo-form', component: GrupoFormComponent},
  {path: 'grupo-list', component: GrupoListComponent},
  {path: 'grupo-view/:id', component: GrupoViewComponent}
];

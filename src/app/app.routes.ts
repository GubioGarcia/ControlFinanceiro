import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PessoaFormComponent } from './components/pessoa/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { PessoaViewComponent } from './components/pessoa/pessoa-view/pessoa-view.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pessoa-form', component: PessoaFormComponent},
  {path: 'pessoa-list', component: PessoaListComponent},
  {path: 'pessoa-view/:id', component: PessoaViewComponent}
];

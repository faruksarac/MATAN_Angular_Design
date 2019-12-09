import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auths/login/login.component';
import {SignupComponent} from './auths/signup/signup.component';
import {HeadersComponent} from './components/headers/headers.component';
import {SwitchesComponent} from './components/switches/switches.component';
import {SmsActivateComponent} from './auths/sms-activate/sms-activate.component';
import {MessageBoxComponent} from './components/message-box/message-box.component';
import {FormsComponent} from  './components/forms/forms.component';
import {ChartsComponent} from './components/charts/charts.component';
import {ErrorComponent} from './error/error.component';
import {CreditCardComponent} from './components/credit-card/credit-card.component';
import {TablesComponent} from './components/tables/tables.component';
import {DragDropComponent} from './components/drag-drop/drag-drop.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {
  //   path: 'recipes', component: RecipesComponent,
  //   children: [
  //     {path: '', component: RecipeStartComponent},
  //     {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
  //     {path: ':id', component: RecipeDetailComponent},
  //     {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  //   ]
  // }
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'sms', component: SmsActivateComponent},
  {path:'headers', component: HeadersComponent},
  {path:'switches', component: SwitchesComponent},
  {path: 'message-box', component: MessageBoxComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'switches', component: SwitchesComponent},
  {path: 'charts', component: ChartsComponent},
  {path: '404', component: ErrorComponent},
  {path: 'payment', component: CreditCardComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'dragDrop', component: DragDropComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

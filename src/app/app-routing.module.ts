import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { FormsComponent } from './pages/forms/forms.component';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PresentationComponent },
  {path: 'directives', component: DirectivesComponent},
  {path: 'com', component: CommunicationComponent},
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {path: 'template', component: FormulairesComponent},
      {path: 'reactive', component: ReactiveFormsComponent},
      {path: '', redirectTo: '/forms/template', pathMatch: 'full' },
    ]
  },
  {path: 'accueil', redirectTo: '/'},
  {path: 'acceuil', redirectTo: '/'},
  //{path: '404', component: NotfoundComponent},
  //{path: '**', redirectTo: '/404'},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

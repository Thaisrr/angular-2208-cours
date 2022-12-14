import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ProductComponent } from './components/product/product.component';
import { AnotherEnfantComponent } from './components/another-enfant/another-enfant.component';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { FormsComponent } from './pages/forms/forms.component';
import { DependancesComponent } from './pages/dependances/dependances.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { ProductFilterPipe } from './utils/pipes/product-filter.pipe';
import { ObservablesComponent } from './pages/observables/observables.component';
import { RequestsComponent } from './pages/observables/requests/requests.component';
import {HttpClientModule} from '@angular/common/http';
import { OperatorsComponent } from './pages/observables/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    CounterComponent,
    DirectivesComponent,
    NavigationComponent,
    NotfoundComponent,
    CommunicationComponent,
    EnfantComponent,
    ProductComponent,
    AnotherEnfantComponent,
    FormulairesComponent,
    ReactiveFormsComponent,
    FormsComponent,
    DependancesComponent,
    RainbowPipe,
    ProductFilterPipe,
    ObservablesComponent,
    RequestsComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

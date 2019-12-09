import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoginComponent } from './auths/login/login.component';
import { SignupComponent } from './auths/signup/signup.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SwitchesComponent } from './components/switches/switches.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, NgSelectOption, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SmsActivateComponent } from './auths/sms-activate/sms-activate.component';
import {CountdownModule} from 'ngx-countdown';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { FormsComponent } from './components/forms/forms.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { ErrorComponent } from './error/error.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import {ChartsComponent} from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HeadersComponent,
    SwitchesComponent,
    SmsActivateComponent,
    MessageBoxComponent,
    FormsComponent,
    ErrorComponent,
    CreditCardComponent,
    ChartsComponent,
    TablesComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CountdownModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgSelectModule,
    HttpClientModule,
    ChartsModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,


  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

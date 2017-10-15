import { FormsModule } from '@angular/forms';
import { CaParamsModule } from './ca-params/ca-params.module';
import { HeaderModule } from './header/header.module';
import { CaInfoComponent } from './shared/ca-info/ca-info.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CaParamsComponent } from './ca-params/ca-params.component';
import { HeaderComponent } from './header/header.component';

// primeng
import { MenuItem, TabViewModule, DialogModule, ButtonModule, InputTextModule, PanelModule, DataTableModule } from 'primeng/primeng';
import { SidebarModule } from 'primeng/components/sidebar/sidebar'; // https://forum.primefaces.org/viewtopic.php?t=52766

// angular.material
import { MatSidenavModule } from '@angular/material';
import { CasComponent } from './cas/cas.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CaParamsComponent,
    HeaderComponent,
    CasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    TabViewModule,
    HeaderModule,
    CaParamsModule,
    SidebarModule,
    InputTextModule,
    FormsModule,
    PanelModule,
    DataTableModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

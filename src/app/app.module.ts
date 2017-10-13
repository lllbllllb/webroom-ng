import { CaParamsModule } from './ca-params/ca-params.module';
import { HeaderModule } from './header/header.module';
import { CaInfoComponent } from './shared/ca-info/ca-info.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaParamsComponent } from './ca-params/ca-params.component';
import { HeaderComponent } from './header/header.component';

// primeng
import { MenuItem, TabViewModule, DialogModule, ButtonModule} from 'primeng/primeng';

// angular.material
import { MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CaParamsComponent,
    HeaderComponent
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
    CaParamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// primeng
import { PanelModule, ButtonModule, InputTextModule } from 'primeng/primeng';

import { MessagesPanelComponent } from './messages-panel/messages-panel.component';
import { CaInfoComponent } from './ca-info/ca-info.component';
import { ActionsPanelComponent } from './actions-panel/actions-panel.component';

@NgModule({

  declarations: [
    CaInfoComponent,
    ActionsPanelComponent,
    MessagesPanelComponent
],
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    CaInfoComponent,
    ActionsPanelComponent,
    MessagesPanelComponent
  ]
})
export class SharedModule { }

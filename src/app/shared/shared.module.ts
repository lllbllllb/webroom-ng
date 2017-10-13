import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CaInfoComponent } from './ca-info/ca-info.component';

// primeng
import { PanelModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';


@NgModule({

  declarations: [
    CaInfoComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    CaInfoComponent
  ]
})
export class SharedModule { }

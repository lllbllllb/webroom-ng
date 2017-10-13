import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnCbComponent } from './own-cb/own-cb.component';

// primeng
import { ButtonModule, DataTableModule, SharedModule, CheckboxModule } from 'primeng/primeng';

@NgModule({

          declarations: [
                    OwnCbComponent
          ],
          imports: [
                    CommonModule,
                    ButtonModule,
                    DataTableModule,
                    SharedModule,
                    CheckboxModule
          ],
          exports: [
                    OwnCbComponent
          ]
})
export class CaParamsModule { }
